import React from "react";
import { Card } from "react-bootstrap";
//import data from '../../data/pokemons.json'
const css = { width: "18rem", background: "transparent", fontSize: "15px", padding: "10px" };
const Pokemon = (props) => {
  const details = props.details;
  return (
    <div>
      <Card style={css}>
        <Card.Img src={details.image} />

        <Card.Body>
          <Card.Title> {details.name}</Card.Title>
          <Card.Text>{details.type.map((item) => `${item} `)}</Card.Text>
          <Card.Text>
            {Object.entries(details.base).map((item) => (
              <p>{`${item[0]} - ${item[1]}`}</p>
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Pokemon;
