from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from backend.app import crud, schemas, dependencies

router = APIRouter()

@router.get("/", response_model=list[schemas.Supplier])
def read_suppliers(skip: int = 0, limit: int = 100, db: Session = Depends(dependencies.get_db)):
    return crud.list_suppliers(db, skip, limit)

@router.get("/{supplier_id}", response_model=schemas.Supplier)
def read_supplier(supplier_id: int, db: Session = Depends(dependencies.get_db)):
    sup = crud.get_supplier(db, supplier_id)
    if not sup:
        raise HTTPException(status_code=404, detail="Supplier not found")
    return sup

@router.post("/", response_model=schemas.Supplier)
def create_supplier(supplier: schemas.SupplierCreate, db: Session = Depends(dependencies.get_db)):
    return crud.create_supplier(db, supplier)
