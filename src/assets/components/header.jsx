import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  const logout=()=>{
    localStorage.setItem('user',`{"email":" ","pass":" " }`);
  }
  return (
    <>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
          <i class="fa-solid fa-1x fa-photo-film"></i>
            {' '}
            <h3 className='d-inline ms-2 my-4'>Media Player</h3>
          </Navbar.Brand>
        </Container>
       <a href='https://nr-yt-media.netlify.app/login'> <h3 className='mx-5' style={{cursor:'pointer'}} onClick={logout}>logout</h3></a>
      </Navbar>
    </>
  )
}

export default Header
