import { useState } from 'react'
import './App.css'
import Evento from './components/Evento';
import Pneu from './components/Pneu';
import PapaiNoel from './components/PapaiNoel';
import Media from './components/Media';
import Bondinho from './components/Bondinho';
import Pum from './components/Pum';
import PostoDeCombustivel from './components/PostoDeCombustivel';
import Lesmas from './components/Lesmas';
import CinemadaVovo from './components/CinemadaVovo';

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
      <hr />
      <Media />
      <hr />
      <Bondinho />
      <hr />
      <Pum />
      <hr />
      <PostoDeCombustivel />
      <hr />
      <Lesmas />
      <hr />
      <CinemadaVovo />
    </>
  )
}

export default App
