from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from backend.app import crud, schemas, dependencies

router = APIRouter()

@router.get("/", response_model=list[schemas.Business])
def read_businesses(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(dependencies.get_db)
):
    return crud.list_businesses(db, skip, limit)

@router.get("/{business_id}", response_model=schemas.Business)
def read_business(
    business_id: int,
    db: Session = Depends(dependencies.get_db)
):
    b = crud.get_business(db, business_id)
    if not b:
        raise HTTPException(status_code=404, detail="Business not found")
    return b

@router.post(
    "/",
    response_model=schemas.Business,
    status_code=status.HTTP_201_CREATED
)
def create_business(
    business: schemas.BusinessCreate,
    db: Session = Depends(dependencies.get_db)
):
    return crud.create_business(db, business)
