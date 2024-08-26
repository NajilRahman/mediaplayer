import axios from 'axios';
import React, { useState } from 'react'
import { Modal, Button, Container, FloatingLabel, Form } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Addvideo() {
    const [show, setShow] = useState(false);
    const [videoID,setVideoID] = useState('')
    const [videoTitle,setVideoTitle] = useState('')
    const [videoImg,setVideoImg] = useState('')
    const [videoURL,setVideoURL] = useState('')
    const navi=useNavigate()
    const[user,setUser]=useState(JSON.parse(localStorage.getItem('user')))
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const setVideo =()=>{

        if(videoID && videoImg && videoTitle && videoURL)
            {
                axios.post('https://mediaplayerserver-wmdp.onrender.com/video',{id:videoID,url:videoURL,img:videoImg,title:videoTitle,userEmail:user.email,userPass:user.pass})
                .then(res=>{
                    console.log(res)
                    
                    toast.success('video added Sucsessfully')
                    handleClose()
                    navi('/')
                    setTimeout(() => {
                       
                        navi('/home')
                    }, 1);

                })
                .catch(()=>{
                    console.log('error')
                    toast.error('video ID already exist')
                });
            } 
            else{
                toast.error('please Check Input Values')
            }

        
    }
    
    return (
        <Container className='my-5'>
            <Button variant="warning" className='rounded-pill  text-center' style={{width:'max-content',height:'auto'}} onClick={handleShow}  >
            <i className="fa-solid fa-plus fa-1x"></i>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel
                        controlId="floatingId" label="Video Id"className="mb-3">
                        <Form.Control type="text" placeholder="Video Id" onChange={(e)=>setVideoID(e.target.value)}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingId" label="Video Title" className="mb-3">
                        <Form.Control type="text" placeholder="Video Titile"onChange={(e)=>setVideoTitle(e.target.value)} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingImgUrl" label="Image Url" onChange={(e)=>setVideoImg(e.target.value)} className="mb-3">
                        <Form.Control type="text" placeholder="Image Url" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingVideoUrl" label="Video Url" onChange={(e)=>setVideoURL(e.target.value)} className="mb-3">
                        <Form.Control type="text" placeholder="Video Url" />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success"  onClick={setVideo} >
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container>
    )
}

export default Addvideo
