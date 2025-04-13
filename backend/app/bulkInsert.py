from sqlalchemy.orm import Session
from sqlalchemy import create_engine, and_
from backend.app.models import Business, User, Supplier, Customer
from backend.app.database import SessionLocal

# Create a session
db: Session = SessionLocal()

# Sample Business data
businesses_data = [
    {"name": "Tech Retailers Ltd.", "description": "A leading retailer of tech products", "industry_type": "Technology"},
    {"name": "Fresh Food Co.", "description": "Retailer of organic groceries", "industry_type": "Grocery"},
    {"name": "Book World", "description": "Retailer of books and educational materials", "industry_type": "Retail"}
]

# Add businesses only if not already present
businesses = []
for data in businesses_data:
    existing = db.query(Business).filter(Business.name == data["name"]).first()
    if existing:
        businesses.append(existing)
    else:
        new_business = Business(**data)
        db.add(new_business)
        db.commit()
        db.refresh(new_business)
        businesses.append(new_business)

# Sample Users
users_data = [
    # Users for Business 1
    {"business_id": businesses[0].id, "username": "admin1", "email": "admin1@tech.com", "password_hash": "hashedpass123", "role": "admin", "is_active": True},
    {"business_id": businesses[0].id, "username": "manager_john", "email": "john@tech.com", "password_hash": "hashedpass456", "role": "manager", "is_active": True},
    {"business_id": businesses[0].id, "username": "sales_mary", "email": "mary@tech.com", "password_hash": "hashedpass789", "role": "sales", "is_active": True},

    # Users for Business 2
    {"business_id": businesses[1].id, "username": "admin2", "email": "admin2@food.com", "password_hash": "hashedpass123", "role": "admin", "is_active": True},
    {"business_id": businesses[1].id, "username": "manager_susan", "email": "susan@food.com", "password_hash": "hashedpass456", "role": "manager", "is_active": True},

    # Users for Business 3
    {"business_id": businesses[2].id, "username": "admin3", "email": "admin3@books.com", "password_hash": "hashedpass123", "role": "admin", "is_active": True},
    {"business_id": businesses[2].id, "username": "manager_mark", "email": "mark@books.com", "password_hash": "hashedpass456", "role": "manager", "is_active": True}
]

# Add users if not already present
for data in users_data:
    existing_user = db.query(User).filter(User.email == data["email"]).first()
    if not existing_user:
        db.add(User(**data))
db.commit()

# Sample Suppliers
suppliers_data = [
    {"business_id": businesses[0].id, "name": "Tech Distributors Ltd.", "contact_name": "Bob Smith", "phone": "0123456789",
     "email": "bob@techdistributors.com", "address": "123 Tech Park, City A"},

    {"business_id": businesses[1].id, "name": "FreshVeg Supply Co.", "contact_name": "Lily Green", "phone": "0987654321",
     "email": "lily@freshveg.com", "address": "45 Market Street, City B"},

    {"business_id": businesses[2].id, "name": "Book Source Inc.", "contact_name": "Harry Page", "phone": "0111222333",
     "email": "harry@booksource.com", "address": "Library Rd, City C"}
]

for data in suppliers_data:
    existing_supplier = db.query(Supplier).filter(Supplier.email == data["email"]).first()
    if not existing_supplier:
        db.add(Supplier(**data))
db.commit()

# Sample Customers
customers_data = [
    {"business_id": businesses[0].id, "name": "Customer A", "contact_name": "John Doe", "phone": "5551234567",
     "email": "customerA@tech.com"},

    {"business_id": businesses[1].id, "name": "Customer B", "contact_name": "Jane Smith", "phone": "5552345678",
     "email": "customerB@food.com"},

    {"business_id": businesses[2].id, "name": "Customer C", "contact_name": "Michael Brown", "phone": "5553456789",
     "email": "customerC@books.com"}
]

for data in customers_data:
    existing_customer = db.query(Customer).filter(Customer.email == data["email"]).first()
    if not existing_customer:
        db.add(Customer(**data))
db.commit()

# Close the session
db.close()
