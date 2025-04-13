# backend/app/seed.py

import os
import sys
from dotenv import load_dotenv
from sqlalchemy.exc import IntegrityError

# 1) Make sure we can import app.*
BACKEND_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
if BACKEND_DIR not in sys.path:
    sys.path.insert(0, BACKEND_DIR)

# 2) Load environment variables
load_dotenv(dotenv_path=os.path.join(BACKEND_DIR, ".env"))

# 3) Imports
from database import SessionLocal, Base, engine
from backend.app import models, schemas
from crud import (
    create_business, create_user, create_category,
    create_product, create_supplier, create_customer,
    create_inventory, create_purchase, create_sale,
    create_log
)

def get_or_create(db, model, defaults=None, **kwargs):
    """
    Attempt to get an existing record by kwargs.
    If none, create one with those kwargs + defaults.
    Returns (instance, created_boolean).
    """
    instance = db.query(model).filter_by(**kwargs).first()
    if instance:
        return instance, False
    params = {**kwargs}
    if defaults:
        params.update(defaults)
    instance = model(**params)
    db.add(instance)
    try:
        db.commit()
        db.refresh(instance)
        return instance, True
    except IntegrityError:
        db.rollback()
        # Another process may have inserted concurrently; fetch again
        instance = db.query(model).filter_by(**kwargs).first()
        return instance, False

