import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../redux/features/productsApi";
const Products = [
  { cartQuantity: 1, price: 200 },
  { cartQuantity: 2, price: 300 },
  { cartQuantity: 4, price: 500 },
];

// const grandTotal = Products.reduce(
//   (item, cartTotal) => {
//     const { cartQuantity, price } = item;
//     // const { price, cartQuantity } = cartItem;
//     const itemTotal = price * cartQuantity;
//     console.log(itemTotal);
//     // cartTotal.total += itemTotal; // for grand total
//     // cartTotal.quantity += cartQuantity;
//     return cartTotal;
//   },
//   {
//     total: 0,
//     quantity: 0,
//   }
// );
export const SingleProduct = () => {
  const { productId } = useParams();
  const { data: products } = useGetAllProductsQuery();
  const singleProduct = products.find((product) => product.id === +productId);

  return (
    <Container className="d-flex justify-content-around mt-5">
      <Card
        style={{ width: "18rem", boxShadow: "2px 2px 2px lightgray" }}
        key={singleProduct.id}
      >
        <Card.Title className="p-3 ">{singleProduct.name}</Card.Title>
        <Card.Img variant="top" src={singleProduct.image} height={300} />
        <Card.Body>
          <Card.Text>{singleProduct.desc}</Card.Text>
          <Card.Footer style={{ background: "transparent" }}>
            ${singleProduct.price}
          </Card.Footer>
          <Link to="/">
            <Button variant="primary">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};
