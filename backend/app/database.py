import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Load .env from project root
load_dotenv()

USER = os.getenv("POSTGRES_USER")
PW   = os.getenv("POSTGRES_PASSWORD")
HOST = os.getenv("POSTGRES_HOST")
PORT = os.getenv("POSTGRES_PORT")
DB   = os.getenv("POSTGRES_DB")

DATABASE_URL = f"postgresql://{USER}:{PW}@{HOST}:{PORT}/{DB}"

# SQLAlchemy engine & session factory
engine = create_engine(
    DATABASE_URL,
    pool_pre_ping=True,
    pool_size=20,
    max_overflow=0
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()



#Configures SQLAlchemy to connect to PostgreSQL using .env.