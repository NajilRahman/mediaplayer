import React, { useState ,useEffect } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import VideoCard from './videoCard'
import axios from 'axios'
function Video() {
  const [data, setData] = useState([])
  const[user,setUser]=useState(JSON.parse(localStorage.getItem('user')))


  useEffect(() => {
  
    axios.get(`https://mediaplayerserver-wmdp.onrender.com/video?userEmail=${user.email}&&userPass=${user.pass}`)
    .then(res => {
      setData(res.data)
    })
  }, [])
  
  return (
    <Container className='border border-3  p-5' style={{ overflow: 'hidden' }}>
      <Row>
        {
          
          data.length>0 ?
            data.map(obj => (
              obj.userEmail==user.email && obj.userPass == user.pass ?
              <Col md={4} sm={12}key={obj.id}>
                <VideoCard id={obj.id} url={obj.url} img={obj.img} title={obj.title}/>
              </Col>
              
              :''
            ))

            : <h1>No data Founded</h1> 
        }
      </Row>
    </Container>
  )
}

export default Video
