import React from "react";
import styled from "styled-components";
import RecentlyCreated from "../components/RecentlyCreated.jsx";

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2;
  justify-content: flex-start;
  border-left: solid 3px black;
  height: 60%;
`;

function Create() {
  return (
    <div>
      <h1>STUDIO PIPELETTE</h1>
      <h2>Enregistrez votre capsule sonore</h2>
      <Container>
        <RecentlyCreated />
      </Container>
      <LeftColumn>
        <h1>1</h1>
      </LeftColumn>
    </div>
  );
}

export default Create;
