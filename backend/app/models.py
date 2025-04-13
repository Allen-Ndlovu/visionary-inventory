from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime, Numeric, Text, Enum, Boolean
from sqlalchemy.orm import relationship
from datetime import datetime
from .database import Base
import enum

class ChangeType(str, enum.Enum):
    added = "added"
    removed = "removed"

class Business(Base):
    __tablename__ = "businesses"
    id            = Column(Integer, primary_key=True, index=True)
    name          = Column(String(100), nullable=False)
    description   = Column(Text)
    industry_type = Column(String(100))
    created_at    = Column(DateTime, default=datetime.utcnow)

    users      = relationship("User", back_populates="business")
    categories = relationship("Category", back_populates="business")
    products   = relationship("Product", back_populates="business")
    suppliers  = relationship("Supplier", back_populates="business")
    customers  = relationship("Customer", back_populates="business")

class User(Base):
    __tablename__ = "users"
    id            = Column(Integer, primary_key=True, index=True)
    business_id   = Column(Integer, ForeignKey("businesses.id", ondelete="CASCADE"))
    username      = Column(String(50), unique=True, nullable=False)
    email         = Column(String(100), unique=True, nullable=False)
    password_hash = Column(Text, nullable=False)
    role          = Column(String(20), nullable=False)
    is_active     = Column(Boolean, default=True)
    created_at    = Column(DateTime, default=datetime.utcnow)

    business = relationship("Business", back_populates="users")

class Category(Base):
    __tablename__ = "categories"
    id          = Column(Integer, primary_key=True, index=True)
    business_id = Column(Integer, ForeignKey("businesses.id", ondelete="CASCADE"))
    name        = Column(String(100), nullable=False)
    description = Column(Text)

    business = relationship("Business", back_populates="categories")
    products = relationship("Product", back_populates="category")

class Product(Base):
    __tablename__ = "products"
    id            = Column(Integer, primary_key=True, index=True)
    business_id   = Column(Integer, ForeignKey("businesses.id", ondelete="CASCADE"))
    category_id   = Column(Integer, ForeignKey("categories.id", ondelete="SET NULL"))
    name          = Column(String(100), nullable=False)
    description   = Column(Text)
    sku           = Column(String(50), unique=True, nullable=False)
    unit_price    = Column(Numeric(10,2), nullable=False)
    tax_rate      = Column(Numeric(5,2), default=0.00)
    barcode       = Column(String(50))
    is_active     = Column(Integer, default=1)
    created_at    = Column(DateTime, default=datetime.utcnow)

    business = relationship("Business", back_populates="products")
    category = relationship("Category", back_populates="products")
    inventory= relationship("Inventory", back_populates="product")
    purchases= relationship("Purchase", back_populates="product")
    sales    = relationship("Sale", back_populates="product")

class Supplier(Base):
    __tablename__ = "suppliers"
    id          = Column(Integer, primary_key=True, index=True)
    business_id = Column(Integer, ForeignKey("businesses.id", ondelete="CASCADE"))
    name        = Column(String(100), nullable=False)
    contact_name= Column(String(100))
    phone       = Column(String(20))
    email       = Column(String(100))
    address     = Column(Text)

    business = relationship("Business", back_populates="suppliers")
    purchases= relationship("Purchase", back_populates="supplier")

class Customer(Base):
    __tablename__ = "customers"
    id            = Column(Integer, primary_key=True, index=True)
    business_id   = Column(Integer, ForeignKey("businesses.id", ondelete="CASCADE"))
    name          = Column(String(100), nullable=False)
    contact_name  = Column(String(100))  # <-- Add this
    email         = Column(String(100))
    phone         = Column(String(20))
    address       = Column(Text)

    business = relationship("Business", back_populates="customers")
    sales    = relationship("Sale", back_populates="customer")

class Inventory(Base):
    __tablename__ = "inventory"
    id              = Column(Integer, primary_key=True, index=True)
    product_id      = Column(Integer, ForeignKey("products.id", ondelete="CASCADE"))
    quantity        = Column(Integer, nullable=False)
    min_stock_level = Column(Integer, default=0)
    last_updated    = Column(DateTime, default=datetime.utcnow)

    product = relationship("Product", back_populates="inventory")

class Purchase(Base):
    __tablename__ = "purchases"
    id             = Column(Integer, primary_key=True, index=True)
    product_id     = Column(Integer, ForeignKey("products.id", ondelete="CASCADE"))
    supplier_id    = Column(Integer, ForeignKey("suppliers.id", ondelete="SET NULL"))
    quantity       = Column(Integer, nullable=False)
    purchase_price = Column(Numeric(10,2), nullable=False)
    purchase_date  = Column(DateTime, default=datetime.utcnow)

    product  = relationship("Product", back_populates="purchases")
    supplier = relationship("Supplier", back_populates="purchases")

class Sale(Base):
    __tablename__ = "sales"
    id         = Column(Integer, primary_key=True, index=True)
    product_id = Column(Integer, ForeignKey("products.id", ondelete="CASCADE"))
    customer_id= Column(Integer, ForeignKey("customers.id", ondelete="SET NULL"))
    quantity   = Column(Integer, nullable=False)
    sale_price = Column(Numeric(10,2), nullable=False)
    sale_date  = Column(DateTime, default=datetime.utcnow)

    product  = relationship("Product", back_populates="sales")
    customer = relationship("Customer", back_populates="sales")

class Log(Base):
    __tablename__ = "logs"
    id             = Column(Integer, primary_key=True, index=True)
    user_id        = Column(Integer, ForeignKey("users.id", ondelete="SET NULL"))
    action         = Column(Text, nullable=False)
    table_affected = Column(String(50))
    row_id         = Column(Integer)
    timestamp      = Column(DateTime, default=datetime.utcnow)

#Defines all ORM models matching your PostgreSQL schema.