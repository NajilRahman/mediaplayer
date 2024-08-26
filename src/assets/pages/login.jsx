import axios from 'axios'
import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { json, Link } from 'react-router-dom'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
function Login() {
  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')
  const[localdata,setLocaldata]=useState('')

 const navi=useNavigate();
  useEffect(() => {
   setLocaldata( JSON.stringify({email:email,pass:pass}))
  }, [email,pass])
  
  const reg=()=>{
    axios.get('https://mediaplayerserver-wmdp.onrender.com/user')
    .then(res=>{
      res.data.map(obj=>{
        if(obj.userEmail==email && obj.userPass==pass)
        {
         
          localStorage.setItem('user',localdata)
          toast('logined')
          setTimeout(() => {
            navi('/')
          }, 1500);

        }
        else{
          toast('invalid User Data')
        }
      })
    })
    .catch(()=>{
      toast('failed to login 401')
    })
  }
  return (
    <div>
      <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">

                      <form>
                        <h1>Login</h1>

                        <div className="form-outline mb-4">
                          <input onChange={e=>setEmail(e.target.value)}
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder=" email address"
                          />
                          <label className="form-label" htmlFor="form2Example11">Username</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input onChange={e=>setPass(e.target.value)}
                            type="password"
                            id="form2Example22"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form2Example22">Password</label>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                            <Button onClick={reg}
                              variant='success'
                              type="button"
                              className="fa-lg gradient-custom-2 mb-3"
  
                            >
                              Login
                            </Button>
                          <br />
                          <a className="text-muted" href="#!">Forgot password?</a>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <Link to={'/register'}>

                          <Button
                            variant='danger'
                            type="button"

                          >
                            Create new
                          </Button>
                          </Link>

                        </div>

                      </form>

                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2" style={{background:"url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg)",backgroundSize:'contain',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer/>
    </div>
  )
}

export default Login
