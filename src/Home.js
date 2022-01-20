import React from 'react';
import './Home.css';
import ImageSlider from './imageSlider';
import { SliderData } from './SliderData';
import OrderFrom from './OrderFrom';
import jimma from './image/jimma.png';
import keffa from './image/keffa.png';
import harar from './image/Harar.png';
import yirgacheffe from './image/yirgacheffe.png';
import benchi from './image/bench.png';

function Home() {
    return (
        <div className='home_image'>
                <ImageSlider slides={SliderData}/>
        
        <div className='home'>
            <div className='home_row'>
                <OrderFrom
                    id = "1"
                    image={jimma}
                    eyu={'Jimma'}
                    body={"Jimma (Oromo: Jimma also spelled Jimmaa, is the largest city in southwestern Oromia Region, Ethiopia. It is a special zone of the Oromia Region and is surrounded by Jimma Zone. It has a latitude and longitude of 7°40′N 36°50′E﻿ / ﻿7.667°N 36.833°E . Prior to the 2007 census, Jimma was reorganized administratively as a special Zone."}
                />
                <OrderFrom
                    id = "2"
                    image={yirgacheffe}
                    eyu={'Yirgacheffe'}
                    body={"Located within Sidama, Yirgacheffe is a small region in southern Ethiopia where the beans thrive. The plants grow naturally thanks to its thick vegetation, healthy soil, and high elevations. Ethiopia provides a warm and tropical climate with moderate wet and dry seasons."}
                />
            </div>                  
        </div>
        <div className='home'>
            <div className='home_row'>
                <OrderFrom
                    id = "3"
                    image={harar}
                    eyu={'Harar'}
                    body={"Coffee from the Harar area of Ethiopia is commonly referred to as Harar coffee, or simply as Harar. The phrase \"Ethiopian Harar\" also refers to the coffee varietal used to produce coffee in the Harar region. The coffee beans from this type of coffee plant are yellow-green or golden-green in color and medium in size. It is one of the oldest coffee varietals still used to make coffee today."}
                />
                <OrderFrom
                    id = "4"
                    image={keffa}
                    eyu={'keffa'}
                    body={"The term coffee is said to derive from Kaffa, the ancient name from part of the present day Southern Nations, Nationalities and Peoples' State where Bonga lies. The story goes that sometime around the 6th century in forests near Bonga, a goat herder named Kaldi spotted his animals getting frisky after eating red berries from a shrub he'd never seen before. So Kaldi gave the berries a try himself and the coffee bean was discovered."}
                />
            </div></div>
            <div className='home'>
                <div className='home_row'>
                    <OrderFrom
                        id = "5"
                        image={benchi}
                        eyu={'Bench Maji'}
                        body={"\"Ethiopia Genika\" is a type of Arabica coffee of single origin grown exclusively in the Bench Maji Zone of Ethiopia. Like most African coffees, Ethiopia Guraferda features a small and greyish bean, yet is valued for its deep, spice and wine or chocolate-like taste and floral aroma."}
                    />
                </div> 
            </div>                 
        </div>
    )
}

export default Home
