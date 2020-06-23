import React from "react";
import Pokemon from "./component/pokemon/Pokemon.jsx";
import data from "./data/pokemons.json";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <Container>
        <Row>
          {data.filter((item)=> item["base"]["Speed"]>50).map((item) => (
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
