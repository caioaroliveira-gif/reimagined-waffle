import { useState } from "react"

function PostoDeCombustivel() {
    const [alcool, setAlcool] = useState(0);
    const [gasolina, setGasolina] = useState(0);
    const [diesel, setDiesel] = useState(0);
    const [input, setInput] = useState('');
    const [finalizado, setFinalizado] = useState(false);

    function registrarCombustivel() {

        const cod = Number(input);

        switch (cod) {
            case 1:
                setAlcool(alcool + 1);
                break;

            case 2:
                setGasolina(gasolina + 1);
                break;

            case 3:
                setDiesel(diesel + 1);
                break;

            case 4:
                setFinalizado(true);
                break;

            default:

                break;
        }

        setInput('');
    }

    return (
        <div>
            {finalizado ? (
                <div>
                    <h2>Muito Obrigado</h2>
                    <p>Álcool: {alcool}</p>
                    <p>Gasolina: {gasolina}</p>
                    <p>Diesel: {diesel}</p>
                </div>
            ) : (
                <div>
                    <h2>Posto de Combustível </h2>
                    <p>1. Álcool | 2. Gasolina | 3. Diesel | 4 Fim
                    </p>

                    <input type="number"
                        value={input}
                        onChange={(evento) => setInput(evento.target.value)}
                    />
                    <button onClick={registrarCombustivel}>
                        Registrar
                    </button>
                    </div>
                    ) 
    }
                </div>
            )
            }

            export default PostoDeCombustivel
