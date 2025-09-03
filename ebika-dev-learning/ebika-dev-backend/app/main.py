# backend/app/main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from api.sql_queries import execute_sql

app = FastAPI()

class SQLQuery(BaseModel):
    query: str

@app.post("/execute-sql/")
def execute_sql_query(sql_query: SQLQuery):
    query = sql_query.query.strip().lower()
    
    # Seguridad básica para evitar DROP/DELETE/UPDATE
    if any(keyword in query for keyword in ["drop", "delete", "update", "insert"]):
        raise HTTPException(status_code=400, detail="Acción no permitida en este entorno")

    try:
        result = execute_sql(query)
        return {"success": True, "data": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error ejecutando la consulta: {str(e)}")
