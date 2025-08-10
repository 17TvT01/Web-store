from flask import Flask, jsonify, request
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
    """Return products optionally filtered by query parameters."""
    min_price = request.args.get("min_price", type=float)
    max_price = request.args.get("max_price", type=float)
    key = request.args.get("key")

    try:
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)

        query = "SELECT id, name, price, image FROM products"
        conditions = []
        params = []

        if min_price is not None:
            conditions.append("price >= %s")
            params.append(min_price)
        if max_price is not None:
            conditions.append("price <= %s")
            params.append(max_price)
        if key:
            conditions.append("name LIKE %s")
            params.append(f"%{key}%")

        if conditions:
            query += " WHERE " + " AND ".join(conditions)

        cursor.execute(query, params)
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
