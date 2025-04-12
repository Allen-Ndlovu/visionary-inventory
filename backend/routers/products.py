from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from backend.app import crud, schemas, dependencies

router = APIRouter()

@router.get("/", response_model=list[schemas.Product])
def read_products(skip: int = 0, limit: int = 100, db: Session = Depends(dependencies.get_db)):
    return crud.list_products(db, skip, limit)

@router.get("/{product_id}", response_model=schemas.Product)
def read_product(product_id: int, db: Session = Depends(dependencies.get_db)):
    prod = crud.get_product(db, product_id)
    if not prod:
        raise HTTPException(status_code=404, detail="Product not found")
    return prod

@router.post("/", response_model=schemas.Product)
def create_product(product: schemas.ProductCreate, db: Session = Depends(dependencies.get_db)):
    return crud.create_product(db, product)
