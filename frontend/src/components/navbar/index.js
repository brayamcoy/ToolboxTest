import React from 'react'

// Components
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

// Assets
import { navBarStyles } from '../../App.styles'
import Logo from '../../assets/logo.png'

export const NavBar = () => {
  return (
    <Navbar bg='light' style={navBarStyles}>
      <Container>
        <Image src={Logo} />
      </Container>
    </Navbar>
  )
}
