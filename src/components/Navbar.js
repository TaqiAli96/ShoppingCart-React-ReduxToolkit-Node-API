import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";
import { getTotals } from "../redux/features/cartSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Bar = () => {
  const dispatch = useDispatch();

  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  // console.log(cartTotalQuantity);
  const style = {
    textDec: {
      textDecoration: "none",
      color: "#fff",
    },
  };
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#5c5353", padding: "30px" }}>
      <Container>
        <Navbar.Brand style={{ fontSize: "30px" }}>
          {" "}
          <NavLink to="/" style={style.textDec}>
            Online Shop
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <NavLink to="/cart" style={{ color: "#fff" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <Badge bg="light" text="dark">
              {cartTotalQuantity}
            </Badge>
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Bar;
