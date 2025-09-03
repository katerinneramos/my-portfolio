import sqlite3

# Crear o abrir la base de datos
conn = sqlite3.connect('sqlcourse.db')
cursor = conn.cursor()

# Crear la tabla 'usuarios' si no existe
cursor.execute('''
    CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        email TEXT NOT NULL
    )
''')

# Insertar datos de ejemplo si no existen
cursor.execute("SELECT COUNT(*) FROM usuarios")
if cursor.fetchone()[0] == 0:  # Si no hay usuarios, insertar
    cursor.executemany('''
        INSERT INTO usuarios (nombre, email) VALUES (?, ?)
    ''', [
        ('Juan', 'juan@email.com'),
        ('Ana', 'ana@email.com'),
        ('Carlos', 'carlos@email.com')
    ])

# Confirmar los cambios
conn.commit()

# Cerrar la conexión
conn.close()

print("Base de datos creada y datos insertados correctamente.")
