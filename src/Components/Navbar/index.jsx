import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { ShoppingCartContext } from '../../Context'

const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
          waramirezga@cesde.net
        </li>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>
            Estudiante
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Formulario
          </NavLink>
        </li>
       
      <ul className='flex items-center gap-3'>
        
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
          }>
            Mi Registro
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sing-in'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
          }>
            Sign In

          </NavLink>
        </li>
       
      </ul>
    </ul>
    </nav>
  )
}

export default Navbar