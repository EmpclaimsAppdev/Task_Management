import React from 'react';
import './card.css';


function Card(props) {
    return(
        <div className='flexcard'>
            <div className='overflow'>
                <img className='card-img-top' src={props.img} alt="" />
                <p className='card-text text-secondary'>{props.title}</p>
            </div>
        </div>
    )
}

export default Card;