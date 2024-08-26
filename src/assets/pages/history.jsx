import axios from 'axios'
import React, { useState ,useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify'
function History() {
  const [history, setHistory] = useState([])
  const[user,setUser]=useState(JSON.parse(localStorage.getItem('user')))

  useEffect(() => {
    axios.get(`https://mediaplayerserver-wmdp.onrender.com/history?userEmail=${user.email}`)
      .then(res => {
        setHistory(res.data)
      })
  }, [])

  return (
    <Container className='p-5'>
      <h1>Watch history</h1>

      <table className='table border border-1 my-5 '>
        <thead>
          <th>Video Id</th>
          <th>Title</th>
          <th>Video Url</th>
          <th>Date and Time</th>
          <th></th>
        </thead>
        <tbody>
          {
            history.length>0 ?
            history.map(obj=>(
              <tr>
              <td>{obj.key}</td>
              <td>{obj.title}</td>
              <td>{obj.url}</td>
              <td>{obj.data}</td>
              <td><i class="fa-solid fa-trash" onClick={()=>axios.delete('http://localhost:3000/history/'+obj.id).then(res=>{toast('watch history deleted'); setTimeout(() => {
            location.reload()
          },1500)})} id={obj.id} style={{ color: "#e50b0b",cursor:'pointer' }}></i></td>
            </tr>
            ))
            :<tr>
              <td colSpan={5}>No Data Founded</td>
            </tr>
          }



        </tbody>
      </table>
      <ToastContainer/>
    </Container>
  )
}

export default History
