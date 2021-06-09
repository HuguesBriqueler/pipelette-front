import React from "react";
import styled from "styled-components";
import "../CSS/RecentCapsules.css";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 50vh;
`;

const ColumnLeft = styled.div`
  display: flex;
  row-gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }
`;

const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Create() {
  return (
    <div>
      <h1 className="titre1">STUDIO PIPELETTE</h1>
      <h2 className="titre2">Enregistrez votre capsule sonore</h2>
      <div className="fakeImage">
        <h1>Image</h1>
      </div>
      <Section>
        <Container>
          <ColumnLeft>
            <div>
              <p className="logo">👧</p>
            </div>
            <div className="capsules">
              <h1>Capsule1</h1>
            </div>
            <div className="capsules">
              <h1>Capsule2</h1>
            </div>

            <div className="capsules">
              <h1>Capsule3</h1>
            </div>
          </ColumnLeft>
          <ColumnRight>
            <p className="texts">
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression.
            </p>
            <p className="symbols">🎙</p>
            <p className="texts">Enregistrer</p>
            <p className="symbols">⬆ 📂</p>
            <p className="symbols"></p>
            <p className="texts">Charger</p>
          </ColumnRight>
        </Container>
      </Section>
    </div>
  );
}

export default Create;
