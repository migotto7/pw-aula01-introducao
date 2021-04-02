import React from 'react';
import './card.css'

export default (props) => {
    const estiloCard = {
        backgroundColor: props.cor,
        borderColor: props.cor
    }

    return(
        <div className='Card' style={estiloCard}>
            <div className='Title'><h2>{props.titulo}</h2></div>
            <div className='Content'>
                {props.Children}
            </div>
        </div>
    )
}
