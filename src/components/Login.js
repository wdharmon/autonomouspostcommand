import React from 'react'
import styled from 'styled-components'
import Section from "./Section"
import { useEffect } from 'react'



function Home() {

  function handleCallbackResponse(response){
    console.log("Encode JWT ID token: " + response.credential );

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
        <div id = "signInDiv">

        </div>

        </Container>
    
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`