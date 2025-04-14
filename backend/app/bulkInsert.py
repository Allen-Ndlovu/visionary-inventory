from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from backend.app.database import SessionLocal
from backend.app.models import (
    Business, User, Category, Product,
    Supplier, Customer, Location,
    InventoryTransaction, TransactionType
)

def get_or_create(db, model, defaults=None, **kwargs):
    instance = db.query(model).filter_by(**kwargs).first()
    if instance:
        return instance
    else:
        params = dict(kwargs)
        if defaults:
            params.update(defaults)
        instance = model(**params)
        db.add(instance)
        try:
            db.commit()
        except IntegrityError:
            db.rollback()
            instance = db.query(model).filter_by(**kwargs).first()
        return instance

def main():
    db: Session = SessionLocal()

    businesses = [
        {"name": "Finlytics", "description": "AI-driven financial analytics", "industry_type": "Finance"},
        {"name": "FitNation", "description": "Fitness equipment & apparel", "industry_type": "Fitness"},
        {"name": "PetWorld", "description": "Pet supplies and grooming", "industry_type": "Retail"},
        {"name": "BrightHome", "description": "Smart home solutions", "industry_type": "Electronics"},
        {"name": "TravelNest", "description": "Boutique travel agency", "industry_type": "Travel"},
    ]

    for biz_data in businesses:
        biz = get_or_create(db, Business, **biz_data)

    db.commit()

    users = [
        {"business_id": 6, "username": "fin_admin", "email": "admin@finlytics.com", "role": "admin"},
        {"business_id": 7, "username": "fit_mgr", "email": "manager@fitnation.com", "role": "manager"},
        {"business_id": 8, "username": "pet_seller", "email": "shop@petworld.com", "role": "sales"},
        {"business_id": 9, "username": "brighthome_support", "email": "support@brighthome.com", "role": "support"},
        {"business_id": 10, "username": "travel_agent", "email": "agent@travelnest.com", "role": "agent"},
    ]

    for user in users:
        get_or_create(db, User, email=user["email"], defaults=user)

    categories = [
        {"business_id": 6, "name": "FinTech Tools", "description": "Analytics dashboards, APIs"},
        {"business_id": 7, "name": "Gym Equipment", "description": "Weights, machines, accessories"},
        {"business_id": 8, "name": "Pet Food", "description": "Dry & wet food for pets"},
        {"business_id": 9, "name": "Smart Devices", "description": "IoT, lighting, security"},
        {"business_id": 10, "name": "Travel Packages", "description": "Adventure and luxury tours"},
    ]

    for category in categories:
        get_or_create(db, Category, name=category["name"], business_id=category["business_id"], defaults=category)

    products = [
        {"business_id": 6, "category_id": 6, "name": "AI Forecast Engine", "sku": "FIN-AI001", "unit_price": 499.99},
        {"business_id": 7, "category_id": 7, "name": "Adjustable Dumbbells", "sku": "FIT-DMB01", "unit_price": 79.99},
        {"business_id": 8, "category_id": 8, "name": "Premium Dog Food", "sku": "PET-FD01", "unit_price": 29.99},
        {"business_id": 9, "category_id": 9, "name": "Smart Thermostat", "sku": "ELE-TSTAT01", "unit_price": 139.99},
        {"business_id": 10, "category_id": 10, "name": "Bali Escape Tour", "sku": "TRV-BALI01", "unit_price": 1200.00},
    ]

    for product in products:
        get_or_create(db, Product, sku=product["sku"], defaults=product)

    suppliers = [
        {"business_id": 6, "name": "FinAPI Ltd", "contact": "Dan Finley", "phone": "555-6001", "email": "dan@finapi.com", "address": "100 Wall Street"},
        {"business_id": 7, "name": "FitMakers", "contact": "Lara Strong", "phone": "555-6002", "email": "lara@fitmakers.com", "address": "Gym Park Ave"},
        {"business_id": 8, "name": "PetLove Wholesalers", "contact": "Ron Fur", "phone": "555-6003", "email": "ron@petlove.com", "address": "Pet Plaza, Unit 3"},
        {"business_id": 9, "name": "SmartGizmos", "contact": "Nina Tech", "phone": "555-6004", "email": "nina@smartgizmos.io", "address": "22 Circuit Lane"},
        {"business_id": 10, "name": "Wanderlust Inc", "contact": "Carlos Jet", "phone": "555-6005", "email": "carlos@wanderlust.com", "address": "Travel Tower 5"},
    ]

    for supplier in suppliers:
        get_or_create(db, Supplier, email=supplier["email"], defaults=supplier)

    customers = [
        {"business_id": 6, "name": "BizFin Corp", "email": "it@bizfin.com", "phone": "555-7001", "address": "Finance Hub"},
        {"business_id": 7, "name": "Urban Gym", "email": "equip@urbangym.com", "phone": "555-7002", "address": "Fitness Block B"},
        {"business_id": 8, "name": "Happy Paws Clinic", "email": "orders@happypaws.com", "phone": "555-7003", "address": "Animal Avenue"},
        {"business_id": 9, "name": "Smart Living", "email": "support@smartliving.com", "phone": "555-7004", "address": "Gadget Plaza 88"},
        {"business_id": 10, "name": "Adventure Seekers", "email": "booking@adventureseekers.com", "phone": "555-7005", "address": "Explorer HQ"},
    ]

    for customer in customers:
        get_or_create(db, Customer, email=customer["email"], defaults=customer)

    locations = [
        {"business_id": 6, "name": "Main Office", "address": "FinTech Park 1"},
        {"business_id": 7, "name": "Warehouse A", "address": "Fitness Industrial Area"},
        {"business_id": 8, "name": "Pet Storefront", "address": "Pet Lovers Plaza"},
        {"business_id": 9, "name": "Electro Depot", "address": "Tech Valley Complex"},
        {"business_id": 10, "name": "Booking Center", "address": "Travel City Block"},
    ]

    for loc in locations:
        get_or_create(db, Location, name=loc["name"], business_id=loc["business_id"], defaults=loc)

    # Inventory Transactions - these usually don’t need duplicate checks
    transactions = [
        InventoryTransaction(product_id=6, location_id=6, type=TransactionType.sale, quantity=3, unit_price=499.99),
        InventoryTransaction(product_id=7, location_id=7, type=TransactionType.purchase, quantity=100, unit_price=79.99),
        InventoryTransaction(product_id=8, location_id=8, type=TransactionType.sale, quantity=50, unit_price=29.99),
        InventoryTransaction(product_id=9, location_id=9, type=TransactionType.purchase, quantity=40, unit_price=139.99),
        InventoryTransaction(product_id=10, location_id=10, type=TransactionType.sale, quantity=10, unit_price=1200.00),
    ]
    db.add_all(transactions)
    db.commit()

    db.close()
    print("✅ Bulk insert complete without overwriting existing data.")

if __name__ == "__main__":
    main()
