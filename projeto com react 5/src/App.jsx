import './App.css'
import CardProduto from './components/CardProduto';
import { useState } from 'react'
function App() {
  const [produtos, setProdutos] = useState(
    [{ id: 0, nome: 'Kichute', preco: 333, image: '😒' },
    { id: 1, nome: 'Monareta', preco: 654, image: '😁' },
    { id: 2, nome: 'Tamagotchi', preco: 22, image: '😘' },
    { id: 3, nome: 'Genius', preco: 150, image: '👌' }

    ])

    function cadastrar(){
      let produtoNovo = { id: 5, nome: 'Pogobol', preco: 10, image: '😊' }
      setProdutos([...produtos, produtoNovo])
    }
  return (
    <div>
      <h1>Cards de Coisas</h1>
      <button className='button-cadastrar' onClick={cadastrar}>+</button>
      <div className="listaCards">
        {
          produtos.map((produto) => (
            <CardProduto p={produto} key={produto.id} />
          ))
        }

      </div>
    </div>
  )
}

export default App
