from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from backend.app import crud, schemas, dependencies

router = APIRouter()

@router.get("/", response_model=list[schemas.Sale])
def read_sales(skip: int = 0, limit: int = 100, db: Session = Depends(dependencies.get_db)):
    return crud.list_sales(db, skip, limit)

@router.get("/{sale_id}", response_model=schemas.Sale)
def read_sale(sale_id: int, db: Session = Depends(dependencies.get_db)):
    sale = crud.get_sale(db, sale_id)
    if not sale:
        raise HTTPException(status_code=404, detail="Sale not found")
    return sale

@router.post("/", response_model=schemas.Sale)
def create_sale(sale: schemas.SaleCreate, db: Session = Depends(dependencies.get_db)):
    try:
        return crud.create_sale(db, sale)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
