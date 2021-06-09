import React from "react";
import styled from "styled-components";

const CapsulePreview = styled.div`
  background-color: blue;
  width: 40%;
  height: 100px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function RecentlyCreated() {
  return (
    <>
      <CapsulePreview>
        <div className="capsulePreview">
          <h1>Capsule1</h1>
        </div>
      </CapsulePreview>
      <CapsulePreview>
        <div className="capsulePreview">
          <h1>Capsule2</h1>
        </div>
      </CapsulePreview>
      <CapsulePreview>
        <div className="capsulePreview">
          <h1>Capsule3</h1>
        </div>
      </CapsulePreview>
    </>
  );
}

export default RecentlyCreated;
