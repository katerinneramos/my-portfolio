# backend/app/api/sql_queries.py
from models.database import get_db_connection

def execute_sql(query: str):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(query)
    result = cursor.fetchall()
    conn.close()
    return result
