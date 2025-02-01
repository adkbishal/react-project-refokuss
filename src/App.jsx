import React from 'react'
import "./index.css";
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes';
import Products from './components/Products';
import Marquees from './components/Marquees';
import Cards from './components/Cards';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className='bg-black text-white w-full  font-satoshi'>
    <Navbar/>
    <Work/>
    <Stripes/>
    <Products/>
    <Marquees/>
    <Cards/>
    <Footer/>

    </div>
  )
}

export default App
