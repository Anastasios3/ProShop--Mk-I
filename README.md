# Product Card Component

This repository contains a React component for displaying a product card. The component is built using React and Bootstrap for styling.

## Description

The `Product` component takes in a `product` object as a prop. This object should contain the following properties:

- `_id`: A unique identifier for the product.
- `image`: A URL to an image of the product.
- `name`: The name of the product.
- `price`: The price of the product.

The component displays the product information in a Bootstrap Card. The card includes an image of the product, the product's name, and the product's price. The product's name and image are clickable and redirect to a detailed view of the product.

## Usage

```jsx
import Product from './Product';

const product = {
  _id: '1',
  image: 'https://example.com/product.jpg',
  name: 'Example Product',
  price: '99.99',
};

<Product product={product} />
