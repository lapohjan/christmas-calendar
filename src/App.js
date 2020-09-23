import React, { useState, useEffect } from "react"
import { createGlobalStyle } from 'styled-components'
import { StyledApp } from "./AppStyles";
import { createCalendar } from './helpers'
import Hatch from './Hatch'

function App() {
  const [hatches, setHatches] = useState(createCalendar());

  const handleFlipHatch = id => {
    console.log(id)
  }

  return (
    <>
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