# backend/app/crud.py

from sqlalchemy.orm import Session
from backend.app import models, schemas
from backend.utils.caching import cache_get, cache_set
from backend.utils.trees import AVLTree

# In‑memory AVL tree to track low‑stock priorities (you may insert inventory levels manually)
stock_tree = AVLTree()

# — Business CRUD
def get_business(db: Session, id: int):
    return db.query(models.Business).get(id)

def list_businesses(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Business).offset(skip).limit(limit).all()

def create_business(db: Session, b: schemas.BusinessCreate):
    obj = models.Business(**b.dict())
    db.add(obj); db.commit(); db.refresh(obj)
    return obj

# — User CRUD
def get_user(db: Session, id: int):
    return db.query(models.User).get(id)

def list_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()

def create_user(db: Session, u: schemas.UserCreate):
    obj = models.User(**u.dict())
    db.add(obj); db.commit(); db.refresh(obj)
    return obj

# — Category CRUD
def get_category(db: Session, id: int):
    return db.query(models.Category).get(id)

def list_categories(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Category).offset(skip).limit(limit).all()

def create_category(db: Session, c: schemas.CategoryCreate):
    obj = models.Category(**c.dict())
    db.add(obj); db.commit(); db.refresh(obj)
    return obj

# — Product CRUD
def get_product(db: Session, id: int):
    key = f"product:{id}"
    cached = cache_get(key)
    if cached:
        return cached
    obj = db.query(models.Product).get(id)
    if obj:
        cache_set(key, obj)
    return obj

def list_products(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Product).offset(skip).limit(limit).all()

def create_product(db: Session, p: schemas.ProductCreate):
    obj = models.Product(**p.dict())
    db.add(obj); db.commit(); db.refresh(obj)
    return obj

# — Supplier CRUD
def get_supplier(db: Session, id: int):
    return db.query(models.Supplier).get(id)

def list_suppliers(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Supplier).offset(skip).limit(limit).all()

def create_supplier(db: Session, s: schemas.SupplierCreate):
    obj = models.Supplier(**s.dict())
    db.add(obj); db.commit(); db.refresh(obj)
    return obj

# — Customer CRUD
def get_customer(db: Session, id: int):
    return db.query(models.Customer).get(id)

def list_customers(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Customer).offset(skip).limit(limit).all()

def create_customer(db: Session, c: schemas.CustomerCreate):
    obj = models.Customer(**c.dict())
    db.add(obj); db.commit(); db.refresh(obj)
    return obj

# — Inventory CRUD
def get_inventory(db: Session, id: int):
    return db.query(models.Inventory).get(id)

def list_inventory(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Inventory).offset(skip).limit(limit).all()

def create_inventory(db: Session, inv: schemas.InventoryCreate):
    obj = models.Inventory(**inv.dict())
    db.add(obj); db.commit(); db.refresh(obj)
    # Optionally insert into AVL by inventory quantity:
    # stock_tree.insert(obj.quantity, obj.id)
    return obj

# — Purchase CRUD
def list_purchases(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Purchase).offset(skip).limit(limit).all()

def create_purchase(db: Session, pc: schemas.PurchaseCreate):
    inv = db.query(models.Inventory).filter_by(product_id=pc.product_id).first()
    if inv:
        inv.quantity += pc.quantity
    obj = models.Purchase(**pc.dict())
    db.add(obj); db.commit(); db.refresh(obj)
    return obj

# — Sale CRUD
def list_sales(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Sale).offset(skip).limit(limit).all()

def create_sale(db: Session, sc: schemas.SaleCreate):
    inv = db.query(models.Inventory).filter_by(product_id=sc.product_id).first()
    if not inv or inv.quantity < sc.quantity:
        raise ValueError("Insufficient stock")
    inv.quantity -= sc.quantity
    obj = models.Sale(**sc.dict())
    db.add(obj); db.commit(); db.refresh(obj)
    return obj

# — Log CRUD
def list_logs(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Log).offset(skip).limit(limit).all()

def create_log(db: Session, l: schemas.LogCreate):
    obj = models.Log(**l.dict())
    db.add(obj); db.commit(); db.refresh(obj)
    return obj
