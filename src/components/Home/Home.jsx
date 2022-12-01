import React from 'react'
import Header from '../Header/Header'
import Rent from '../Rent/Rent'
import Buy from '../Buy/Buy'
import Footer from '../Footer/Footer'
const Home = () => {
  return (
    <>
        <div className="main-home">
            <Header/>
            <Rent/>
             <Buy/>
            <Footer/>
        </div>
    </>
  )
}

export default Home