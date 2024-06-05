import React from "react";
import { Card } from "react-bootstrap";
import "./Product.css";
const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded product-card">
      <a href={`/Product/${product._id}`}>
        <Card.Img src={product.image} variant="top" className="product-image" />
      </a>

      <Card.Body>
        <a href={`/Product/${product._id}`}>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="h3" className="product-price">
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
