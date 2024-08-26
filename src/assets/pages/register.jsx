import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')

  

const reg=()=>{
  axios.post('https://mediaplayerserver-wmdp.onrender.com/user',{userEmail:email,userPass:pass})
  .then(res=>{
    console.log('regisered')
   
  })
  .catch(()=>{
    console.log('error to register')
  })
}
  return (
    <div>
      <section className="h-100  gradient-form" style={{ backgroundColor: '#eee' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">

                      <form>
                        <h1>Register</h1>

                        <div className="form-outline mb-4">
                          <input onChange={(e)=>setEmail(e.target.value)}
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder=" email address"
                          />
                          <label className="form-label" htmlFor="form2Example11" >Username</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input onChange={(e)=>setPass(e.target.value)}
                            type="password"
                            id="form2Example22"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form2Example22">Password</label>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                         <Link to={'/login'}>
                            <Button
                              variant='success'
                              type="button"
                              className="fa-lg gradient-custom-2 mb-3"
                              onClick={()=>reg()}
  
                            >
                              Register
                            </Button>
                         </Link>
                          <br />
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2"> have an account?</p>
                         <Link to={'/Login'}>
                            <Button
                              variant='danger'
                              type="button"
  
                            >
                        
                            Login
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
    </div>
  );
}

export default Register;
