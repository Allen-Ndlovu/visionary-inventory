from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from backend.app.models import Business, User, Supplier, Customer, Inventory, Purchase, Sale, Log, Product
from database import SessionLocal

# Create a session
db: Session = SessionLocal()

# Sample Business data for 3 different businesses
businesses = [
    Business(name="Tech Retailers Ltd.", description="A leading retailer of tech products", industry_type="Technology"),
    Business(name="Fresh Food Co.", description="Retailer of organic groceries", industry_type="Grocery"),
    Business(name="Book World", description="Retailer of books and educational materials", industry_type="Retail")
]

# Add business to session
for business in businesses:
    db.add(business)
db.commit()  # Commit to get the business IDs
db.refresh(businesses[0])  # Refresh the first business to get the business_id

# Sample Users
users = [
    # Users for Business 1
    User(business_id=businesses[0].id, username="admin1", email="admin1@tech.com", password_hash="hashedpass123",
         role="admin", is_active=1),
    User(business_id=businesses[0].id, username="manager_john", email="john@tech.com", password_hash="hashedpass456",
         role="manager", is_active=1),
    User(business_id=businesses[0].id, username="sales_mary", email="mary@tech.com", password_hash="hashedpass789",
         role="sales", is_active=1),

    # Users for Business 2
    User(business_id=businesses[1].id, username="admin2", email="admin2@food.com", password_hash="hashedpass123",
         role="admin", is_active=1),
    User(business_id=businesses[1].id, username="manager_susan", email="susan@food.com", password_hash="hashedpass456",
         role="manager", is_active=1),

    # Users for Business 3
    User(business_id=businesses[2].id, username="admin3", email="admin3@books.com", password_hash="hashedpass123",
         role="admin", is_active=1),
    User(business_id=businesses[2].id, username="manager_mark", email="mark@books.com", password_hash="hashedpass456",
         role="manager", is_active=1)
]

# Sample Suppliers
suppliers = [
    # Suppliers for Business 1
    Supplier(business_id=businesses[0].id, name="Tech Distributors Ltd.", contact_name="Bob Smith", phone="0123456789",
             email="bob@techdistributors.com", address="123 Tech Park, City A"),

    # Suppliers for Business 2
    Supplier(business_id=businesses[1].id, name="FreshVeg Supply Co.", contact_name="Lily Green", phone="0987654321",
             email="lily@freshveg.com", address="45 Market Street, City B"),

    # Suppliers for Business 3
    Supplier(business_id=businesses[2].id, name="Book Source Inc.", contact_name="Harry Page", phone="0111222333",
             email="harry@booksource.com", address="Library Rd, City C")
]

# Sample Customers
customers = [
    # Customers for Business 1
    Customer(business_id=businesses[0].id, name="Alice Johnson", email="alice@tech.com", phone="07444441111",
             address="101 Tech Lane"),

    # Customers for Business 2
    Customer(business_id=businesses[1].id, name="Tom King", email="tom@food.com", phone="07555552222",
             address="202 Oak Avenue"),

    # Customers for Business 3
    Customer(business_id=businesses[2].id, name="Sandra Lee", email="sandra@books.com", phone="07666663333",
             address="303 Maple Blvd")
]

# Sample Products
products = [
    # Products for Business 1
    Product(business_id=businesses[0].id, category_id=None, name="MacBook Pro", description="High-end laptop",
            sku="MBP001", unit_price=2000.00, tax_rate=0.15),

    # Products for Business 2
    Product(business_id=businesses[1].id, category_id=None, name="Tomato", description="Fresh tomatoes", sku="TOM001",
            unit_price=1.50, tax_rate=0.10),

    # Products for Business 3
    Product(business_id=businesses[2].id, category_id=None, name="Harry Potter Book", description="Best-selling novel",
            sku="HPB001", unit_price=20.00, tax_rate=0.05)
]

# Sample Inventory
inventory = [
    Inventory(product_id=1, quantity=50, min_stock_level=10),
    Inventory(product_id=2, quantity=100, min_stock_level=20),
    Inventory(product_id=3, quantity=30, min_stock_level=5)
]

# Sample Purchases
purchases = [
    Purchase(product_id=1, supplier_id=1, quantity=10, purchase_price=2000.00),
    Purchase(product_id=2, supplier_id=2, quantity=50, purchase_price=1.50),
    Purchase(product_id=3, supplier_id=3, quantity=20, purchase_price=8.00)
]

# Sample Sales
sales = [
    Sale(product_id=1, customer_id=1, quantity=2, sale_price=2400.00),
    Sale(product_id=2, customer_id=2, quantity=5, sale_price=4.00),
    Sale(product_id=3, customer_id=3, quantity=1, sale_price=15.00)
]

# Sample Logs (Assume user_ids 1, 2, 3 exist)
logs = [
    Log(user_id=1, action="Added new product MacBook Pro", table_affected="products", row_id=1),
    Log(user_id=2, action="Updated inventory for Tomatoes", table_affected="inventory", row_id=2),
    Log(user_id=3, action="Processed sale to customer", table_affected="sales", row_id=3)
]

# Add all data to session in bulk
db.add_all(users + suppliers + customers + products + inventory + purchases + sales + logs)

# Commit all changes
db.commit()

# Close the session
db.close()

print("Bulk insert completed successfully!")
