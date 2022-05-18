import React from 'react';
import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import Product from "./components/Product"
import Pricing from "./components/Pricing"
import Plan from "./components/Plan"
import Purpose from "./components/Purpose"
import Resources from "./components/Resources"
import Create from "./components/Create"
import Testimonials from "./components/Testimonials"
import About from "./components/About"



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      {/* <Home/> */}
      <Routes>

        <Route path = "/" exact element = {<Home/>}     />
        <Route path = "/Product" exact element = {<Product/>}     />
        <Route path = "/Purpose" exact element = {<Purpose/>} />
        <Route path = "/Pricing" exact element = {<Pricing/>}     />
        <Route path = "/Plan" exact element = {<Plan/>}     />
        <Route path = "/Resources" exact element = {<Resources/>}     />
        <Route path = "/Create" exact element = {<Create/>}     />
        <Route path = "/Testimonials" exact element = {<Testimonials/>}     />
        <Route path = "/About" exact element = {<About/>}     />

      </Routes>
      
      </div>
    </Router>
    
  );
}

export default App;
