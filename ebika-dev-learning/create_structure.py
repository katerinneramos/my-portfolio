import os

# Estructura de carpetas
directories = [
    'ebika-dev-backend/app/api',
    'ebika-dev-backend/app/models',
    'frontend/src',
    'frontend/public'
]

# Archivos a crear
files = [
    'ebika-dev-backend/app/main.py',
    'ebika-dev-backend/app/api/__init__.py',
    'ebika-dev-backend/app/api/sql_queries.py',
    'ebika-dev-backend/app/api/user.py',
    'ebika-dev-backend/app/models/database.py',
    'ebika-dev-backend/app/requirements.txt',
    'ebika-dev-backend/app/config.py',
    'ebika-dev-backend/Dockerfile',
    'frontend/package.json',
]

# Crear las carpetas
for directory in directories:
    os.makedirs(directory, exist_ok=True)

# Crear los archivos
for file in files:
    with open(file, 'w') as f:
        # Puedes agregar contenido inicial si lo deseas, como comentarios
        if file == 'ebika-dev-backend/app/main.py':
            f.write("# Archivo principal de FastAPI\n")
        elif file == 'ebika-dev-backend/app/api/sql_queries.py':
            f.write("# Aquí podrías definir las funciones de consultas SQL\n")
        elif file == 'ebika-dev-backend/app/api/user.py':
            f.write("# Controladores de usuario\n")
        elif file == 'ebika-dev-backend/app/models/database.py':
            f.write("# Configuración de conexión a la base de datos\n")
        elif file == 'ebika-dev-backend/app/requirements.txt':
            f.write("# Dependencias del ebika-dev-backend\n")
        elif file == 'ebika-dev-backend/app/config.py':
            f.write("# Archivo de configuración\n")
        elif file == 'frontend/package.json':
            f.write('{"name": "frontend", "version": "1.0.0"}\n')
        # Dejar otros archivos vacíos si lo prefieres, como Dockerfile
        else:
            f.write("")
            
print("Estructura de carpetas y archivos creada exitosamente.")
