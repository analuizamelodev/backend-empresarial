# Commerce Backend Demo

This repository contains a business management API responsible for handling products, inventory control, and purchase and sale transactions.

To use the API, users must register and authenticate. After logging in, a JWT token is generated, allowing access to protected CRUD operations and transaction endpoints.

## Technologies

<ul>
 <li>Node.js</li>

 <li>Express.js</li>

 <li>TypeScript</li>

 <li>Prisma ORM</li>

 <li>PostgreSQL</li>

 <li>Swagger UI</li>

<li>JWT</li>

 <li>Zod</li>
</ul>

## Prerequisites

<ul>
 <li>Node.js 18+</li>

 <li>npm or yarn</li>

 <li>PostgreSQL (local or Docker)</li>
</ul>

## Features

<ul>
 <li>Express server with organized routes</li>

 <li>TypeScript for static typing</li>

 <li>Prisma ORM for database management</li>

 <li>JWT authentication with protected routes</li>

 <li>Automatic inventory control</li>

 <li>Purchase and sale transactions</li>

 <li>Backend-defined pricing (frontend never sends prices)</li>

 <li>Atomic transactions with rollback on failure</li>

 <li>Swagger UI API documentation</li>

 <li>Environment variables configuration via `.env` </li>
</ul>

## Instructions

1. Clone the repository

   ```
   git clone https://github.com/analuizamelodev/backend-empresarial.git
   cd backend-empresarial
   ```

2. Install dependencies

   ```
   npm install
   ```

3. Configure environment variables

Create a `.env` file based on `.env.example`:

```
DATABASE_URL="postgresql://user:password@localhost:5432/database"
JWT_SECRET="your_jwt_secret"
PORT=3333
```

4. Generate Prisma client

   ```
   npx prisma generate
   ```

5. Run database migrations

   ```
   npx prisma migrate dev
   ```

6. Start the application
   ```
   npm run dev
   ```

## Endpoints

The server will run at:

➡️ http://localhost:3333

Swagger documentation available at:

➡️ http://localhost:3333/api-docs

All endpoints follow the REST standard and require authentication (except login and register).

## Authentication

`POST /auth/register` – Register a new user

`POST /auth/login` – Login and generate JWT token

After login, use the token as:

`Authorize`

## Products

`POST /products` – Create a product

`GET /products` – Get all products

`GET /products/{id}` – Get product by ID

`PUT /products/{id}` – Update product

`DELETE /products/{id}` – Delete product

## Transactions

`POST /transactions` – Create a purchase or sale transaction

`GET /transactions` – Get all transactions

`GET /transactions/{id}` – Get transaction by ID

## Transaction rules

<ul>
<il>Prices are defined by the backend</il>

<il>Sales only occur if there is sufficient stock</il>

<il>Stock is updated automatically</il>

<il>If any rule fails, the entire transaction is rolled back</il>

</ul>

## Author

Developed by Ana Luiza Melo
GitHub: https://github.com/analuizamelodev
