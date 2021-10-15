import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-items: center;
    align-items: center;
   padding-top: 12em;
   padding-right: 6em;
   padding-bottom: 3em;
   padding-left: 6em;
   border: 4px solid magenta;
   width: "";
`
const MainMessage = styled.div`
    font-size: 3em;
    text-align: center;
    font-weight: bold;
    max-width: 20em;
`
const MainButton = styled.button`
    cursor: pointer;
    max-width: 12em;
    background-color: tomato;
    color: white;
`

const Main = () => {
    return (
        <MainContainer>
            <h3 class="w3-center">Hi, we are teamxearth 👋 </h3>
            <MainMessage>
                We build software MVPs for startups and businesses.
            </MainMessage>
            <p class="w3-center">
            Wow users and investors with impactful and efficient digital experiences. 
            Drive growth through best-in-class technical and business development teams. TeamXEarth 
            aims to deliver on-demand experience for your company's technical and strategic needs.
            We are 100% remote and global. TeamXEarth leverages the best of SasS and consultancy to
            enable and help companies thrive as successful digital businesses.   
            </p>
            <MainButton>ORDER DEV TODAY</MainButton>
            <p class="w3-center">
            Access full stack developer in strategy, design and software engineering.   
            </p>
        </MainContainer>
    )
}

export default Main
