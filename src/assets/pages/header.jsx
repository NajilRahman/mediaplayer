import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

function Header() {

  const logout = () => {
    localStorage.setItem('user', `{"email":" ","pass":" " }`);
    toast.success('loged Out')
  }
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <i className="fa-solid fa-1x fa-photo-film"></i>
            {' '}
            <h3 className='d-inline ms-2 my-4'>Media Player</h3>
          </Navbar.Brand>
        </Container>
        
          <Link to={'/login'}><h3 className='mx-5' style={{ cursor: 'pointer' }} onClick={logout}>logout</h3></Link>

              </Navbar>
    </>
  )
}

export default Header
