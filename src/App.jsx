import './App.css'
import './bootstrap.min.css'
import Header from './assets/components/header'
import Footer from './assets/components/footer'
import Home from './assets/pages/home'
import History from './assets/pages/history'
import Landing from './assets/pages/landing'
import Error from './assets/components/error'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Notify from './assets/components/notify'
import Register from './assets/pages/register'
import Login from './assets/pages/login'

function App() {
  const user=  localStorage.getItem('user');
  console.log(user)
  if(user===undefined)
  {
    localStorage.setItem('user',`{"email":" ","pass":" " }`)
  }
  else{
    console.log('error')
  }

  const router=createBrowserRouter([
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'/',
      element:<Landing/>,
      errorElement:<Error/>
    },
    {
      path:'/history',
      element:<History/>
    },
    {
      path:'/msg',
      element:<Notify/>
    },
    {
      path:'/register',
      element:<Register/>
    },
    {
      path:'/login',
      element:<Login/>
    }
  ])
  return (
    <>
    <Header/>

     <RouterProvider router={router}/>

     <Footer/>
    </>
  )
}

export default App
