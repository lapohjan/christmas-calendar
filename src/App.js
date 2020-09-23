import React, { useState, useEffect } from "react"
import { createGlobalStyle } from 'styled-components'
import { createCalendar } from './helpers'
import Hatch from './Hatch'

function App() {
  const [hatches, setHatches] = useState(createCalendar());

  const handleFlipHatch = id => {
    console.log(id)
  }

  return (
    <>
     {hatches.map(hatch =>
      <Hatch
        key={hatch.id}
        hatchData={hatch}
        handleClick={handleFlipHatch}
      />)}
    </>
  );
}

export default App;