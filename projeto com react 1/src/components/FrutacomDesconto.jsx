import React from 'react'
import { useState } from 'react'
function FrutacomDesconto() {
    const[saida, setSaida] = useState()
    
    function frutaDesconto() {
        
        let quantidade = Number(prompt("Quantidade de Maçãs :"))
        let total = 0
        if (quantidade < 12) {
            total = quantidade * 0.30
            //alert(`O total fica R$ ${total.toFixed(2)}`)
        } else {
            total = quantidade * 0.25
            //alert(`O preço fica R$ ${total.toFixed(2)}`)
        }

        setSaida("R$" + total.toFixed(2))

    }
    return (
        <div className={"desconto-fruta"}>
            <h2>Conferir Frutas</h2>
            <p>
                Resultado: {saida}
            </p>
            <button onClick={frutaDesconto}>Conferir</button>
        </div>
    )
}

export default FrutacomDesconto