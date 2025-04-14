from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from backend.app import crud, schemas, dependencies

router = APIRouter()

@router.get("/", response_model=list[schemas.Category])
def read_categories(skip: int = 0, limit: int = 100, db: Session = Depends(dependencies.get_db)):
    return crud.list_categories(db, skip, limit)

@router.get("/{category_id}", response_model=schemas.Category)
def read_category(category_id: int, db: Session = Depends(dependencies.get_db)):
    c = crud.get_category(db, category_id)
    if not c:
        raise HTTPException(status_code=404, detail="Category not found")
    return c

@router.post("/", response_model=schemas.Category, status_code=status.HTTP_201_CREATED)
def create_category(category: schemas.CategoryCreate, db: Session = Depends(dependencies.get_db)):
    return crud.create_category(db, category)
