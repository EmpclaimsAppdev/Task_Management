import React from 'react';
import img1 from '../assets/advancemd.webp';
import Card from './card';
import '../App.css';

function Cards(){
    return(
        <div className='container-fluid d-flex justify-content-center'>
            <div className='row'>
                <div className='col-md-2 block'>
                    <Card img={img1} title="MD Software"/>
                </div>
                <div className='col-md-2 block'>
                    <Card img={img1} title="MD Software"/>
                </div>
                <div className='col-md-2 block'>
                    <Card img={img1} title="MD Software"/>
                </div>
                <div className='col-md-2 block'>
                    <Card img={img1} title="MD Software"/>
                </div>
                <div className='col-md-2 block'>
                    <Card img={img1} title="MD Software"/>
                </div>
                <div className='col-md-2 block'>
                    <Card img={img1} title="MD Software"/>
                </div>
                <div className='col-md-2 block'>
                    <Card img={img1} title="MD Software"/>
                </div>
            </div>
        </div>

    )
}
export default Cards;