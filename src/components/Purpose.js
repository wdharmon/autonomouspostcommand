import React from 'react'
import styled from 'styled-components'
import Section from "./Section"

function Home() {
  return (
      <Container>

        <Section
        title = "Our Story"
        description = "APC is an easy-access OpenAI based tool that constructs users a quick, reliable, and intelligent job announcement post for users. At APC we empower professionals to share their career updates and goals with others. Users can generate posts through our website or through the APC Chrome Extension" 
        />

        <Section
        
        title = "Our Vision"
        description = "Eliminate the struggle of creating professional posts."
        bodyOne = "Promote the use of AI in the daily lives of professionals."
        bodyTwo = "Inspire."
        />

        </Container>
    
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`