from sqlalchemy.orm import Session
from . import models, schemas

# Business
def get_business(db: Session, id: int):
    return db.get(models.Business, id)

def list_businesses(db: Session, skip=0, limit=100):
    return db.query(models.Business).offset(skip).limit(limit).all()

def create_business(db: Session, b: schemas.BusinessCreate):
    obj = models.Business(**b.dict())
    db.add(obj); db.commit(); db.refresh(obj)
    return obj

# User
def get_user(db: Session, id: int):
    return db.get(models.User, id)

def list_users(db: Session, skip=0, limit=100):
    return db.query(models.User).offset(skip).limit(limit).all()

def create_user(db: Session, u: schemas.UserCreate):
    obj = models.User(**u.dict())
    db.add(obj); db.commit(); db.refresh(obj)
    return obj

# Category
def get_category(db: Session, id: int):
    return db.get(models.Category, id)

def list_categories(db: Session, skip=0, limit=100):
    return db.query(models.Category).offset(skip).limit(limit).all()

def create_category(db: Session, c: schemas.CategoryCreate):
    obj = models.Category(**c.dict())
    db.add(obj); db.commit(); db.refresh(obj)
    return obj

# Product
def get_product(db: Session, id: int):
    return db.get(models.Product, id)

def list_products(db: Session, skip=0, limit=100):
    return db.query(models.Product).offset(skip).limit(limit).all()

def create_product(db: Session, p: schemas.ProductCreate):
    obj = models.Product(**p.dict())
    db.add(obj); db.commit(); db.refresh(obj)
    return obj

# Supplier
def get_supplier(db: Session, id: int):
    return db.get(models.Supplier, id)

def list_suppliers(db: Session, skip=0, limit=100):
    return db.query(models.Supplier).offset(skip).limit(limit).all()

def create_supplier(db: Session, s: schemas.SupplierCreate):
    obj = models.Supplier(**s.dict())
    db.add(obj); db.commit(); db.refresh(obj)
    return obj

# Customer
def get_customer(db: Session, id: int):
    return db.get(models.Customer, id)

def list_customers(db: Session, skip=0, limit=100):
    return db.query(models.Customer).offset(skip).limit(limit).all()

def create_customer(db: Session, c: schemas.CustomerCreate):
    obj = models.Customer(**c.dict())
    db.add(obj); db.commit(); db.refresh(obj)
    return obj

# Location
def get_location(db: Session, id: int):
    return db.get(models.Location, id)

def list_locations(db: Session, skip=0, limit=100):
    return db.query(models.Location).offset(skip).limit(limit).all()

def create_location(db: Session, l: schemas.LocationCreate):
    obj = models.Location(**l.dict())
    db.add(obj); db.commit(); db.refresh(obj)
    return obj

# InventoryTransaction
def get_transaction(db: Session, id: int):
    return db.get(models.InventoryTransaction, id)

def list_transactions(db: Session, skip=0, limit=100):
    return db.query(models.InventoryTransaction).offset(skip).limit(limit).all()

def create_transaction(db: Session, t: schemas.InventoryTransactionCreate):
    obj = models.InventoryTransaction(**t.dict())
    db.add(obj); db.commit(); db.refresh(obj)
    return obj
