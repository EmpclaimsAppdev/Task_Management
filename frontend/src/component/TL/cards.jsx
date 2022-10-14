import React from 'react';
import img1 from '../assets/advancemd.webp';
import Card from './card';


function Cards(props) {
    return (
        <>
            <div className='outerflexcard'>
                    <img className='card-img-top' src={img1} alt="" />
                    <p className='card-text text-secondary'>{props.AccountName}</p>
            </div>
            {/* <Card img={img1} title={props.AccountName} /> */}
        </>
    )

}
export default Cards;



{/* <div className='container-fluid d-flex'>
            <div className='row'>
                <div className='col-md-2 block'>
                    <Card img={img1} title={props.AccountName}/>
                </div>
            </div>
        </div>
 */}
