import React from 'react'
import "../Currencies/Currencies.css"

export default function Currencies(props) {
  return (
    <div className='currencies'>
      {props.currency.map((element) => (
        <div className='currency'>
          {element}
        </div>
      ))}
    </div>
  )
}
