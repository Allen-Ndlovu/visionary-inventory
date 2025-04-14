from sqlalchemy import (
    Column, Integer, String, Text, DateTime,
    ForeignKey, Numeric, Boolean, Enum
)
from sqlalchemy.orm import relationship
from datetime import datetime
import enum
from .database import Base

class TransactionType(str, enum.Enum):
    purchase = "purchase"
    sale     = "sale"
    adjust   = "adjust"

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
    locations  = relationship("Location", back_populates="business")

class User(Base):
    __tablename__ = "users"
    id          = Column(Integer, primary_key=True, index=True)
    business_id = Column(Integer, ForeignKey("businesses.id", ondelete="CASCADE"))
    username    = Column(String(50), unique=True, nullable=False)
    email       = Column(String(100), unique=True, nullable=False)
    role        = Column(String(20), nullable=False)
    created_at  = Column(DateTime, default=datetime.utcnow)

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
    id          = Column(Integer, primary_key=True, index=True)
    business_id = Column(Integer, ForeignKey("businesses.id", ondelete="CASCADE"))
    category_id = Column(Integer, ForeignKey("categories.id", ondelete="SET NULL"))
    name        = Column(String(100), nullable=False)
    sku         = Column(String(50), unique=True, nullable=False)
    barcode     = Column(String(50))
    unit_price  = Column(Numeric(10,2), nullable=False)
    tax_rate    = Column(Numeric(5,2), default=0.00)
    created_at  = Column(DateTime, default=datetime.utcnow)

    business = relationship("Business", back_populates="products")
    category = relationship("Category", back_populates="products")
    transactions = relationship("InventoryTransaction", back_populates="product")

class Supplier(Base):
    __tablename__ = "suppliers"
    id          = Column(Integer, primary_key=True, index=True)
    business_id = Column(Integer, ForeignKey("businesses.id", ondelete="CASCADE"))
    name        = Column(String(100), nullable=False)
    contact     = Column(String(100))
    phone       = Column(String(20))
    email       = Column(String(100))
    address     = Column(Text)

    business   = relationship("Business", back_populates="suppliers")

class Customer(Base):
    __tablename__ = "customers"
    id          = Column(Integer, primary_key=True, index=True)
    business_id = Column(Integer, ForeignKey("businesses.id", ondelete="CASCADE"))
    name        = Column(String(100), nullable=False)
    email       = Column(String(100))
    phone       = Column(String(20))
    address     = Column(Text)

    business = relationship("Business", back_populates="customers")

class Location(Base):
    __tablename__ = "locations"
    id          = Column(Integer, primary_key=True, index=True)
    business_id = Column(Integer, ForeignKey("businesses.id", ondelete="CASCADE"))
    name        = Column(String(100), nullable=False)
    address     = Column(Text)

    business = relationship("Business", back_populates="locations")

class InventoryTransaction(Base):
    __tablename__ = "transactions"
    id            = Column(Integer, primary_key=True, index=True)
    product_id    = Column(Integer, ForeignKey("products.id", ondelete="CASCADE"))
    location_id   = Column(Integer, ForeignKey("locations.id", ondelete="SET NULL"))
    type          = Column(Enum(TransactionType), nullable=False)
    quantity      = Column(Integer, nullable=False)
    unit_price    = Column(Numeric(10,2))
    timestamp     = Column(DateTime, default=datetime.utcnow)

    product  = relationship("Product", back_populates="transactions")
    location = relationship("Location")


#Defines all ORM models matching your PostgreSQL schema.