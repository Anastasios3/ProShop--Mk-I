# E-commerce Application

This repository contains the code for a full-stack e-commerce application. The application is built using React for the frontend, Express.js for the backend, and Bootstrap for styling.

## Description

The application consists of several components including a product list, product card, and a carousel for displaying featured products. The backend serves the product data to the frontend via a RESTful API.

### Backend

The backend is built with Express.js and serves product data from the `data/products.js` file. It includes routes for fetching all products and a single product by its ID.

### Frontend

The frontend is built with React and displays the product data fetched from the backend. It includes components for displaying a list of products, individual product cards, and a carousel for featured products.

## Usage

### Starting the Backend Server

To start the backend server, navigate to the root directory and run the following command in the terminal:

```bash
npm run server
```

### Starting the Frontend Application

To start the frontend application, navigate to the frontend directory and run the following command in the terminal:

```bash
npm start --prefix frontend
```

Alternatively, you can start both the backend and frontend servers concurrently from the root directory using:

```bash
npm start
```

## Dependencies

- React
- Express.js
- Bootstrap
- dotenv
- axios
- react-router-dom
- concurrently

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Anastasios3/proshop-demo.git
   ```

2. Navigate to the project directory:
   ```bash
   cd proshop-v2
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Navigate to the `frontend` directory and install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

5. Start the application:
   ```bash
   npm start
   ```

## .env File

Create a `.env` file in the root directory and add the following environment variables:

```
PORT=5000
NODE_ENV=development
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This README file provides clear and concise instructions on setting up and running your e-commerce application.
