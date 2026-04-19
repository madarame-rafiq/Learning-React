import React, { useState } from 'react'
import { accordionData } from "../data"


function Accordion() {
    console.log(accordionData)
    const [selected, setSelected] = useState(null);

    const handleSingle = (id) => {
        if (id == selected) 
            setSelected(null)
        else
            setSelected(id)
    }
    

  return (
    <div className='accor'>
        {
            accordionData && accordionData.length > 0 ?
            accordionData.map((data) => <div onClick={() => handleSingle(data.id)} key={data.id} className='box'>
                <div>
                    {data.title}
                </div>
                <span>+</span>
                {selected === data.id ? <div>{data.content}</div> : null}
            </div>)
            : <div>No data</div>
        }
    </div>
  )
}

export default Accordion