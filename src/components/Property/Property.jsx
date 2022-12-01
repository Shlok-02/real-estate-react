import React from 'react';
import Header from '../Header/Header';
import "./property.css"
import { useEffect } from 'react'
import { useState } from 'react'
import {FaBed,FaBath}  from 'react-icons/fa';
import {MdVerified} from 'react-icons/md'
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Property = () => {
  let navigate=useNavigate()
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('search')
    console.log(id)
    //console.log(queryParams)

    const [rentHomes,setRentHomes]=useState([])
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '554a610cc4msh18364354a110776p136e73jsn0b0054604854',
              'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
            }
        };
        
        fetch(`https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=${id}&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4`, options)
            .then(response => response.json())
            .then(response => setRentHomes(response.hits))
            .catch(err => console.error(err));
      },[]);

      function handleClick(e,id){
        
        e.preventDefault();
        console.log(id)
        console.log(e);
        navigate(`property-info?id=${id}`);
    } 





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
                                    <p className='details' onClick={(e)=>handleClick(e,parseInt(item._highlightResult.externalID.value))}>Deatils ....</p>
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