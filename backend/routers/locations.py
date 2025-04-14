from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from backend.app import crud, schemas, dependencies

router = APIRouter()

@router.get("/", response_model=list[schemas.Location])
def read_locations(skip: int = 0, limit: int = 100, db: Session = Depends(dependencies.get_db)):
    return crud.list_locations(db, skip, limit)

@router.get("/{location_id}", response_model=schemas.Location)
def read_location(location_id: int, db: Session = Depends(dependencies.get_db)):
    l = crud.get_location(db, location_id)
    if not l:
        raise HTTPException(status_code=404, detail="Location not found")
    return l

@router.post("/", response_model=schemas.Location, status_code=status.HTTP_201_CREATED)
def create_location(location: schemas.LocationCreate, db: Session = Depends(dependencies.get_db)):
    return crud.create_location(db, location)
