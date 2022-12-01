import Accordion from 'react-bootstrap/Accordion';

function Acordeao(props) {
  return (
    <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.titulo}</Accordion.Header>
        <Accordion.Body>{props.conteudo}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Acordeao;