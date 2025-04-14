from pydantic import BaseModel
from typing import Optional
from datetime import datetime
from enum import Enum

class TransactionType(str, Enum):
    purchase = "purchase"
    sale     = "sale"
    adjust   = "adjust"

# ── Business
class BusinessBase(BaseModel):
    name: str
    description: Optional[str]
    industry_type: Optional[str]

class BusinessCreate(BusinessBase):
    pass

class Business(BusinessBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

# ── User
class UserBase(BaseModel):
    business_id: int
    username: str
    email: str
    role: str

class UserCreate(UserBase):
    pass

class User(UserBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

# ── Category
class CategoryBase(BaseModel):
    business_id: int
    name: str
    description: Optional[str]

class CategoryCreate(CategoryBase):
    pass

class Category(CategoryBase):
    id: int

    class Config:
        from_attributes = True

# ── Product
class ProductBase(BaseModel):
    business_id: int
    category_id: Optional[int]
    name: str
    sku: str
    barcode: Optional[str]
    unit_price: float
    tax_rate: Optional[float] = 0.0

class ProductCreate(ProductBase):
    pass

class Product(ProductBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

# ── Supplier
class SupplierBase(BaseModel):
    business_id: int
    name: str
    contact: Optional[str]
    phone: Optional[str]
    email: Optional[str]
    address: Optional[str]

class SupplierCreate(SupplierBase):
    pass

class Supplier(SupplierBase):
    id: int

    class Config:
        from_attributes = True

# ── Customer
class CustomerBase(BaseModel):
    business_id: int
    name: str
    email: Optional[str]
    phone: Optional[str]
    address: Optional[str]

class CustomerCreate(CustomerBase):
    pass

class Customer(CustomerBase):
    id: int

    class Config:
        from_attributes = True

# ── Location
class LocationBase(BaseModel):
    business_id: int
    name: str
    address: Optional[str]

class LocationCreate(LocationBase):
    pass

class Location(LocationBase):
    id: int

    class Config:
        from_attributes = True

# ── Inventory Transaction
class InventoryTransactionBase(BaseModel):
    product_id: int
    location_id: Optional[int]
    type: TransactionType
    quantity: int
    unit_price: Optional[float]

class InventoryTransactionCreate(InventoryTransactionBase):
    pass

class InventoryTransaction(InventoryTransactionBase):
    id: int
    timestamp: datetime

    class Config:
        from_attributes = True
