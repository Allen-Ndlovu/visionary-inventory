from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

# Business
class BusinessBase(BaseModel):
    name: str
    description: Optional[str]
    industry_type: Optional[str]

class BusinessCreate(BusinessBase): pass

class Business(BusinessBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

# User
class UserBase(BaseModel):
    business_id: int
    username: str
    email: str
    role: str
    is_active: Optional[bool] = True

class UserCreate(UserBase):
    password_hash: str

class User(UserBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

# Category
class CategoryBase(BaseModel):
    business_id: int
    name: str
    description: Optional[str]

class CategoryCreate(CategoryBase): pass

class Category(CategoryBase):
    id: int

    class Config:
        from_attributes = True

# Product
class ProductBase(BaseModel):
    business_id: int
    category_id: Optional[int]
    name: str
    description: Optional[str]
    sku: str
    unit_price: float
    tax_rate: Optional[float] = 0.0
    barcode: Optional[str]
    is_active: Optional[bool] = True

class ProductCreate(ProductBase): pass

class Product(ProductBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

# Supplier
class SupplierBase(BaseModel):
    business_id: int
    name: str
    contact_name: Optional[str]
    phone: Optional[str]
    email: Optional[str]
    address: Optional[str]

class SupplierCreate(SupplierBase): pass

class Supplier(SupplierBase):
    id: int

    class Config:
        from_attributes = True

# Customer
class CustomerBase(BaseModel):
    business_id: int
    name: str
    email: Optional[str]
    phone: Optional[str]
    address: Optional[str]

class CustomerCreate(CustomerBase): pass

class Customer(CustomerBase):
    id: int

    class Config:
        from_attributes = True

# Inventory
class InventoryBase(BaseModel):
    product_id: int
    quantity: int
    min_stock_level: Optional[int] = 0

class InventoryCreate(InventoryBase): pass

class Inventory(InventoryBase):
    id: int
    last_updated: datetime

    class Config:
        from_attributes = True

# Purchase
class PurchaseBase(BaseModel):
    product_id: int
    supplier_id: Optional[int]
    quantity: int
    purchase_price: float

class PurchaseCreate(PurchaseBase): pass

class Purchase(PurchaseBase):
    id: int
    purchase_date: datetime

    class Config:
        from_attributes = True

# Sale
class SaleBase(BaseModel):
    product_id: int
    customer_id: Optional[int]
    quantity: int
    sale_price: float

class SaleCreate(SaleBase): pass

class Sale(SaleBase):
    id: int
    sale_date: datetime

    class Config:
        from_attributes = True

# Log
class LogBase(BaseModel):
    user_id: Optional[int]
    action: str
    table_affected: Optional[str]
    row_id: Optional[int]

class LogCreate(LogBase): pass

class Log(LogBase):
    id: int
    timestamp: datetime

    class Config:
        from_attributes = True



#Pydantic schemas for request validation and response models.