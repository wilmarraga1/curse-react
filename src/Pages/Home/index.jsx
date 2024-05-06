import { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'

import ProductDetail from '../../Components/ProductDetail'
import Formulario from '../../Components/Formulario'


function Home() {
  const [items, setItems] = useState(null)

  

  return (
    <Layout>
      Formulario
      <Formulario/>

      
      
      <ProductDetail />
    </Layout>
  )
}

export default Home