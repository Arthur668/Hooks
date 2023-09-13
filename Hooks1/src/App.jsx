import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './cadastro.hook'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function App() {

  const [nome, setNome] = useState("")
 
  function handleEvt(e){
    setNome(e.target.value)
  }
  
  return (
    <>
      <div>
       {nome}
      </div>
      <div className="card" id="card">
      <input  type="text" onChange={handleEvt}  placeholder='Nome' />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Feminino" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Masculino" />
      </div>
      
    </>
  )
}

export default App