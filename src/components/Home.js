import React from 'react'
import styled from 'styled-components'
import Section from "./Section"
import AILinkedInDemo from "./AILinkedInDemo.mp4";

function Home() {
  return (
      <Container>

        <Section
        title = "Autonomous Post Creation"
        description = "One Click"

        />

        <Section
        title = "Advanced Job Announcements Made Easy"
        description = "Your professional solution for creating career anouncements with ease" 
      
        />


        <Section
        title = "Download Chrome Extension"
        description = "Quickly and efficiently use our chrome extension to orchestrate your post" 
      
        />


        </Container>
    
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`