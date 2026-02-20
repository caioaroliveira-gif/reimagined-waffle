import React from 'react'

function Paridade() {
    function calcularParidade() {
        let numero = Number(prompt("Digite o número: "))
        if (numero % 2 == 0) {
            alert("Par!! 😎😎")
        } else {
            alert("Impar!!! 🥱🥱🥱")
        }
    }
    return (
        <div>
            <h2>
                Par ou impar?
            </h2>
            <button onClick={calcularParidade}>Paridade</button>
        </div>
    )
}

export default Paridade