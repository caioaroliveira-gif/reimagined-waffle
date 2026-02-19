import React from 'react'

function DiaDaSemana() {
    function verificarDia() {
        // let dia = Number(prompt("Digite o Dia da Semana em Nº: "))
        let dia = prompt("Digite o Dia da Semana em Nº: ")
        dia = Number(dia)

        if (dia == 1) {
            alert("Domingo")
        } else if (dia == 2) {
            alert("Segunda")
        } else if (dia == 3) {
            alert("Terça")
        } else if (dia == 4) {
            alert("Quarta")
        } else if (dia == 5) {
            alert("Quinta")
        } else if (dia == 6) {
            alert("Sexta")
        } else if (dia == 7) {
            alert("Sábado")
        } else {
            alert("Esse dia da semana não existe!!")
        }


        //switch (dia) {
        //case 1: alert("Domingo")
    }

    return (
        <div>
            <h2>Dia da Semana</h2>
            <button onClick={verificarDia}>Verificar  dia</button>
        </div>
    )
}

export default DiaDaSemana