from flask import Flask, jsonify
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)


def get_connection():
    """Create a database connection."""
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="password",
        database="web_store",
    )


@app.route("/api/products")
def list_products():
    """Return all products."""
    try:
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT id, name, price, image FROM products")
        products = cursor.fetchall()
        return jsonify(products)
    except Error as e:
        return jsonify({"error": str(e)}), 500
    finally:
        try:
            cursor.close()
            conn.close()
        except Exception:
            pass


if __name__ == "__main__":
    app.run(debug=True)
