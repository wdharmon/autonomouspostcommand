import React from 'react'
import styled from "styled-components"



function Header() {
  return (

    <Container>
        <p><a href="/" class="w3-bar-item w3-button w3-wide">APC</a></p> 
        {/* <p><a href = "/">PostAi</a></p> */}
        <Menu>
        
        <p><a href = "/Product">Product</a></p>
        <p><a href = "/Purpose">Purpose</a></p>
        <p><a href = "/Pricing">Pricing</a></p>
        <p><a href = "/Plan">Plan</a></p>
        <p><a href = "/Resources">Resources</a></p>
        
        <p><a href = "/Create">Create</a></p>
        
      
        </Menu>
        
        <RightMenu>
            <p><a href="/Testimonials">Testimonials</a></p>
            <p><a href="/About">About Us</a></p>
            <p><a href="/Login">Log In</a></p>


        </RightMenu>

     
        
        
    </Container>

  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  a {
    font-weight: 600;
    
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  
`

const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;


a {
  font-weight: 600;
  
  padding: 0 10px;
  flex-wrap: nowrap;
}

@media(max-width: 768px){
    display:none;
}

`

const RightMenu = styled.div `
display: flex;
align-items: center;


a {
    font-weight: 600;
    
    margin-right: 10px;
}
    
`

