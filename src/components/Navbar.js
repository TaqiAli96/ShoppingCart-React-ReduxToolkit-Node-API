import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
const Bar = () => {
  const style = {
    textDec: {
      textDecoration: "none",
    },
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Users</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to="/users" style={style.textDec}>
                Users
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/login" style={style.textDec}>
                Login
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/signup" style={style.textDec}>
                Register
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/register" style={style.textDec}>
                Register Business
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/employees" style={style.textDec}>
                Employees
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/counter" style={style.textDec}>
                Counter
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Bar;
