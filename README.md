# Visionary Inventory

A **universal inventory management system** built with **FastAPI** (Python) on the backend and **React** on the frontend.  
Designed to handle any form of business—retail, wholesale, services—with advanced data structures (AVL tree for stock prioritization) and caching for high performance.

---

## 📦 Features

- **Multi‑business support**: Separate data per business (categories, products, suppliers, customers).
- **CRUD APIs** for: businesses, users, categories, products, suppliers, customers, inventory, purchases, sales, logs.
- **Stock prioritization** using an in‑memory AVL tree (O(log n) insert/search).
- **In‑process TTL cache** for hot reads (`cachetools`).
- **PostgreSQL** relational database via SQLAlchemy.
- **FastAPI** with dependency‑injected DB sessions.
- **React** SPA with React Router, Axios, and a custom `useFetch` hook.
- **Docker‑ready** (but also runs locally without Docker).
- **Auto‑generated OpenAPI docs** at `/docs` (Swagger) and `/redoc`.

---

## 🛠️ Tech Stack

- **Backend**: Python 3.10+, FastAPI, SQLAlchemy, Pydantic, python‑dotenv, cachetools  
- **Database**: PostgreSQL  
- **Frontend**: React 18, React Router v6, Axios, Create React App  
- **Dev tools**: Uvicorn, npm/Yarn  

---

