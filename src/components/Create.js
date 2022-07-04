import React from 'react'
import styled from 'styled-components'
// import Section from "./Section"
import {Component} from 'react'
import { Form, Button, Card } from 'react-bootstrap'
// const dotenv = require('dotenv');


const { Configuration, OpenAIApi } = require("openai");

// dotenv.config({
//   path: '../.env'
// })

class Create extends Component  {
  constructor() {
        super()
        this.state = {
            heading: 'Your personalized AI-generated response will be shown here',
            response: 'Please Wait A Moment'
        }
    }

    onFormSubmit = e => {
      e.preventDefault()

      const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries())
      console.log(formDataObj.companyName)


      // OPENAI Section

      const configuration = new Configuration({
        apiKey: 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, //replace with apikey
      });
      const openai = new OpenAIApi(configuration);
      
      openai.createCompletion("text-davinci-002", {
        prompt: `Write a detailed, informative, and professional LinkedIn job acceptance post for: ${formDataObj.companyName}`,
        temperature: 0.8,
        max_tokens: 250,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((response) => {
        this.setState({
          heading: `Job Acceptance Post For: ${formDataObj.companyName}`,
          response: `${response.data.choices[0].text}` //Try changing 0 and see what happens
        })
      }
      
      
      
      
      );

      // END OpenAI Section

    }

    render() {
      
      return (
      
        <div>   
        <Container> 
          <br></br>
          <br></br>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
         

          <h4>Generate Announcement Below</h4>
          <br/>
          <Form onSubmit={this.onFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>What Position and Company are you posting for?</Form.Label>
                <br></br>
                <Form.Control
                        type="text"
                        name="companyName"
                        placeholder="Enter Position and Company"/>
                <Form.Text classname="text-muted">
                  <br></br>
                    Enter as much info as possible for a more concise post

                </Form.Text>

            </Form.Group>
            
            <Button variant="primary" size="lg" type="submit">

                Create Job Announcement
            </Button>

          </Form>

            <br />

            <Card>
                <Card.Body>
                    <Card.Title><h1>{this.state.heading}</h1></Card.Title>
                    <hr/>
                    <Card.Text>
                        <h4>
                        {this.state.response}
                        </h4>
                    </Card.Text>
                </Card.Body>
            </Card>


        </Container>
        

      </div>
      );


    }
    
  }


export default Create

const Container = styled.div`
    height: 100vh;
    font-size: large;
`


