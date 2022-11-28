import React from 'react';
import Header from '../Header/Header';
import "./property.css"
import { useEffect } from 'react'
import { useState } from 'react'
import {FaBed,FaBath}  from 'react-icons/fa';
import {MdVerified} from 'react-icons/md'
import Footer from '../Footer/Footer';


const Property = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('search')
    console.log(id)
    //console.log(queryParams)

    const [rentHomes,setRentHomes]=useState([])
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '758433eed8msh1b83c00f1eafc96p1725b0jsn7a4a8f836b86',
                'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
            }
        };
        
        fetch(`https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=${id}&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4`, options)
            .then(response => response.json())
            .then(response => setRentHomes(response.hits))
            .catch(err => console.error(err));
      },[]);






  return (
    <>
        <Header/>
        <div className="main-property">
          <h1>Properties <span> {id=="for-rent"?"For RENT":"For BUYING"}</span> </h1>
            <div className="rent-properties-1">
            {
				rentHomes.map(function(item){

					return (
                           <div className="rental-property">
                                <img src={item.coverPhoto.url} alt="" />
                                <p><span><MdVerified/></span>{item.title}</p>
                                <p className='rent-price'>AED {item.price}/monthly</p>
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
        <Footer/>
    </>
  )
}

export default Property