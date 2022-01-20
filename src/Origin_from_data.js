import React, {useState, useEffect} from 'react';
import './Origin_from_data.css';
import {AiFillDollarCircle} from "react-icons/ai";
import {AiOutlineSafety} from "react-icons/ai";
import {AiOutlineTeam} from "react-icons/ai";
import jimma from './image/jimma.png';
import harar from './image/Harar.png';
import yirgacheffe from './image/yirgacheffe.png';
import OrderFrom1 from './famDetial';
import {db} from './firebase';

function Origin_from_data({id, image, body, eyu}) {

    const [farm, setFarm] =useState([]);

    useEffect(()=>{
        db.collection('Jimma').onSnapshot(snapshot=>{
            setFarm(snapshot.docs.map(doc => doc.data()))
        })
    })
    
    return (
        <div className='orgin_from_page'>
            <div className='origin_location'>
                <h1> {eyu} </h1>
            </div>
            <div className='origin_me'>
                <div className='origin_me_info'>
                    <div className='icon'>
                        <AiOutlineSafety size={40}/>
                    </div>
                    <div className='icon_title'>
                        <h5>Score:- 66.7</h5>
                    </div>
                </div>
                <div className='origin_me_info'>
                    <div className='icon'>
                        <AiOutlineTeam size={40}/>
                    </div>
                    <div className='icon_title'>
                        <h5>#Farmers:- 6</h5>
                    </div>
                </div>
                <div className='origin_me_info'>
                    <div className='icon'>
                        <AiFillDollarCircle size={40}/>
                    </div>
                    <div className='icon_title'>
                        <h5>Average Price:- 3000</h5>
                    </div>
                </div>
            </div>
            <div className='origin_detial_info'>
                <h1>Detail Information</h1></div>
            <div className='origin_detail_info_1'>
                <div className='detial_text'>
                    <h2> {eyu}</h2>
                    <p>
                        {body}
                    </p>
                    <img className='detail_image' src={image} alt=''/>
                </div>
                
                
            </div>
            <div>
            {
                farm.map(
                    (val) =>(
                    <div className='home_row'>
                        {Array(2).fill().map((_, i)=>
                        (
                            <OrderFrom1
                                id = {val.id}
                                image={jimma}
                                eyu={val.eyu}
                                campName = {val.campName}
                                score={val.score}
                                price={val.price} />
                        ))}
                        </div>
                    ))
                   }
            </div>
        </div>
    )
}

export default Origin_from_data
