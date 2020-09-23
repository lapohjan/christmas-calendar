import React from 'react'

const Hatch = ({ hatchData: { id, nr, text, img, open }, handleClick }) =>  (
<>
    <div className={open ? "front open" : "front"}>
        <p>{nr}</p>
    </div>
    <div className={open ? "back open" : "back"}>
        <p>{text}</p>
    </div>
</>

)

export default Hatch;