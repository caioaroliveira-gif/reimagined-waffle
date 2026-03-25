import { useState } from "react"

function Media() {
    const [primeiraNota, setPrimeiraNota] = useState('')
    const [segundaNota, setSegundaNota] = useState('')
    

    let operacao = (primeiraNota + segundaNota) / 2
    let textoResultado =""

    if (operacao >= 7) {
        textoResultado = `Você foi aprovado com ${operacao} `
    } else if (operacao >= 4) {
        textoResultado = `Você está em recuperação (melhore) ${operacao} `
    } else {
        textoResultado = `Você está reprovado!! ${operacao} `
    }
  return (
    <div>
      <h2>Média</h2>
      <input
      type="number"
      value={primeiraNota}
      onChange={ (evento) => setPrimeiraNota(Number(evento.target.value))}
      />

      <input type="number" 
      value={segundaNota}
      onChange={ (evento) => setSegundaNota(Number(evento.target.value))}
      />

      <p>Situação {textoResultado}</p>
    </div>
  )
}

export default Media
