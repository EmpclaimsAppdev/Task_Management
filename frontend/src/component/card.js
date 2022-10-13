import React from 'react';
import '../App.css';

function Card(props) {
    return(
        <div className='card text-center shadow blocck'>
            <div className='overflow'>
                <img className='card-img-top' src={props.img} alt="" />
                <p className='card-text text-secondary'>{props.title}</p>
            </div>
        </div>
    )
}

export default Card;