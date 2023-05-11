import { useState } from "react"

const UsePost = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e){
        e.preventDefault()

        fetch(`https://dogsapi.origamid.dev/json/api/user`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        }).then(response => {
            console.log(response)
            return response.json()
        }).then(data => {
            console.log(data)
            return data
        })
    }


  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={({target}) => setUsername(target.value)} placeholder="texto" />
        <input type="email" value={email} onChange={({target}) => setEmail(target.value)} placeholder="email" />
        <input type="password" value={password} onChange={({target}) => setPassword(target.value)} placeholder="password" />
        <button>Enviar</button>
    </form>
  )
}

export default UsePost