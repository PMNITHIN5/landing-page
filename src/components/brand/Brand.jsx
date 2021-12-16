import React from 'react'
import './brand.css';
import {nike,dov,nfl,mcdonolds} from './imports'
const Brand = () => {
    return (
        <div className="brand section__padding">
            <div>
                <img src={nike}alt="nike"/>
            </div>
            <div>
                <img src={dov}alt="dov"/>
            </div>
            <div>
                <img src={nfl}alt="nfl"/>
            </div>
            <div>
                <img src={mcdonolds}alt="mcdonolds"/>
            </div>
        </div>
    )
}

export default Brand
