import React from 'react'
import './gridContainer.css'
import Card from './card/card'

let GridContainer = (props) => {
    return (
        <div className="grid">
            {props.data.map((val,index) => {
                return <Card key={index} data={val}/>
            })}
        </div>
    )
}

export default GridContainer