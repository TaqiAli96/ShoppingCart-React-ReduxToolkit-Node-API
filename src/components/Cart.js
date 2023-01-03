import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import {
  decreasedQuantity,
  increasedQuantity,
  removeProduct,
  clearCart,
  getTotals,
} from "../redux/features/cartSlice";
import { useEffect } from "react";
import { Card } from "react-bootstrap";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { cartProducts } = cart;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  return (
    <Container>
      <h2>Shopping Cart</h2>
      {cartProducts.length === 0 ? (
        <>
          <h2>Cart is Empty</h2>
          <NavLink to="/">
            <p>Start Shopping</p>
          </NavLink>
        </>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts?.map((cartProduct) => (
              <tr key={cartProduct.id}>
                <td>
                  <img
                    src={cartProduct.image}
                    alt="cart-product"
                    style={{ height: "50px" }}
                  />
                  <span style={{ marginLeft: "10px" }}>{cartProduct.name}</span>
                </td>
                <td style={{ padding: "23px" }}>{cartProduct.desc}</td>

                <td style={{ padding: "23px" }}>{cartProduct.price}</td>
                <td style={{ padding: "23px" }}>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(decreasedQuantity(cartProduct))}
                  >
                    -
                  </Button>{" "}
                  {cartProduct.cartQuantity}
                  <Button
                    variant="success"
                    onClick={() => dispatch(increasedQuantity(cartProduct))}
                  >
                    +
                  </Button>{" "}
                </td>
                <td style={{ padding: "23px" }}>
                  {cartProduct.cartQuantity * cartProduct.price}
                </td>
                <td style={{ padding: "23px" }}>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(removeProduct(cartProduct))}
                  >
                    Remove Product
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      {cart.cartProducts.length > 0 ? (
        <Button variant="danger" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </Button>
      ) : (
        ""
      )}

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Card style={{ width: "18rem", boxShadow: "2px 2px 2px lightgray" }}>
          <Card.Title className="p-3">Summary</Card.Title>
          <Card.Body style={{ marginTop: "-20px" }}>
            <Card.Text>Total Products : {cart.cartTotalQuantity}</Card.Text>
            <Card.Text>Total Quantity : {cart.cartTotalAmount}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};
