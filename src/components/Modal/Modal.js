import React from "react";
import { Modal , Button} from "react-bootstrap";

function CustomModal({
  show,
  handleClose,
  okText = "Ok",
  closeText = "Close",
  heading = "",
  children
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      {heading && (
        <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {closeText}
        </Button>
        <Button variant="primary" onClick={handleClose}>
          {okText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomModal;
