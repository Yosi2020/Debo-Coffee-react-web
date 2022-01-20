import React, {useState} from 'react'
import "./OrderFrom.css"
import {Link} from 'react-router-dom'
import Contact from './componets/Contact'

function OrderFrom1({id, image, eyu, campName, score, price}) {

    const [contactOpen, setContactOpen] = useState(false);

    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src ={image} alt=''/>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                <h3>{eyu}</h3>
                </div>
                <div className='card-body1'>
                    <p>{campName}</p>
                </div>
                <div className='card-body1'>
                    <p>{score}</p>
                    <p>%</p>
                </div>
                <div className='card-body1'>
                    <p>$ </p>
                    <p>{price}</p>
                </div>
                <div className='btn'>
                    <Link to='/contact'>
                        <button onClick={()=>{setContactOpen(true)}}>
                            <a> Contact Us</a>
                        </button>
                        {contactOpen && <Contact setContactOpen={setContactOpen} />}
                    </Link>
                    
                </div>
            </div>
            
        </div>
    )
}

export default OrderFrom1