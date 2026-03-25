import { useState } from "react"

function CinemadaVovo() {
    const [textoPreco, setTextoPreco] = useState('');
    const [aumento, setAumento] = useState(null);

    function calcularPorcentagem() {

        let partes = textoPreco.split(' ');

        let valorAntigo = Number(partes[0]);
        let valorNovo = Number(partes[1]);


        let conta = ((valorNovo - valorAntigo) / valorAntigo) * 100;


        setAumento(conta.toFixed(2) + '%');
    }
  return (
    <div>
        <h2>Aumento no preço do Cinema</h2>
        <input type="text"
        value={textoPreco}
        onChange={(evento) => setTextoPreco(evento.target.value)}
         />
         <button onClick={calcularPorcentagem}>Verificar</button>
         
         {aumento !== null && (
                <div>
                    <h3>QUE ABSURDO! O PREÇO DO CINEMA SUBIU {aumento} !! 🪧</h3>
                </div>
            )}
    </div>
  )
}

export default CinemadaVovo
