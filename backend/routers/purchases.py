from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from backend.app import crud, schemas, dependencies

router = APIRouter()

@router.get("/", response_model=list[schemas.Purchase])
def read_purchases(skip: int = 0, limit: int = 100, db: Session = Depends(dependencies.get_db)):
    return crud.list_purchases(db, skip, limit)

@router.get("/{purchase_id}", response_model=schemas.Purchase)
def read_purchase(purchase_id: int, db: Session = Depends(dependencies.get_db)):
    pur = crud.get_purchase(db, purchase_id)
    if not pur:
        raise HTTPException(status_code=404, detail="Purchase not found")
    return pur

@router.post("/", response_model=schemas.Purchase)
def create_purchase(purchase: schemas.PurchaseCreate, db: Session = Depends(dependencies.get_db)):
    return crud.create_purchase(db, purchase)
