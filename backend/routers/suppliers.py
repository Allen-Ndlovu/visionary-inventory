from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from backend.app import crud, schemas, dependencies

router = APIRouter()

@router.get("/", response_model=list[schemas.Supplier])
def read_suppliers(skip: int = 0, limit: int = 100, db: Session = Depends(dependencies.get_db)):
    return crud.list_suppliers(db, skip, limit)

@router.get("/{supplier_id}", response_model=schemas.Supplier)
def read_supplier(supplier_id: int, db: Session = Depends(dependencies.get_db)):
    s = crud.get_supplier(db, supplier_id)
    if not s:
        raise HTTPException(status_code=404, detail="Supplier not found")
    return s

@router.post("/", response_model=schemas.Supplier, status_code=status.HTTP_201_CREATED)
def create_supplier(supplier: schemas.SupplierCreate, db: Session = Depends(dependencies.get_db)):
    return crud.create_supplier(db, supplier)
