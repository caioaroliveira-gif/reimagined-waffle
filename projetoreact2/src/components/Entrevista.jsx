import { useState } from 'react';


function Entrevista() {
    const[tabuada, setTabuada] = useState([])
    
    function calcTabuada() {
        let inputUser = Number(prompt("Digite o número da tabuada"));
        let resultado;
        let total = [];
        
        for (let i = 1; i <= 10; i++) {
            resultado = inputUser * i;
            total.push(`${inputUser} x ${i} = ${inputUser * i}`)
            
            
        }

        setTabuada(total)
        
    }
    return (
        <div>
            <h2>Tabuada</h2>
            <button onClick={calcTabuada} class="botaoP">Verificar</button>
            {tabuada.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    )
}

export default Entrevista
