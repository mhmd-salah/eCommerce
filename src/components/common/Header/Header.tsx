import { HeaderBasket, HeaderWishlist } from '../../eCommerce';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';
const { headerContainer, headerLogo } = styles;
const Header = () => {
  return (
    <header>
      <Container>
        <div className={headerContainer}>
          <h1 className={headerLogo}>
            <span>our</span> <Badge bg="info">Ecommerce</Badge>
          </h1>

          <div className='d-flex '>
            <HeaderWishlist />
            <HeaderBasket />
          </div>
        </div>

        <Navbar
          expand="lg"
          // className="bg-body-tertiary"
          // bg="dark"
          // data-bs-theme="dark"
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/categories">
                Categories
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about-us">
                About Us
              </Nav.Link>
            </Nav>
            <Nav className="">
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="/register">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
