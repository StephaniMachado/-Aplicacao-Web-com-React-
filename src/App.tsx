import { useState } from "react"
import { Link } from "react-router-dom"
import { GoogleLogin, googleLogout } from "@react-oauth/google"
import { jwtDecode } from "jwt-decode"
import "./App.css"

type User = {
  name: string
  email: string
  picture: string
}

function App() {

  const [user, setUser] = useState<User | null>(() => {

    const savedUser = localStorage.getItem("user")

    return savedUser ? JSON.parse(savedUser) : null

  })


  function login(credentialResponse: any) {

    if (credentialResponse.credential) {

      const decoded = jwtDecode<User>(
        credentialResponse.credential
      )

      setUser(decoded)

      localStorage.setItem(
        "user",
        JSON.stringify(decoded)
      )

    }

  }


  function logout() {

    googleLogout()

    setUser(null)

    localStorage.removeItem("user")

  }


  return (

    <div className="integrantes-container">

      {!user ? (

        /* TELA LOGIN */

        <div className="fade">

          <h1>Login</h1>

          <div className="integrantes-card">

            <h2>Entrar com Google</h2>

            <p>Faça login para continuar</p>

            <GoogleLogin
              onSuccess={login}
              onError={() =>
                console.log("Erro login")
              }
            />

          </div>

        </div>

      ) : (

        /* TELA HOME */

        <div className="fade">

          <h1>Home</h1>

          <div className="integrantes-card">

            <h2>
              Bem-vindo, {user.name}!
            </h2>

            <img
              src={user.picture}
              alt="perfil"
              style={{
                width: "90px",
                borderRadius: "50%",
                margin: "15px 0"
              }}
            />

            <p>{user.email}</p>

            <div className="button-group">

              <button
                onClick={logout}
                className="botao-voltar"
              >
                Sair
              </button>


              <Link to="/integrantes">

                <button className="botao-voltar">
                  Integrantes
                </button>

              </Link>


              <Link
                to="/cadastro"
                state={{
                  nome: user.name,
                  email: user.email
                }}
              >

                <button className="botao-voltar">
                  Cadastro
                </button>

              </Link>

            </div>

          </div>

        </div>

      )}

    </div>

  )

}

export default App