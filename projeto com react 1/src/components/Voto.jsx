import React from 'react'
function processarIdade() {
let idade = Number(prompt("Idade: "))
    if (idade < 16) {
        alert("Não pode Votar 😎😎")
    } else if (idade == 16 || idade == 17 || idade > 65){
        alert("Voto Facultativo 🥱🥱")
    } else if (idade >= 18 && idade <= 65){
        alert("Voto Obrigatório 💀💀")
    }
}
function Voto() {
    return (
        <div className={"voto-container"}>
            <h2>Idade para votar</h2>
            <button onClick={processarIdade}>Processar idade</button>
        </div>
    )
}

export default Voto