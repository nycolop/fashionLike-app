import { Logo } from 'assets/icons/logo'
import RegisterComponent from 'components/register/Register'
import { Link } from 'react-router-dom'

export function Register () {
  return (
    <div className='flex flex-col items-center justify-center px-6 py-4'>
      <Logo />
      <h2 className='my-5 font-bold text-2xl'>Registro</h2>
      <RegisterComponent />
      <small className='mt-1'><Link to='/'>Volver</Link></small>
    </div>
  )
}
