
import './App.css'
import Computaria from './components/Computaria.jsx'
import DiaDaSemana from './components/DiaDaSemana.jsx'
import FeriasJuca from './components/FeriasJuca.jsx'
import FrutacomDesconto from './components/FrutacomDesconto.jsx'
import Notas from './components/Notas.jsx'
import Paridade from './components/Paridade.jsx'
import Voto from './components/Voto.jsx'

function App() {
 

  return (
    <>
      <h1>Projeto com React</h1>
      <FeriasJuca />
      <FrutacomDesconto />
      <Voto />
      <Notas />
      <Paridade />
      <DiaDaSemana />
      <Computaria />
    </>
  )
}

export default App
