# backend/app/models/database.py
import sqlite3

DATABASE_PATH = 'ebika-dev-backend/sqlcourse.db'

def get_db_connection():
    try:
        # Intentar abrir una conexión
        conn = sqlite3.connect(DATABASE_PATH)
        conn.row_factory = sqlite3.Row  # Convierte las filas a diccionarios
        return conn
    except sqlite3.Error as e:
        print(f"Error al conectar con la base de datos: {e}")
        return None
