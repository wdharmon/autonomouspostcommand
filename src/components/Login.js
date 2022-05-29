import React from 'react'
import styled from 'styled-components'
import Section from "./Section"
import { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode"


function Home() {
const [user, setUser] = useState({});

  function handleCallbackResponse(response){
    console.log("Encode JWT ID token: " + response.credential );
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
  }

 useEffect(() => {
/* global google */
  google.accounts.id.initialize({
    client_id: "281831755527-i3otimousno282il96jq6d4o9nl496fv.apps.googleusercontent.com",
    callback: handleCallbackResponse
  })

  google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    {theme: "outline", size: "large"}
  )
 }, []);

  return (
      <Container>

         <Section
        title = "Coming Soon"
        description = " "
        
        /> 
        <div id = "signInDiv"></div>

        {user &&
        
        <div>
          <img src={user.picture} alt = "Profile Picture"></img>
          <h3>{user.name}</h3>
        </div>
        
        }

        

        </Container>
    
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`