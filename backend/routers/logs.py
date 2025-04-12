from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from backend.app import crud, schemas, dependencies

router = APIRouter()

@router.get("/", response_model=list[schemas.Log])
def read_logs(skip: int = 0, limit: int = 100, db: Session = Depends(dependencies.get_db)):
    return crud.list_logs(db, skip, limit)

@router.get("/{log_id}", response_model=schemas.Log)
def read_log(log_id: int, db: Session = Depends(dependencies.get_db)):
    log = crud.get_log(db, log_id)
    if not log:
        raise HTTPException(status_code=404, detail="Log not found")
    return log

@router.post("/", response_model=schemas.Log)
def create_log(log: schemas.LogCreate, db: Session = Depends(dependencies.get_db)):
    return crud.create_log(db, log)
