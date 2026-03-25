import React from 'react'

function Notas() {
    // Função para verificar
    function vaiVerificar() {
        let notas = Number(prompt("Digite sua Nota: "))
        //Vai Verificar
        if (notas >= 81) {
            alert("Sua Classificação é A 😎😎😎!!")
        } else if (notas >= 61 && notas <= 80) {
            alert("Sua Classificação é B 👌👌👌!!")

        } else if (notas >= 41 && notas <= 60) {
            alert("Sua Classificação é C 😒😒😒!!")

        } else if (notas >= 21 && notas <= 40) {
            alert("Sua Classificação é D 🥱🥱🥱!!")
        } else {
            alert("Sua classificação é inferior ao recomendado 💀💀💀!!")
        }

    }
    return (
        <div>
            <h2>Classificar Notas</h2>
            <button onClick={vaiVerificar}>Classificar</button>
        </div>
    )
}

export default Notas