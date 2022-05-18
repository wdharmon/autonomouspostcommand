import React from 'react'
import styled from 'styled-components'
import Section from "./Section"

function Home() {
  return (
      <Container>

        <Section
        title = "Warren Harmon"
        description =  "Warren Harmon is the Founder, Developer, and Web Designer for APC since 2020. As a self-proclaimed social networking geek, Warren was inspired to create a product for his peers that allow them to create professional posts without thinking. He began his career working as a Technical Support Intern with a strong interest in databases and is currently a Data Technology Analyst based out of Manhattan. Warren earned a Bachelors of Computer Engineering degree, with minors in Computer Science and Cybersecurity"
        
        />

        </Container>
    
  )
  
}

export default Home

const Container = styled.div`
    height: 100vh;
`


