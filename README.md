# Inventory Management System API

This project provides a RESTful API for managing products and their stock levels in a warehouse environment. 
It is built to ensure accurate tracking and updating of product inventory with robust business rules.

## Features

- **Product CRUD:** Create, retrieve, update, and delete products with fields for name, description, and stock quantity.
- **Stock Management:**  
  - Increase or decrease product stock via dedicated endpoints.  
  - Prevent stock levels from going negative, returning appropriate error responses when stock is insufficient.
- **Validation and Error Handling:** Ensures all stock operations are valid and meaningful HTTP status codes are returned.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Aradhanashiv/Inventory-Management-System.git
2.  Navigate to the project directory:
    cd Inventory-Management-System
3.Install dependencies:
   npm install
4.Start the server:
    npm start

**API ENDPOINTS**
 
GET /product/all-products — List all products.

GET /product/details/:id — Get details of a single product.

POST /product/create-product — Create a new product.

PATCH /product/update-product/:id — Update product details (stock quantity cannot go below zero).

DELETE /product/delete-product/:id — Remove a product.

POST /product/:id/increase-stock — Increase stock quantity.

POST /product:id/decrease-stock — Decrease stock quantity (returns error if insufficient stock).

GET /product/get-threshold-products - Get All Products Below from Threshold Limit.    

**TECHNOLOGIES USED**

Node.js
Express.js
MONGODB
