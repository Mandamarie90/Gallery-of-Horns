// SelectedBeast.jsx
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function SelectedBeast({ beast, onClose }) {
  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{beast.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={beast.image_url} alt={beast.title} />
        <p>{beast.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SelectedBeast;
