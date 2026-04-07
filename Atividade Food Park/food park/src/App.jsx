import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import CerealKillerCerealBar from './pages/CerealKillerCerealBar'
import Acarajessica from './pages/Acarajessica'
import PizzaRuth from './pages/PizzaRuth'

function App() {
  const [tela, setTela] = useState('')

  return (
    <>
      <div className={'cont-app'}>
        <header className={'cont-header'}>
          <nav>
            <button className={'botoes-nav'}
              onClick={() => setTela(<Home />)}>
              Home</button>
            <button className={'botoes-nav'}
              onClick={() => setTela(<CerealKillerCerealBar />)}>
              Cereal Bar</button>
            <button className={'botoes-nav'}
              onClick={() => setTela(<Acarajessica />)}>
              Acarajéssica</button>
            <button className={'botoes-nav'}
              onClick={() => setTela(<PizzaRuth />)}>
              PizzariaRuth</button>

          </nav>
        </header>
        <main className={'cont-main'}>
          {tela}
        </main>
      </div>
    </>
  )
}

export default App
