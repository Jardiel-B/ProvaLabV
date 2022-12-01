import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Nav.css"


function NavBar() {
  return (
    <Navbar className="nav" bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/sobre">Sobre Nós</Nav.Link>
            <Nav.Link href="/cardapio">Cardápio</Nav.Link>
            <Nav.Link href="/cupons">Cupons e combos</Nav.Link>
            <Nav.Link href="/carrinho">Carrinho</Nav.Link>
            <Nav.Link href="https://www.google.com">Sair</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;