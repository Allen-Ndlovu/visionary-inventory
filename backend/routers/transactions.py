from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from backend.app import crud, schemas, dependencies

router = APIRouter()

@router.get("/", response_model=list[schemas.InventoryTransaction])
def read_transactions(skip: int = 0, limit: int = 100, db: Session = Depends(dependencies.get_db)):
    return crud.list_transactions(db, skip, limit)

@router.get("/{tx_id}", response_model=schemas.InventoryTransaction)
def read_transaction(tx_id: int, db: Session = Depends(dependencies.get_db)):
    t = crud.get_transaction(db, tx_id)
    if not t:
        raise HTTPException(status_code=404, detail="Transaction not found")
    return t

@router.post("/", response_model=schemas.InventoryTransaction, status_code=status.HTTP_201_CREATED)
def create_transaction(tx: schemas.InventoryTransactionCreate, db: Session = Depends(dependencies.get_db)):
    return crud.create_transaction(db, tx)
