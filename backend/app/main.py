from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from .database import Base, engine

# Import all routers using relative path from backend/
from ..routers import (
    businesses, users, categories, products,
    suppliers, customers, inventory,
    purchases, sales, logs
)

# Automatically create tables from models
Base.metadata.create_all(bind=engine)

# Initialize FastAPI application
app = FastAPI(title="Visionary Inventory API")

# 1) Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # your React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 2) Include your routers
app.include_router(businesses.router,   prefix="/businesses", tags=["businesses"])
app.include_router(users.router,        prefix="/users",      tags=["users"])
app.include_router(categories.router,   prefix="/categories", tags=["categories"])
app.include_router(products.router,     prefix="/products",   tags=["products"])
app.include_router(suppliers.router,    prefix="/suppliers",  tags=["suppliers"])
app.include_router(customers.router,    prefix="/customers",  tags=["customers"])
app.include_router(inventory.router,    prefix="/inventory",  tags=["inventory"])
app.include_router(purchases.router,    prefix="/purchases",  tags=["purchases"])
app.include_router(sales.router,        prefix="/sales",      tags=["sales"])
app.include_router(logs.router,         prefix="/logs",       tags=["logs"])


# FastAPI entrypoint—creates tables & registers all routers
