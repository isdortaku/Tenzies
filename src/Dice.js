import React from 'react'
import { nanoid } from 'nanoid'

function Dice(props) {

    const faces = [
        <div key={nanoid()} className='dot center middle'></div>,

    [ 
        <div key={nanoid()} className='dot top right'></div>,
        <div key={nanoid()} className='dot bottom left'></div>,
    ],

[
        <div key={nanoid()} className='dot top right'></div>,
        <div key={nanoid()} className='dot center middle'></div>,
        <div key={nanoid()} className='dot bottom left'></div>,
],

[
        <div key={nanoid()} className='dot left top'></div>,
        <div key={nanoid()} className='dot top right'></div>,
        <div key={nanoid()} className='dot bottom left'></div>,
        <div key={nanoid()} className='dot bottom right'></div>,
],

[
    <div key={nanoid()} className='dot left top'></div>,
    <div key={nanoid()} className='dot top right'></div>,
    <div key={nanoid()} className='dot bottom left'></div>,
    <div key={nanoid()} className='dot bottom right'></div>,
    <div key={nanoid()} className='dot center middle'></div>,
],

[
        <div key={nanoid()} className='dot left top'></div>,
        <div key={nanoid()} className='dot top right'></div>,
        <div key={nanoid()} className='dot center left'></div>,
        <div key={nanoid()} className='dot bottom right'></div>,
        <div key={nanoid()} className='dot bottom left'></div>,
        <div key={nanoid()} className='dot bottom center right'></div>,
]
    ]

    let face = props.value >= 1 && props.value <= 6 ? faces[props.value - 1] : <div className="error">Invalid dice value</div>;
    
  return (
    <div onClick={props.holdDice} className={props.isHeld ? 'dice held' : 'dice'}>
       {face}
    </div>
  )
}

export default Dice