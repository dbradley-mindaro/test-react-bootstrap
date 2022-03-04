import {Modal,Container, Row, Col} from "react-bootstrap"

const CustomModal = ({show, handleClose, title, message}) => {

    return(
        <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container fluid> 
          <Row>
            
              <p>{message}</p>
            
          </Row>
          </Container>


        </Modal.Body>
      </Modal>
    )
}

export default CustomModal;