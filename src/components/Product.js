import React from 'react'
import styled from 'styled-components'
import Section from "./Section"

function Home() {
  return (
      <Container>
        
        <Section
        title = "APC Overview"
        description = "APC's functionality provides users fully functional and highly business professional job announcements to post for their network  " 
        
        />
        
        <Section
          title = "Implementation"
          description = "With APC, you'll never have to stress about wording a professional social media post. We've created a program that handles the hard work for you. Through our one-click approach, we've managed to create hundreds of posts for users looking to expand and keep their network up to date with their career path."
        />
        
        </Container>
    
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`