import '../task/TaskCard.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";


export default function Header(){

    return (
        <>
        <Navbar expand="lg" style={{ borderBottom:`1px solid blue`}}>
          <Container>
            <Navbar.Brand>Sprawozdania z zajęć</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <Nav className="me-auto">
                <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                <Nav.Link as={Link} to='/about'>O systemie</Nav.Link>
                <Nav.Link as={Link} to='/addGroups'>Dodaj Przedmiot</Nav.Link>
                <Nav.Link as={Link} to='/groups'>Wyswietl przedmioty</Nav.Link>
              </Nav>
              <Navbar.Text>
            Zalogowany jako: <a href="#login">Mark Otto</a>
          </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      
      </>
      
      );
    }    
