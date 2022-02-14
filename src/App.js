import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CategoryList from './components/CategoryList';
const App = () => {
  return (
    <Container>
      <h1>Component Workshop</h1>
      <Row>
        <CategoryList />
      </Row>
    </Container>
  );
};

export default App;
