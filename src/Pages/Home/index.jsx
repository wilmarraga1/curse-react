import { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'


import Formulario from '../../Components/Formulario'


function Home() {
  const [items, setItems] = useState(null)

  

  return (
    <Layout>
      Formulario
      <Formulario/>

      
      
    </Layout>
  )
}

export default Home