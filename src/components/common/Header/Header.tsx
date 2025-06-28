import { Badge, Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { HeaderBasket } from "../../eCommerce";
import styles from "./styles.module.css";

const { headerContainer, headerLogo } = styles;

const Header = () => {
  return (
    <header>
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span>our</span> <Badge bg="info">Ecommerce</Badge>
        </h1>

        <HeaderBasket />
      </div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} href="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} href="categories">
                Categories
              </Nav.Link>
              <Nav.Link as={NavLink} href="about">
                About
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="login">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="register ">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

// hello world 
