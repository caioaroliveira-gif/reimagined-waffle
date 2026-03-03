import React from 'react'

function ver_tabuada() {
    let impu_usuario = prompt("Digite seu número")
    let tabuada = []

    for (let i = 1; i < 11; i++) {
        tabuada = impu_usuario * i
       alert("Tabuado de " + impu_usuario + "\n" + impu_usuario + "X" + i  + "=" + tabuada + "\n")
    }
 
}
function Entrevista() {
    return (
        <div>
            <h2>Tabuada</h2>
            <button onClick={ver_tabuada}>Verificar</button>
        </div>
    )
}

export default Entrevista
