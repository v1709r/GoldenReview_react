import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container  from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expands="lg">
        <Container fluid>
                <Navbar.Brand href="/" style={{"color":'gold'}}>
                    <FontAwesomeIcon icon={faVideoSlash}/>Gold
                </Navbar.Brand>
                    {/* This will give us the logo on the top left corner of the screen within the navbar in the header compoenent */}
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                            <Nav 
                                className="me-auto my-2 my-lg-0"
                                styles={{maxHeight: '100px'}}
                                navbarScroll
                            >
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/watchlist">Watchlist</NavLink>
                        </Nav>
                        <Button variant="outline-info" className="me-2">Login</Button>
                        <Button variant="outline-info">Registration</Button>
                    </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header

// 1) Import the boilder plate code.
// 2) Import the appropriate items.
// 3) Using react bootstrap components to create a responsive layout for the navigation menu, which will be at the top of the screen
// 4) Setting up various button
// 5) Parts of various element's style is only imported after using : import 'bootstrap/dist/css/bootstrap.min.css'; in index.js