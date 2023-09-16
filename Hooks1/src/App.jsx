
import './App.css'
import { useState } from 'react'

function App() {
const [name, setName] = useState("");
const [genero, setGenero] = useState("");
const [cpf, setCpf] = useState("")
const [usuario, setUsuario] = useState("")
const [dtnasc, setDtnasc] = useState("")
const [senha, setSenha] = useState("")
const [email, setEmail] = useState("")
const [comfemail, setComfemail] = useState("")
const [idiomacv, setIdiomaCv] = useState("")
console.log(name)
  return (
    <div className='App'>
      <input id='nome' 
      type='text' 
      value={name} 
      onChange={(e)=> setName(e.target.value)}
      placeholder='Nome'>
      </input>
      
      <input id='nome' 
      type='text'
      value={genero} 
      onChange={(e)=> setGenero(e.target.value)}
      placeholder='Gênero'>
      </input>

      <input id='nome' 
      type='text'
      value={cpf} 
      onChange={(e)=> setCpf(e.target.value)}
      placeholder='CPF'>
      </input>

      <input id='nome' 
      type='text'
      value={usuario} 
      onChange={(e)=> setUsuario(e.target.value)}
      placeholder='Usuario'>
      </input>

      <input id='nome' 
      type='text'
      value={dtnasc} 
      onChange={(e)=> setDtnasc(e.target.value)}
      placeholder='Data de Nascimento'>
      </input>

      <input id='nome' 
      type='text'
      value={senha} 
      onChange={(e)=> setSenha(e.target.value)}
      placeholder='Senha'>
      </input>

      <input id='nome' 
      type='text'
      value={email} 
      onChange={(e)=> setEmail(e.target.value)}
      placeholder='E-mail'>
      </input>

      <input id='nome' 
      type='text'
      value={comfemail} 
      onChange={(e)=> setComfemail(e.target.value)}
      placeholder='Confirme seu E-mail'>
      </input>

      <input id='nome' 
      type='text'
      value={idiomacv} 
      onChange={(e)=> setIdiomaCv(e.target.value)}
      placeholder='Idioma do curriculo'>
      </input>
      
      <button>Cadastrar</button>

      <h2>Meu nome é:{name}</h2>
      <h2>{genero}</h2>
      <h2>{cpf}</h2>
      <h2>{usuario}</h2>
      <h2>{dtnasc}</h2>
      <h2>{senha}</h2>
      <h2>{email}</h2>
      <h2>{comfemail}</h2>
      <h2>{idiomacv}</h2>
     
    </div>
  )
}
export default App