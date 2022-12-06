import React from 'react';
// import { NavLink } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function WorkCard({ project }) {
  const indCard = { padding: '5px', margin: '5px' };
  const linkStyle = { color: 'black' };

  const { title, tech, code, link } = project;


  return (
    <div className="project" key={title} style={indCard}>
      <Card style={{ width: '18rem', borderRadius: '25px' }}>
        <Card.Img style={{ width: '18rem' }} variant="top" src={require(`../../../assets/projects/${title}.jpg`)} alt={title} />
        <Card.Body>
          <Card.Title>
            <Card.Link href={code}><i className="fab fa-github"></i></Card.Link>
            <Card.Link style={linkStyle} href={link}>{title}</Card.Link>
          </Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Text>{tech}</Card.Text>

        </Card.Body>

      </Card>

    </div>

  );
}



export default WorkCard;