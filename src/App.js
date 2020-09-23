import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { StyledApp } from "./AppStyles";
import { createCalendar } from "./helpers";
import Hatch from "./Hatch";


const GlobalStyle = createGlobalStyle`
  body {
    background: center / cover url("./img/calendar_backdrop.jpg");
    margin: 0;
  }
`;

function App() {
  const [hatches, setHatches] = useState(createCalendar());

  const handleFlipHatch = id => {
    console.log(id)
  }

  return (
    <>
    <GlobalStyle/>
    <StyledApp>
      {hatches.map(hatch =>
          <Hatch
              key={hatch.id}
              hatchData={hatch}
              handleClick={handleFlipHatch}
          />)}
      </StyledApp>
    </>
  );
}

export default App;