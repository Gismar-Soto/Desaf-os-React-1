import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice, faSignInAlt, faUserPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Register from './Register';
import Login from './Login';

const MyNavbar = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleShowRegister = () => setShowRegister(true);
  const handleCloseRegister = () => setShowRegister(false);

  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
        <Navbar.Brand href="/" className="text-light"> 
          ¡Pizzería Mamma Mía! 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <FontAwesomeIcon icon={faPizzaSlice} className="me-1" />
              Home
            </Nav.Link>
            <Button variant="outline-light" onClick={handleShowLogin} className="ms-2">
              <FontAwesomeIcon icon={faSignInAlt} className="me-1" />
              Login
            </Button>
            <Button variant="outline-light" onClick={handleShowRegister} className="ms-2">
              <FontAwesomeIcon icon={faUserPlus} className="me-1" />
              Register
            </Button>
          </Nav>
          <Nav>
            <Button variant="outline-info" className="me-2">
              <FontAwesomeIcon icon={faShoppingCart} className="me-1" />
              Total: $25.000
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Register show={showRegister} handleClose={handleCloseRegister} />
      <Login show={showLogin} handleClose={handleCloseLogin} />
    </>
  );
};

export default MyNavbar;
