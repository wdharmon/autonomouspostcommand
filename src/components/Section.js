import React from 'react'
import styled from "styled-components"
//import { Component } from 'react'
import Fade from 'react-reveal/Fade'

function Section ({title, description, bodyOne, bodyTwo, bodyThree}){
        return(
            <Wrap>
                <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p>{bodyOne}</p>
                    <p>{bodyTwo}</p>
                    <p>{bodyThree}</p>
                </ItemText>

                </Fade>


            </Wrap>
                

        )
    }


export default Section

const Wrap = styled.div`
    
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    z-index: -1;
    width: 75vw;
    // height: 50vh;
`

