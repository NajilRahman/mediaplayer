import React from 'react'
import { Card, Button, Modal } from 'react-bootstrap'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
function VideoCard(props) {
  const date = new Date();
  const [show, setShow] = useState(false);
  const [history, setHistory] = useState([])
  const [img,setImg]=useState(props.img)
  const[user,setUser]=useState(JSON.parse(localStorage.getItem('user')))
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setHistory({ id: props.id, url: props.url, img: props.img, title: props.title })
    axios.post('https://mediaplayerserver-wmdp.onrender.com/history', {key:props.id, url: props.url, img: props.img, title: props.title ,data:`${date.getDate()+'/'+eval(date.getMonth()+1)+'/'+date.getFullYear()}`,userEmail:user.email,userPass:user.pass})
      .then(res => {
        console.log(res)
      })
      .catch(() => {
        console.log('error')
      });


      
  }
  return (
    <>
      <Card className='my-2 rounded-2' style={{ width: '18rem' }}>
        <Card.Img className='rounded-2' onClick={handleShow} style={{ cursor: 'pointer' }} variant="top" src={img} onError={()=>{setImg('https://helpx.adobe.com/content/dam/help/en/photoshop/how-to/vector-objects/jcr_content/main-pars/image_738713385/vector-objects-Step1_900x506.jpg')}}/>
        <Card.Body>
          <Card.Title><h5>{props.title}</h5></Card.Title>

          <Button className='bg-light border-0 mt-5' onClick={()=>axios.delete('http://localhost:3000/video/'+props.id).then(res=>{toast('video Deleted'); setTimeout(() => {
            location.reload()
          },1500);})} id={props.id}><i class="fa-solid fa-trash " style={{ color: "#f20707" }}></i></Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h2>{props.title}</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="460" height="315" src={props.url + '&autoplay=1'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe></Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default VideoCard
