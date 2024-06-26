import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import StudentForm from '../../Components/StudentForm'

import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {
  return (
    
    <ShoppingCartProvider>
      <BrowserRouter>
      
        <AppRoutes />
        <Navbar />
        
        
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
