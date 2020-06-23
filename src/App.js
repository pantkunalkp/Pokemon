import React from "react";
import Pokemon from "./component/pokemon/Pokemon.jsx";
import data from "./data/pokemons.json";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css"

const App = () => {
  return (
    <div className = "app">
      <Container>
        <Row>
          {data.map((item) => (
            <Col>
              <Pokemon details={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
