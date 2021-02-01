import React from 'react';
import OutputRow from './outputRow'

const Output = props => {
    return (
        <div>
            <OutputRow value={props.answer} textsize={{fontSize: '20px'}}></OutputRow>
            <OutputRow value={props.user} textsize={{fontSize: '20px'}}></OutputRow>
        </div>
    )
}

export default Output;