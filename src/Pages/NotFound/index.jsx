import Layout from '../../Components/Layout'
import Login from '../../Components/Login'

function NotFound() {
  return (
    <Layout>
      Inicio
      <img className='w-8 hover:w-10 cursor-pointer'  src="public/Login.png  "  alt=""  />
    <Login/>
    </Layout>
  )
}

export default NotFound