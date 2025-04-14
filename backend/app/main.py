from fastapi import FastAPI, HTTPException
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import JSONResponse
import logging

from backend.app.database import Base, engine

# Import all routers using relative path from backend/
from backend.routers import (
    businesses, users, categories, products,
    suppliers, customers, transactions, locations
)

# Automatically create tables from models
Base.metadata.create_all(bind=engine)

# Initialize FastAPI application
app = FastAPI(title="Visionary Inventory API")

# Add CORS middleware to allow requests from React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # your React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers for different endpoints
for router, prefix in [
    (businesses.router, "/businesses"),
    (users.router, "/users"),
    (categories.router, "/categories"),
    (products.router, "/products"),
    (suppliers.router, "/suppliers"),
    (customers.router, "/customers"),
    (locations.router, "/locations"),
    (transactions.router, "/transactions"),
]:
    app.include_router(router, prefix=prefix, tags=[prefix.strip("/")])

# Global error handling for HTTPException
@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc):
    return JSONResponse(
        status_code=exc.status_code,
        content={"message": exc.detail}
    )

# Middleware for logging requests and responses
@app.middleware("http")
async def log_requests(request, call_next):
    logging.info(f"Request URL: {request.url}")
    response = await call_next(request)
    logging.info(f"Response status code: {response.status_code}")
    return response

# FastAPI entrypoint — creates tables and registers all routers
if __name__ == "__main__":
    Base.metadata.create_all(bind=engine)
