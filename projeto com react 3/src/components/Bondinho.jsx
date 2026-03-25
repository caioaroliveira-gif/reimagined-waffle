import { useState } from "react"

function Bondinho() {
    const [alunos, setAlunos] = useState('')
    const [monitores, setMonitores] = useState('')

    let operacao = alunos + monitores
    let resultado = "" 

    if (operacao > 50) {
        resultado = `Capacidade excedida!!! ${operacao}` 
    } else if (operacao < 1) {
        resultado = `Invalido, Pessoas devem entrar!! `
    } else {
        resultado = `Bondinho Liberado!!! Total de pessoas: ${operacao}`
    }
  return (
    <div>
        <h2>Bondinho Dos Cria </h2>
        <input 
        type="text"
        value={alunos}
        onChange={(evento) => setAlunos(Number(evento.target.value))}
        />

        <input
        type="text"
        value={monitores}
        onChange={ (evento) => setMonitores(Number(evento.target.value))}
        />

        <p>Situação...  {resultado} </p>
        
    </div>
  )
}

export default Bondinho
