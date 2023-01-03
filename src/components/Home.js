import React from "react";
import { useGetAllProductsQuery } from "../redux/features/productsApi";
import { addToCart } from "../redux/features/cartSlice";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

export const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  const dispatch = useDispatch();
  const handleToCartItem = (product) => {
    dispatch(addToCart(product));
  };
  // data && console.log(data);
  return (
    <Container fluid style={{ marginTop: "70px" }}>
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : error ? (
        <div>Networ Error...</div>
      ) : (
        <Container className="d-flex justify-content-around ">
          {data.map((product) => (
            <Card
              style={{ width: "18rem", boxShadow: "2px 2px 2px lightgray" }}
              key={product.id}
            >
              <Card.Title className="p-3 ">{product.name}</Card.Title>
              <Card.Img variant="top" src={product.image} height={300} />
              <Card.Body>
                <Card.Text>{product.desc}</Card.Text>
                <Card.Footer style={{ background: "transparent" }}>
                  ${product.price}
                </Card.Footer>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    variant="primary"
                    onClick={() => handleToCartItem(product)}
                  >
                    Add to cart
                  </Button>
                  <Link to={`products/${product.id}`}>View Details</Link>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Container>
      )}
    </Container>
  );
};
