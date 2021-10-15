import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    

`
const Wrapper = styled.div`
   display: flex;
`
const Left = styled.div`
    
`
const Center = styled.div`

`
const Right = styled.div`
    
`
const Logo = styled.h1`
    
`
const Login = styled.h1`
   
`


const Navbar = () => {
    return (
        <div class="w3-top w3-bar w3-black">
            <a href="#whatWeDo" class="w3-bar-item w3-button">What we do</a>
            <a href="#whoWeWorkWith" class="w3-bar-item w3-button">Who we work with</a>
            <a href="#insights" class="w3-bar-item w3-button">Insights</a>
            <a href="#careers" class="w3-bar-item w3-button">Careers</a>
            <a href="#about" class="w3-bar-item w3-button">About</a>
            <a href="#investors" class="w3-bar-item w3-button">Investors</a>
            <a href="#contact" class="w3-bar-item w3-button">Contact</a>
        </div>
    )
}

export default Navbar
