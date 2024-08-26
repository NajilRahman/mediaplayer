import React from 'react'
import { Row ,Col} from 'react-bootstrap'
import Addvideo from '../components/addvideo'
import Video from '../components/video'
import Cat from '../components/cat'
import { Link } from 'react-router-dom'
function Home() {
  return (
   <>
    <div className=' my-4 me-5 d-flex justify-content-end'>
      <Link to={'/history'}><h5>Watch History</h5></Link>
    </div>
     <Row className='d-flex justify-content-center  my-5'>
      <Col sm={12} md={1}>
      <Addvideo/>
      </Col>
      <Col sm={12} md={8}>
      <Video/>
      </Col>
      <Col sm={12} md={2}>
      <Cat/>
      </Col>
     </Row>
   </>
  
  )
}

export default Home
