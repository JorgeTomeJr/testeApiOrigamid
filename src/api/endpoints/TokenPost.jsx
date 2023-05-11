import { useState } from "react"

const TokenPost = () => {
    const [username, setNome] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')

    function handleSubmit(e){
        e.preventDefault()

        fetch(`https://dogsapi.origamid.dev/json/jwt-auth/v1/token`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then(response => {
            console.log(response)
            return response.json()
        }).then(data => {
            console.log(data)
            setToken(data.token)//o token é um objeto que contem uma propriedade token que serve pra validar
            return data
        })
    }


  return (
    <form onSubmit={handleSubmit}>
        <input type="email" value={username} onChange={({target}) => setNome(target.value)} placeholder="email" />
        <input type="password" value={password} onChange={({target}) => setPassword(target.value)} placeholder="password" />
        <button>Enviar</button>
        {token}
    </form>
  )
}

export default TokenPost