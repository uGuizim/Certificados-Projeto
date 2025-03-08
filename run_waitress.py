# filepath: c:\Users\PCGAMER\OneDrive\Documentos\Certificados-Projeto\run_waitress.py

from waitress import serve
from backend.backend.wsgi import application

if __name__ == '__main__':
    serve(application, host='0.0.0.0', port=8000)