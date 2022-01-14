import 'App.css'
import { loginWithFacebook, loginWithGoogle } from 'Auth/client'

export function App () {
  const handleClickFace = () => {
    loginWithFacebook().then((user) => console.log(user))
  }
  const hancleClickGoogle = () => {
    loginWithGoogle().then((user) => console.log(user))
  }
  return (
    <>
      <div className="App">Hello fashion Like idea 1</div>
      <button onClick={handleClickFace}>inicia secion con Facebook</button>
      <button onClick={hancleClickGoogle}>inicia secion con Google</button>
    </>
  )
}
