import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

function CardWB(props) {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <h3>{props.cupom}</h3>
        <Card.Body>
          <Card.Title>{props.titulo} <Badge bg="secondary">{props.validade}</Badge></Card.Title>
          <Card.Text>{props.corpo}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardWB;