import React from 'react'
import RegisterComponent from '../components/Register'
import { Link } from 'react-router-dom'

export function Register () {
  return (
    <div className='flex flex-col items-center justify-center px-6 py-4'>
      <img className='self-start' alt='logo' src={''} />
      <h2 className='my-5 font-bold text-2xl'>Registro</h2>
      <RegisterComponent />
      <small className='mt-1'><Link to='/'>Volver</Link></small>
    </div>
  )
}
