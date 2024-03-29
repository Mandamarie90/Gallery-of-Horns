// SelectedBeast.jsx
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function SelectedBeast({ selectedBeast, onClose }) {
  
const {title, image_url, description} = selectedBeast;
console.log(image_url);
  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={image_url} alt={title} style={{width:"80%"}}/>
        <p>{description}</p>
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