def main():
    # Create tables
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()

    # --- Businesses ---
    b1, _ = get_or_create(
        db, models.Business,
        name="Acme Retail",
        defaults={"description":"Example retail store","industry_type":"Retail"}
    )
    b2, _ = get_or_create(
        db, models.Business,
        name="Globex Manufacturing",
        defaults={"description":"Industrial manufacturing","industry_type":"Manufacturing"}
    )

    # --- Users ---
    _, _ = get_or_create(
        db, models.User,
        username="admin_acme",
        defaults={
            "business_id": b1.id,
            "email": "admin@acme.com",
            "role": "admin",
            "is_active": True,
            "password_hash": "hashedpassword1"
        }
    )
    _, _ = get_or_create(
        db, models.User,
        username="manager_globex",
        defaults={
            "business_id": b2.id,
            "email": "manager@globex.com",
            "role": "manager",
            "is_active": True,
            "password_hash": "hashedpassword2"
        }
    )

    # --- Categories ---
    cat1, _ = get_or_create(
        db, models.Category,
        business_id=b1.id, name="Electronics",
        defaults={"description":"Electronic gadgets and devices"}
    )
    cat2, _ = get_or_create(
        db, models.Category,
        business_id=b1.id, name="Apparel",
        defaults={"description":"Clothing and accessories"}
    )
    cat3, _ = get_or_create(
        db, models.Category,
        business_id=b2.id, name="Raw Materials",
        defaults={"description":"Steel, plastics, etc."}
    )
    cat4, _ = get_or_create(
        db, models.Category,
        business_id=b2.id, name="Machinery",
        defaults={"description":"Industrial machines"}
    )

    # --- Suppliers ---
    sup1, _ = get_or_create(
        db, models.Supplier,
        business_id=b1.id, name="Electro Supplies Ltd.",
        defaults={"contact_name":"Alice Johnson","phone":"555-1001","email":"alice@electrosupplies.com","address":"100 Main St"}
    )
    sup2, _ = get_or_create(
        db, models.Supplier,
        business_id=b1.id, name="Fashion Hub",
        defaults={"contact_name":"Bob Smith","phone":"555-1002","email":"bob@fashionhub.com","address":"200 Market Ave"}
    )
    sup3, _ = get_or_create(
        db, models.Supplier,
        business_id=b2.id, name="SteelWorks Co.",
        defaults={"contact_name":"Carol Lee","phone":"555-2001","email":"carol@steelworks.com","address":"300 Industrial Rd"}
    )
    sup4, _ = get_or_create(
        db, models.Supplier,
        business_id=b2.id, name="MachinePro",
        defaults={"contact_name":"David Kim","phone":"555-2002","email":"david@machinepro.com","address":"400 Factory Blvd"}
    )

    # --- Customers ---
    cust1, _ = get_or_create(
        db, models.Customer,
        business_id=b1.id, name="John Doe",
        defaults={"email":"john@example.com","phone":"555-3001","address":"123 Elm St"}
    )
    cust2, _ = get_or_create(
        db, models.Customer,
        business_id=b1.id, name="Jane Roe",
        defaults={"email":"jane@example.com","phone":"555-3002","address":"456 Oak St"}
    )

    # --- Products ---
    prod1, _ = get_or_create(
        db, models.Product,
        business_id=b1.id, sku="WID-3000",
        defaults={
            "category_id": cat1.id,
            "name":"Widget 3000",
            "description":"Top‑selling widget",
            "unit_price":19.99,
            "tax_rate":0.07,
            "barcode":"1234567890123",
            "is_active":True
        }
    )
    prod2, _ = get_or_create(
        db, models.Product,
        business_id=b1.id, sku="TSHIRT-01",
        defaults={
            "category_id": cat2.id,
            "name":"T-Shirt",
            "description":"100% cotton t-shirt",
            "unit_price":9.99,
            "tax_rate":0.05,
            "barcode":"9876543210987",
            "is_active":True
        }
    )
    prod3, _ = get_or_create(
        db, models.Product,
        business_id=b2.id, sku="STL-BEAM",
        defaults={
            "category_id": cat3.id,
            "name":"Steel Beam",
            "description":"High-strength steel beam",
            "unit_price":150.00,
            "tax_rate":0.10,
            "barcode":"5555555555555",
            "is_active":True
        }
    )
    prod4, _ = get_or_create(
        db, models.Product,
        business_id=b2.id, sku="HP-5000",
        defaults={
            "category_id": cat4.id,
            "name":"Hydraulic Press",
            "description":"5000 PSI press",
            "unit_price":5000.00,
            "tax_rate":0.15,
            "barcode":"6666666666666",
            "is_active":True
        }
    )

    # --- Inventory ---
    inv1, _ = get_or_create(
        db, models.Inventory,
        product_id=prod1.id,
        defaults={"quantity":100, "min_stock_level":10}
    )
    inv2, _ = get_or_create(
        db, models.Inventory,
        product_id=prod2.id,
        defaults={"quantity":200, "min_stock_level":20}
    )
    inv3, _ = get_or_create(
        db, models.Inventory,
        product_id=prod3.id,
        defaults={"quantity":50, "min_stock_level":5}
    )
    inv4, _ = get_or_create(
        db, models.Inventory,
        product_id=prod4.id,
        defaults={"quantity":10, "min_stock_level":2}
    )

    # --- Purchases ---
    _, _ = get_or_create(
        db, models.Purchase,
        product_id=prod1.id, supplier_id=sup1.id, quantity=50,
        defaults={"purchase_price":15.00}
    )
    _, _ = get_or_create(
        db, models.Purchase,
        product_id=prod3.id, supplier_id=sup3.id, quantity=20,
        defaults={"purchase_price":120.00}
    )

    # --- Sales ---
    _, _ = get_or_create(
        db, models.Sale,
        product_id=prod1.id, customer_id=cust1.id, quantity=5,
        defaults={"sale_price":19.99}
    )
    _, _ = get_or_create(
        db, models.Sale,
        product_id=prod2.id, customer_id=cust2.id, quantity=2,
        defaults={"sale_price":9.99}
    )

    # --- Logs ---
    _, _ = get_or_create(
        db, models.Log,
        action="Created initial seed data",
        defaults={"user_id":1, "table_affected":"all", "row_id":None}
    )

    db.close()
    print("Database seeded successfully (idempotent).")

if __name__ == "__main__":
    main()
