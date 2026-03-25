import { useState } from "react";

function Pneu() {
    const [pressaoDesejada, setPressaoDesejada] = useState('')
    const [pressaoLida, setPressaoLida] = useState('')

    const diferenca = pressaoDesejada - pressaoLida
 
    return (
        <div>
            <h2>Bomba de Pressão</h2>
            <input
                type="number"
                value={pressaoDesejada}
                onChange={(evento) => setPressaoDesejada(Number(evento.target.value))}
             /> Pressão Desejada
            <br />
            <input
                type="number"
                value={pressaoLida}
                onChange={(evento) => setPressaoLida(Number(evento.target.value))}
             /> Pressão Lida
            <br />
            <p>Faltam {diferenca} de pressão. </p>

        </div>
    )
}

export default Pneu
