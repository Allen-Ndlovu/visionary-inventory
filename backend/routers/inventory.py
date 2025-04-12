from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from backend.app import crud, schemas, dependencies

router = APIRouter()

@router.get("/", response_model=list[schemas.Inventory])
def read_inventory(skip: int = 0, limit: int = 100, db: Session = Depends(dependencies.get_db)):
    return crud.list_inventory(db, skip, limit)

@router.get("/{inventory_id}", response_model=schemas.Inventory)
def read_inventory_item(inventory_id: int, db: Session = Depends(dependencies.get_db)):
    inv = crud.get_inventory(db, inventory_id)
    if not inv:
        raise HTTPException(status_code=404, detail="Inventory item not found")
    return inv

@router.post("/", response_model=schemas.Inventory)
def create_inventory(inv: schemas.InventoryCreate, db: Session = Depends(dependencies.get_db)):
    return crud.create_inventory(db, inv)
