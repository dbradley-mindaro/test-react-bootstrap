import {Modal,Container, Row, Col} from "react-bootstrap"

const CustomModal = ({show, handleClose, title, message}) => {

    return(
        <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
          <Row>
            
              <h6>{message}</h6>
            
          </Row>
          </Container>


        </Modal.Body>
      </Modal>
    )
}

export default CustomModal;