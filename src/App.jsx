// import { loginWithFacebook, loginWithGoogle } from 'Auth/client'
import { Landing } from 'pages/landing'
import { Login } from 'pages/login'
import { Recovery } from 'pages/recovery'
import { Register } from 'pages/register'
import { Route, Routes } from 'react-router-dom'

export function App () {
  // const handleClickFace = () => {
  //   loginWithFacebook().then((user) => console.log(user))
  // }
  // const hancleClickGoogle = () => {
  //   loginWithGoogle().then((user) => console.log(user))
  // }

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recovery" element={<Recovery />} />
      </Routes>
    </>
  )
}
