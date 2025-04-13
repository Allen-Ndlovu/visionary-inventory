# Visionary Inventory

**Visionary Inventory** is a universal inventory and business management system built with **FastAPI** (Python) on the backend and **React** on the frontend.  
It is designed to support multiple businesses across industries, providing an intelligent, reliable, and efficient way to manage stock, suppliers, customers, sales, purchases, and more — all in real time.

---

## ❗ Problem Statement

Managing inventory manually or with outdated tools often leads to:

- Stock mismanagement and over/under-stocking issues
- Inefficient tracking of purchases and sales
- Inaccurate forecasting and reporting
- Poor customer satisfaction due to unfulfilled orders
- No central dashboard to monitor business activity

**Visionary Inventory** aims to solve these real-world challenges by digitizing and automating the entire inventory lifecycle in a user-friendly way.

---

## 🎯 Goals & Objectives

- ✅ Enable businesses to manage **products, suppliers, customers, and transactions** from a single system
- ✅ Track and prioritize inventory efficiently using **AVL tree structures** for fast access
- ✅ Use **caching** to minimize redundant database queries and improve performance
- ✅ Generate real-time reports and logs to improve decision-making
- ✅ Allow **multi-business support** with segregated data
- ✅ Provide a clean, responsive **frontend** with intuitive navigation
- ✅ Be flexible and scalable enough to support SMEs and large enterprises

---

## 📦 Features

- 🔧 **CRUD APIs** for businesses, users, categories, products, suppliers, customers, inventory, purchases, sales, and logs
- 🌳 **AVL Tree-based stock prioritization** (O(log n) operations)
- ⚡ **TTL caching** for frequently accessed data (`cachetools`)
- 🔐 Secure DB sessions using SQLAlchemy with dependency injection
- 📊 Track low-stock items and generate alerts
- 🔄 Full-stack implementation (FastAPI + React)
- 🔍 Interactive API docs via Swagger (`/docs`) and ReDoc (`/redoc`)

---

## 🛠️ Tech Stack

| Layer     | Stack                    |
|-----------|--------------------------|
| Backend   | Python, FastAPI, SQLAlchemy |
| Frontend  | React, React Router, Axios |
| Database  | PostgreSQL               |
| Tools     | Uvicorn, cachetools, dotenv |
| Docs      | OpenAPI (Swagger)        |

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Allen-Ndlovu/visionary-inventory.git
cd visionary-inventory
