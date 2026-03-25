import React, { useState } from "react"

function HarryPlotter() {
    const [tabela, setTabela] = useState([])
    
    function tabela_preco() {
        let preco = []

        for (let i = 1; i <= 500; i++) {
            let resultado = 0.33 * i;
            preco.push({ quantidade: i, preco: resultado });
        }
        
        setTabela(preco);
    }
    
    return (
        <div>
            <h2> Tabela de Preços </h2>
            <button onClick={tabela_preco}>Verificar Preços</button>
            
            {/* Cuidado com a estrutura do map aqui! */}
            <ul>
                {tabela.map((item) => (
                    <li key={item.quantidade}>
                        {item.quantidade} item(ns) - R$ {item.preco.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HarryPlotter