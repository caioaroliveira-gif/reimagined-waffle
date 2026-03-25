import { useState } from "react"

function Lesmas() {
    const [textoVelocidade, setTextoVelocidade] = useState('');
    const [nivel, setNivel] = useState(0);

    function descobrirLesmaMaisRapida() {
        let listaDeVelocidade = textoVelocidade.split(' ');

        let maiorVelocidade = Math.max(...listaDeVelocidade);


        if (maiorVelocidade < 10) {
            setNivel(1);
        } else if (maiorVelocidade >= 10 && maiorVelocidade < 20) {
            setNivel(2)
        } else {
            setNivel(3)
        }
    }
    return (
        <div>
            <h2>Velocidade das Lesmas</h2>
            <input
                type="text"
                value={textoVelocidade}
                onChange={(evento) => setTextoVelocidade(evento.target.value)}
            />

            <button onClick={descobrirLesmaMaisRapida}>Verificar Velocidade</button>
            <p>A lesma mais rápida é a de nivel {nivel} </p>
        </div>
    )
}

export default Lesmas
