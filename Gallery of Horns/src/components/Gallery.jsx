
import React, { useState } from 'react';
import HornedBeast from './HornedBeast';
import { Form, Dropdown, Container, Row, Col } from 'react-bootstrap'; // Import Container, Row, and Col for grid layout
import '../assets/Gallery.css'; // Import CSS file for styling

function Gallery({ beasts, onSelectBeast }) {
  const [selectedHorns, setSelectedHorns] = useState('All');

  const handleDropdownChange = (eventKey) => {
    setSelectedHorns(eventKey);
  };

  const filteredBeasts = selectedHorns === 'All' ? beasts : beasts.filter(beast => beast.horns === parseInt(selectedHorns));

  return (
    <Container>
      <Form>
        <Form.Group controlId="filterDropdown">
          <Form.Label>Filter by Number of Horns:</Form.Label>
          <Dropdown onSelect={handleDropdownChange}>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {selectedHorns === 'All' ? 'All Horns' : `${selectedHorns} Horns`}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="All">All Horns</Dropdown.Item>
              <Dropdown.Item eventKey="1">1 Horn</Dropdown.Item>
              <Dropdown.Item eventKey="2">2 Horns</Dropdown.Item>
              <Dropdown.Item eventKey="3">3 Horns</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>
      </Form>
      <Row className="gallery-row">
        {filteredBeasts.map(beast => (
          <Col key={beast._id} xs={12} sm={6} md={4} lg={3}> {/* Use Col component to specify grid layout for each beast */}
            <HornedBeast
              title={beast.title}
              imageUrl={beast.image_url}
              description={beast.description}
              onSelect={()=> onSelectBeast(beast)}  
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;
