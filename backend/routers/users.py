from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from backend.app import crud, schemas, dependencies

router = APIRouter()

@router.get("/", response_model=list[schemas.User])
def read_users(skip: int=0, limit: int=100, db: Session=Depends(dependencies.get_db)):
    return crud.list_users(db, skip, limit)

@router.post("/", response_model=schemas.User)
def create_user(u: schemas.UserCreate, db: Session=Depends(dependencies.get_db)):
    return crud.create_user(db, u)

#Endpoints for users.
