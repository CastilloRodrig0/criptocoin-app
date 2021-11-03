import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
import logo from '../assets/cripto-logo.png'

const CoinNav = () => {
  return (
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand >
            <img
              alt=""
              src={logo}
              className="img-logo"
            />{' '}
            CriptoCoin
          </Navbar.Brand>
        </Container>
      </Navbar>

  )
}

export default CoinNav;
