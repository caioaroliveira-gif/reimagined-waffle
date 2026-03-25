import { useState } from "react"

function Pum() {
    const [numLinhas, setNumLinhas] = useState(0)
    let linhasPum = []

    for (let i = 0; i < numLinhas; i++) {
        let fraseDaLinha = `${i * 4 + 1} ${i * 4 + 2} ${i * 4 + 3} PUM`;

        linhasPum.push(fraseDaLinha)
    }
    return (
        <div>
            <h2>Alguém está com dor de barriga!!</h2>
            <input
                type="number"
                value={numLinhas}
                onChange={(evento) => setNumLinhas(Number(evento.target.value))}
            />

            <br />

            {linhasPum.map((linha, i) => (
                <p key={i}>{linha}</p>
            ))}
        </div>
    )
}

export default Pum
