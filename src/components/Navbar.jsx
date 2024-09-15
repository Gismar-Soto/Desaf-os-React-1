import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice, faLock, faUserPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
      <Navbar.Brand href="/" className="text-light">
        ¡Pizzería Mamma Mía!
      </Navbar.Brand>
      <Nav className="ml-auto d-flex align-items-center">
        <Nav.Link href="/" className="btn btn-outline-info d-flex align-items-center">
          <FontAwesomeIcon icon={faPizzaSlice} className="me-2" /> Home
        </Nav.Link>
        <Nav.Link href="/login" className="btn btn-outline-info d-flex align-items-center">
          <FontAwesomeIcon icon={faLock} className="me-2" /> Login
        </Nav.Link>
        <Nav.Link href="/register" className="btn btn-outline-info d-flex align-items-center">
          <FontAwesomeIcon icon={faUserPlus} className="me-2" /> Register
        </Nav.Link>
      </Nav>
      <Nav className="ms-auto">
        <Button variant="outline-info" className="d-flex align-items-center">
          <FontAwesomeIcon icon={faShoppingCart} className="me-2" /> Total: $25.000
        </Button>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
