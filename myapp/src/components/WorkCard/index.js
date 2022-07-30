import React from 'react';
import Card from 'react-bootstrap/Card';

function WorkCard({projects}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='../assets/images' />
      <Card.Body>
        <Card.Title>{projects.title}</Card.Title>
        <Card.Text>
          {projects.tech}
        </Card.Text>
        <Card.Link href="#">{projects.code}</Card.Link>
        <Card.Link href="#">{projects.repo}</Card.Link>
      </Card.Body>
    </Card>
  );
}



export default WorkCard;