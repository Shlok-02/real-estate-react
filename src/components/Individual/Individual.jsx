import React from 'react';
import Header from '../Header/Header';
import { useEffect } from 'react'
import { useState } from 'react'
import {FaBed,FaBath}  from 'react-icons/fa';
import {MdVerified} from 'react-icons/md'
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import "./Individual.css"


export const Individual = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const propertyid = queryParams.get('id');
    console.log(queryParams)
    console.log(propertyid)


    const [Home,setHome]=useState([])
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '554a610cc4msh18364354a110776p136e73jsn0b0054604854',
                'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
            }
        };
        
        fetch(`https://bayut.p.rapidapi.com/properties/detail?externalID=${propertyid}`, options)
            .then(response => response.json())
            .then(response => setHome([response]))
            .catch(err => console.error(err));
      },[]);

      console.log(typeof Home)
      console.log(Home)
  return (
    <>
            <Header/>
       {Home.length>0? 


       <>
        <div className='main-indi'>
                

              
            <img  src={Home[0].coverPhoto.url} alt="No img" />
                <h1>{Home[0].title}</h1>
                <div className="arrangments">
                    <p><span><FaBed/></span> {Home[0].rooms}</p>
                    <p><span><FaBath/></span> {Home[0].baths}</p>
                    <p><strong>Area: </strong>{Home[0].area}sqft</p>
                </div>
                <p>{Home[0].description}</p>
                <p>Purpose : <strong> {Home[0].purpose}</strong></p>
        </div>
       </>
       
       
       :
       console.log("Buy world")
       }
       <Footer/> 
    </>
  )
}
