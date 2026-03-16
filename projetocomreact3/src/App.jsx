import { useState } from 'react'
import './App.css'
import Evento from './components/Evento';
import Pneu from './components/Pneu';
import PapaiNoel from './components/PapaiNoel';

function App() {
  const [InputNome, setInputNome] = useState('')
  function cadastrar() {
    console.log("Cadstrar: " + InputNome);
  }

  return (
    <>
      <h1>Inputs Controlados</h1>
      Nome <input 
      type="text" 
      value={InputNome}
      onChange={(e) => setInputNome(e.target.value)} />

      <button onClick={cadastrar}>Cadastrar</button>

      <hr />
      <Evento />
      <hr />
      <Pneu />
      <hr />
      <PapaiNoel />
    </>
  )
}

export default App
