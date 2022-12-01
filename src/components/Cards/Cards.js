import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Cards.css"

function Cards(props) {
  return (
    <div>
      <Container>
      <Row>
        <Col>
        <Card className="card" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="logo.png" />
            <Card.Body>
              <Card.Title>{props.nome}</Card.Title>
              <Card.Text>
                {props.ingredientes}
              </Card.Text>
              <Button variant="primary">Carrinho</Button>
            </Card.Body>
        </Card>
        </Col>
        {/* <Col>
        <Card classname="card" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{props.nome2}</Card.Title>
              <Card.Text>
                {props.ingredientes2}
              </Card.Text>
              <Button variant="primary">Carrinho</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card classname="card" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{props.nome3}</Card.Title>
              <Card.Text>
                {props.ingredientes3}
              </Card.Text>
              <Button variant="primary">Carrinho</Button>
            </Card.Body>
        </Card>
        </Col> */}
      </Row>
    </Container>
    </div>
  );
}

export default Cards;