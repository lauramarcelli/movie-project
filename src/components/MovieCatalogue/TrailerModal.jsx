import { Modal, Button } from "react-bootstrap";
import ReactPlayer from "react-player";

const TrailerModal = ({ show, onHide, trailerUrl }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Trailer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ReactPlayer url={trailerUrl} controls width="100%" height="100%" />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TrailerModal;
