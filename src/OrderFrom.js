import { Button } from '@material-ui/core'
import React from 'react'
import "./OrderFrom.css"
import {Link} from 'react-router-dom'
import {useStateValue} from "./StateProvider"

function OrderFrom({id, image, body, eyu}) {

    const [{basket}, dispatch] = useStateValue();

    console.log("this the basket >>>", basket);

    const addToBasket =  () => {
        //sipatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item : {
                id: id,
                body: body,
                image: image,
                eyu: eyu,
            },
        });
    };

    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src ={image} alt=''/>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                <h3>{eyu}</h3>
                </div>
                <div className='card-body'>
                    <p>{body}</p>
                </div>
                <div className='btn'>
                    <Link to ='/order'>
                        <button onClick={addToBasket}>
                        <a> View more</a>
                    </button>
                    </Link>
                    
                </div>
            </div>
            
        </div>
    )
}

export default OrderFrom