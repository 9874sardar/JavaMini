import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Photos/LOGO.png'
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar className='black' variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img className='w-25' src={Logo} alt='Logo'/></Navbar.Brand>
          {/* <Nav className="text-center"> */}
          <Nav className="text-center ml-400">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link href="/">
            Home
            </Nav.Link>
            {/* <Nav.Link href="/employer/create">Hiring</Nav.Link> */}
            <Nav.Link href="/employee/aboutus">About us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default Header
