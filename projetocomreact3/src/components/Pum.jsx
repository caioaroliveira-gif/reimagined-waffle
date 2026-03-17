import { useState } from "react"

function Pum() {
    const [puns, setPuns] = useState('')
    let frase = `${"João soltou \n " .repeat(puns)} `
  return (
    <div>
        <h2>Quantos PUMS Jão Soltou?</h2>
        <input 
        type="text"
        value={puns}
        onChange={ (evento) => setPuns(Number(evento.target.value))}
        />
        <p>{frase}</p>
    </div>
  )
}

export default Pum
