# ProShop Mk I

ProShop Mk I is a comprehensive E-commerce application built using the MERN stack (MongoDB, Express.js, React, Node.js). This project is in active development and currently about 50% complete.

## Table of Contents

- [Description](#description)
- [Features](#features)
  - [Implemented Features](#implemented-features)
  - [Upcoming Features](#upcoming-features)
- [Backend](#backend)
- [Frontend](#frontend)
- [Usage](#usage)
  - [Starting the Backend Server](#starting-the-backend-server)
  - [Starting the Frontend Application](#starting-the-frontend-application)
- [Dependencies](#dependencies)
- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [License](#license)
- [Feedback](#feedback)
- [Repository](#repository)

## Description

ProShop Mk I aims to provide a robust and modern E-commerce platform. The application features a responsive and user-friendly interface, allowing users to browse, search, and view products with ease. The backend is designed to efficiently manage product data and support the frontend operations through a RESTful API.

## Features

### Implemented Features

- **Product List**: Displays a list of all available products.
- **Product Cards**: Individual cards for each product, showing key details like name, price, and image.
- **Carousel**: A rotating carousel that showcases top products.
- **Backend**: A robust backend built with Express.js that serves product data to the frontend.

### Upcoming Features

- **User Authentication**: Enable users to register, log in, and manage their profiles.
- **Shopping Cart**: Allow users to add products to a shopping cart and proceed to checkout.
- **Payment Integration**: Integrate with a payment gateway to handle transactions.
- **Product Reviews**: Enable users to leave reviews for products.
- **Admin Dashboard**: Provide a dashboard for admins to manage products, users, and orders.

## Backend

The backend of ProShop Mk I is built with Express.js, serving product data from a MongoDB database. It includes routes for fetching all products and individual product details by ID.

## Frontend

The frontend is built with React and styled using Bootstrap. It provides a modern and responsive user interface, displaying product data fetched from the backend.

## Usage

### Starting the Backend Server

To start the backend server, navigate to the root directory and run:

```bash
npm run server
```

### Starting the Frontend Application

To start the frontend application, navigate to the frontend directory and run:

```bash
npm start --prefix frontend
```

Alternatively, start both the backend and frontend servers concurrently from the root directory using:

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

1. **Clone the repository:**

```bash
git clone https://github.com/Anastasios3/proshop-demo.git
```

2. **Navigate to the project directory:**

```bash
cd proshop-v2
```

3. **Install the dependencies:**

```bash
npm install
```

4. **Navigate to the frontend directory and install frontend dependencies:**

```bash
cd frontend
npm install
```

5. **Start the application:**

```bash
npm start
```

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```plaintext
PORT=8000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Feedback

Your feedback is invaluable to the development of this project. Please check out the repository and let us know what you think. Any suggestions or insights are greatly appreciated.

## Repository

You can find the repository at [ProShop Mk I](https://github.com/Anastasios3/ProShop--Mk-I).

Thank you for your time and interest in ProShop Mk I!
