import { Modal, Button } from 'react-bootstrap';

import './styles.css';

function JsonModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Preview of your data
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {"Email : " + props.data.email}
            <br/>
            {"Name : " + props.data.name}
            <br/>
            {"Message : " + props.data.message}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default JsonModal