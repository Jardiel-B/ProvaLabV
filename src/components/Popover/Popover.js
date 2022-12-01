import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function Popovers(props) {
  return (
        <OverlayTrigger
          trigger="click"
          key='right'
          placement='right'
          overlay={
            <Popover id={`popover-positioned-${'right'}`}>
              <Popover.Header as="h3">{'Nossa história'}</Popover.Header>
              <Popover.Body>{props.corpo}</Popover.Body>
            </Popover>
          }
        >
          <Button variant="secondary">{props.titulo}</Button>
        </OverlayTrigger>
  );
}

export default Popovers;