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

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { cartProducts } = cart;
  console.log(cartProducts);
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
    </Container>
  );
};
