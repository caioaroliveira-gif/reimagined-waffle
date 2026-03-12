import { useState } from "react";

function Pneu() {
    const [inputUserPneu, setInputUserPneu] = useState('')
    const [inputDesejado, setInputDesejado] = useState('')
    function bombaPneu() {
        
    }
    return (
        <div>
            <h2>Bomba de Calibragem</h2>
            <div className="input-atual" >Pressão do SEU Pneu <input type="number"
            />
            </div>

            <br />

            <div className="input-atual" > Pressão Desejada <input type="number"
            />
            </div>

            <button onClick={bombaPneu}>Pressão</button>
        </div>
    )
}

export default Pneu
