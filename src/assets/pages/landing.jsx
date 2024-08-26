import React from 'react'
import { Card, Col, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Landing() {
  return (

    <>
      <div className=' container shadow   my-5 bg-light' style={{ height: 'max-content', overflow: 'hidden' }} >
        <Row>
          <Col className='p-5  ' sm={12} md={6} >


            <h1 className='p-2 d-inline py-5 fs-1'><i className="fa-solid fa-2x fa-photo-film me-3"></i>Media Player 2024</h1>
            <br />
            <br />
            <p className='mt-2 '>Media Player is an online platform for youtube video uploads and management.Media Player is an online platform for youtube video uploads and management.Media Player is an online platform for youtube video uploads and management.Media Player is an online platform for youtube video uploads and management.</p>
            <Link to={`/home`}> <button className='btn  w-100 rounded-1 bg-success text-light'>Let's Go</button></Link>
          </Col>

          

          <Col md={5} sm={12}>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/media-player-8044271-6369983.png?f=webp" alt="" />
          </Col>
        </Row>
      </div>



      <div className=' container shadow   my-5 bg-light' style={{ height: 'max-content', overflow: 'hidden' }} >
      <Row>
        <Col sm={12} md={12} className='d-flex justify-content-center p-5'>
          <h1>Features</h1>
        </Col>
        <Row className='d-flex m-5'>
          <Col md={4} sm={6}>
            <Card   style={{ width: '18rem' }}>

              <Card.Img variant="top" src="https://families-infaith.com/wp-content/uploads/2017/09/video-gallery.gif" />
              <Card.Body>
                <Card.Title>Manage Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          


          <Col md={4} sm={6}>
            <Card   style={{ width: '18rem' }}>

              <Card.Img variant="top" height={220} src="https://i.pinimg.com/originals/21/80/1f/21801f4aaed85514b1d0f0c1f8fea275.gif" />
              <Card.Body>
                <Card.Title>Upload Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>



          <Col md={4} sm={6}>
            <Card   style={{ width: '18rem' }}>

              <Card.Img variant="top" height={220} src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/31a97258737059.5a07705b4b565.gif" />
              <Card.Body>
                <Card.Title>Watch History</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Row>
      </div>

    <div className=' container p-5  shadow   my-5 bg-light' style={{ height: 'max-content', overflow: 'hidden' }} >
      <Row>
        <Col md={6} sm={12} >
        <h4>Simple and Fast</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis diam hendrerit, sollicitudin leo non, posuere dolor. Donec efficitur congue ex, sed viverra sem cursus in. In eget venenatis metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec commodo aliquet vestibulum. Morbi mi risus, mattis a tortor at, volutpat faucibus mi. In tempus suscipit ex vitae volutpat.</p>
        </Col>
  
        <Col md={6} sm={12} style={{overflowX:'hidden'}}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/N3AkSS5hXMA?si=y7QJ0zkeJ4NI7jsJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default Landing
