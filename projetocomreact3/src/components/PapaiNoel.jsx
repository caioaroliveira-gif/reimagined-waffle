import { useState } from "react"

function PapaiNoel() {
    const [numeroSorteado, setNumeroSorteado] = useState(0)
    let frase = `${"Ho " .repeat(numeroSorteado)}!`
  return (
    <div>
      <h2>Papai Noel 🎅🎅</h2>
      <input 
      type="text"
      value={numeroSorteado}
      onChange={(evento) => setNumeroSorteado(Number(evento.target.value))}
      /> Quantos Ho Hos Noel deu!

      <p>Ria Papai Noel {frase}</p>
    </div>
  )
}

export default PapaiNoel
