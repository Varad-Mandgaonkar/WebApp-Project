# WebApp-Project
Mini e-commerce platform 

A full-stack mini e-commerce platform built with React, Node.js/Express, and PostgreSQL. 
The frontend contains two tabs : Product Submission Tab and View Products Tab (My Products).
It allows users to submit products and view them in a responsive product grid. 
The Product Submission Tab consists of a form to be filled out in order to register your product, submitted product can be viewed in the 'My Products' Tab, in a form of a list.

Feature Implementation:

- Product submission form
- Product listing grid
- PostgreSQL database integration
- Responsive UI with Tailwind CSS
- Backend API using Express.js

Technologies Used:

- Frontend: React, React Router, Tailwind CSS
- Backend: Node.js, Express.js
- Database: PostgreSQL
- Tools: Vite, PgAdmin, Git, dotenv


Setup Instructions:

1.Clone the Repository

bash command: 
git clone https://github.com/Varad-Mandgaonkar/WebApp-Project.git

cd mini-ecommerce platform

BACKEND:
cd server

npm install

PORT=5000

node index.js
(Follow the link to check whether server is running - Server running on http://localhost:5000)

DATABASE_URL=postgresql://postgres:zenith@1@localhost:5432/mini_e-commerce_db

FRONTEND:
cd client -> cd vite-project 

npm install

npm run dev 
(Follow the link to access the frontend:-   Local:   http://localhost:5173/ )

2. Intially the database should be logged in.
3. After successful log-in in the database,run the server to check that backend is running successfully.
4. After that access the frontend and try adding the products in the 'Submit Products' form which can be viewed in the 'My Products'. 

Sample Input:
{
  "name": "Sample Product",
  "price": "499.99",
  "description": "This is a sample product",
}
