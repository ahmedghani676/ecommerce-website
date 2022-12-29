import React from 'react'
import { FaShoppingCart ,FaUserAlt} from 'react-icons/fa';
import { Navbar, Container, Nav } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
const header = () => {
  return (
    <Navbar bg="dark" variant = 'dark' expand="lg" collapseOnSelect>
          <Container>
              <LinkContainer to = "/">
                  <Navbar.Brand>Pro Shops</Navbar.Brand>
                  </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="m-auto">
                   <LinkContainer to = '/cart'>  
                          <Nav.Link ><FaShoppingCart />Cart</Nav.Link>
                      </LinkContainer> 
                      <LinkContainer to = '/login'> 
                          <Nav.Link ><FaUserAlt />sign in</Nav.Link>
                          </LinkContainer> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default header