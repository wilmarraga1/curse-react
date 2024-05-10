import Layout from '../../Components/Layout'
import StudentForm from '../../Components/StudentForm/database'
import { useState } from 'react'

function MyAccount() {
  
  const [students, setItems] = useState(null)
  return (
    <Layout>
      Mis Registros

   
    <StudentForm estudentes={students} />
    
      
    </Layout>
  )
}

export default MyAccount