import React from 'react';
import './outputRow.css'

const OutputRow = props => {
    return (
        <div>
            <input type='text' readOnly className='screen' style={props.textSize} value={props.value}></input>
        </div>
    )
}

export default OutputRow;