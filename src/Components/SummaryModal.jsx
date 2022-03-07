import { Button, Modal } from "react-bootstrap";

const SummaryModal = ({ open, handleClose, userDetails }) => {
  const { name, email, message } = userDetails;
  return (
    <>
      <Modal size="lg" show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{message}</p>
            <p className="w-100">{JSON.stringify(userDetails)}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SummaryModal;
