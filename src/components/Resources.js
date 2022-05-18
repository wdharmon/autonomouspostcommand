import React from 'react'
import styled from 'styled-components'
import Section from "./Section"

function Home() {
  return (
      <Container>

        <Section
        title = "Documentation"
        description = "Comprehensive documentation to help you understand everything about the APC tool"
        />

        <Section 
        title = "FAQ"
        description = "TBD"
        />


        </Container>
    
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
    
`