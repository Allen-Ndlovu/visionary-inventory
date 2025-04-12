from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from backend.app import crud, schemas, dependencies

router = APIRouter()

@router.get("/", response_model=list[schemas.Business])
def read_businesses(skip: int=0, limit: int=100, db: Session=Depends(dependencies.get_db)):
    return crud.list_businesses(db, skip, limit)

@router.post("/", response_model=schemas.Business)
def create_business(b: schemas.BusinessCreate, db: Session=Depends(dependencies.get_db)):
    return crud.create_business(db, b)

# Endpoints for businesses.