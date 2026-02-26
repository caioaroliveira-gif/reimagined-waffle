import React from 'react'
import { userState } from 'react-dom'
function conferir() {
    cosnt[conta, setConta] = userState
}
function FeriasJuca() {
    let diarias = Number(prompt("Quantos Dias?"))
    let valorDiaria

    if (diarias <= 5){
        valorDiaria = 100
    } else if (diarias < 11) {
        valorDiaria = 90
    } else {
        valorDiaria = 80
    }

    let valorBruto = diarias * valorDiaria

    let desconto10 = valorBruto * 0.10
    let desconto15 = valorBruto * 0.15
    let valorTotal = valorBruto - desconto10 - desconto15 + 150
    return (
        <div className={"albergue"}>
            <h2>Hotel de Cria</h2>

            <button onClick={conferir}>Conferir Desconto</button>
        </div>
    )
}

export default FeriasJuca