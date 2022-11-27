import React from 'react'
import { Link } from 'react-router-dom'
import "./buy.css"
import { useEffect } from 'react'
import { useState } from 'react'
import {FaBed,FaBath}  from 'react-icons/fa';
import {MdVerified} from 'react-icons/md'

const Buy = () => {
    let rentImg=require("../../Images/house buy.jpg")

    const [rentHomes,setRentHomes]=useState([])
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '758433eed8msh1b83c00f1eafc96p1725b0jsn7a4a8f836b86',
                'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
            }
        };
        
        fetch('https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-sale&hitsPerPage=9&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4', options)
            .then(response => response.json())
            .then(response => setRentHomes(response.hits))
            .catch(err => console.error(err));
      },[]);

     

  return (
    <>
        <div className="main-rent">
            <div className="top-rent">
                <div className="top-right">
                    <img src={rentImg} alt="" />
                </div>
                <div className="top-left">
                    <p>Buy a home</p>
                    <h1>Find, Buy & Own Your Dream Home</h1>
                    <p>Explore from Apartments, land, builder floors,
villas and more</p>
                    <button><Link to="/buy">Explore Buying</Link></button>
                </div>
            </div>
            <div className="rent-properties">
            {
				rentHomes.map(function(item){

					return (
                           <div className="rental-property">
                                <img src={item.coverPhoto.url} alt="" />
                                <p><span><MdVerified/></span>{item.title}</p>
                                <p className='rent-price'>AED {item.price}</p>
                                <div className="arrangments">
                                    <p><span><FaBed/></span> {item.rooms}</p>
                                    <p><span><FaBath/></span> {item.baths}</p>
                                    <p>Area: {item.area}sqft</p>
                                </div>
                           </div>
                    )
						
				})
			}
            </div>
        </div>
    </>
  )
}

export default Buy