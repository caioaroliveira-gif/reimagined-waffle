import { useState } from 'react'
import './App.css'

function App() {
  const [cavalos, setCavalos] = useState([
    { id: 11, nome: "Trovão", raca: "Mangalarga Marchador", idade: 5, pelagem: "Tordilho" },
    { id: 12, nome: "Pérola", raca: "Quarto de Milha", idade: 4, pelagem: "Alazã" },
    { id: 13, nome: "Espírito", raca: "Mustang", idade: 7, pelagem: "Baio" },
    { id: 14, nome: "Apolo", raca: "Puro Sangue Inglês", idade: 6, pelagem: "Castanho" },
    { id: 15, nome: "Luna", raca: "Appaloosa", idade: 3, pelagem: "Sardenta" },
    { id: 16, nome: "Barão", raca: "Crioulo", idade: 10, pelagem: "Zaino" },
    { id: 17, nome: "Zéfiro", raca: "Lusitano", idade: 8, pelagem: "Branco" },
    { id: 18, nome: "Fagulha", raca: "Árabe", idade: 5, pelagem: "Preto" },
    { id: 19, nome: "Diamante", raca: "Andaluz", idade: 9, pelagem: "Cinza" },
    { id: 20, nome: "Cigana", raca: "Campolina", idade: 4, pelagem: "Pampa" }
  ])

  const [carros, setCarros] = useState([
    { id: 1, modelo: "Fusca 1300", marca: "Volkswagen", ano: 1974, cor: "Azul Pastel", quilometragem: 45000 },
    { id: 2, modelo: "Mustang Fastback", marca: "Ford", ano: 1967, cor: "Preto", quilometragem: 12000 },
    { id: 3, modelo: "Opala Diplomata", marca: "Chevrolet", ano: 1988, cor: "Cinza Metálico", quilometragem: 82000 },
    { id: 4, modelo: "DeLorean DMC-12", marca: "DeLorean", ano: 1981, cor: "Aço Escovado", quilometragem: 5000 },
    { id: 5, modelo: "F-40", marca: "Ferrari", ano: 1987, cor: "Vermelho Corsa", quilometragem: 2500 },
    { id: 6, modelo: "Maverick GT", marca: "Ford", ano: 1975, cor: "Laranja", quilometragem: 67000 },
    { id: 7, modelo: "911 Carrera", marca: "Porsche", ano: 1993, cor: "Branco", quilometragem: 31000 },
    { id: 8, modelo: "Kombi Corujinha", marca: "Volkswagen", ano: 1962, cor: "Saia e Blusa (Vermelho/Branco)", quilometragem: 95000 },
    { id: 9, modelo: "Charger RT", marca: "Dodge", ano: 1971, cor: "Amarelo", quilometragem: 54000 },
    { id: 10, modelo: "Shelby Cobra", marca: "AC Cars", ano: 1965, cor: "Azul com Faixas Brancas", quilometragem: 1800 }
  ])

  const [dinos, setDinos] = useState([
    { id: 101, nome: 'Tyrannosaurus rex', família: 'Tyrannosauridae', peso: '8 toneladas', altura: '4 metros', comprimento: '12 metros', períodoHistórico: 'Cretáceo Superior' },
    { id: 102, nome: 'Stegosaurus', família: 'Stegosauridae', peso: '5 toneladas', altura: '2.5 metros', comprimento: '9 metros', períodoHistórico: 'Jurássico Superior' },
    { id: 103, nome: 'Triceratops', família: 'Ceratopsidae', peso: '6 toneladas', altura: '3 metros', comprimento: '9 metros', períodoHistórico: 'Cretáceo Superior' },
    { id: 104, nome: 'Velociraptor', família: 'Dromaeosauridae', peso: '150 kg', altura: '1.8 metros', comprimento: '2 metros', períodoHistórico: 'Cretáceo Superior' },
    { id: 105, nome: 'Brachiosaurus', família: 'Brachiosauridae', peso: '50 toneladas', altura: '15 metros', comprimento: '25 metros', períodoHistórico: 'Jurássico Superior' },
    { id: 106, nome: 'Ankylosaurus', família: 'Ankylosauridae', peso: '6 toneladas', altura: '2.5 metros', comprimento: '9 metros', períodoHistórico: 'Cretáceo Superior' },
    { id: 107, nome: 'Diplodocus', família: 'Diplodocidae', peso: '12 toneladas', altura: '6 metros', comprimento: '27 metros', períodoHistórico: 'Jurássico Superior' },
    { id: 108, nome: 'Pteranodon', família: 'Pteranodontidae', peso: '90 kg', altura: '1.8 metros (asas)', comprimento: '7 metros', períodoHistórico: 'Cretáceo Superior' },
    { id: 109, nome: 'Spinosaurus', família: 'Spinosauridae', peso: '10 toneladas', altura: '4 metros', comprimento: '15 metros', períodoHistórico: 'Cretáceo Superior' },
    { id: 110, nome: 'Allosaurus', família: 'Allosauridae', peso: '2 toneladas', altura: '3 metros', comprimento: '9 metros', períodoHistórico: 'Jurássico Superior' }
  ])

  const [pokemonhos, setPokemonhos] = useState([
    { id: 200, nome: "Misdreavus", imagem: "https://img.pokemondb.net/sprites/home/normal/misdreavus.png" },
    { id: 201, nome: "Unown", imagem: "https://img.pokemondb.net/sprites/home/normal/unown.png" },
    { id: 202, nome: "Wobbuffet", imagem: "https://img.pokemondb.net/sprites/home/normal/wobbuffet.png" },
    { id: 203, nome: "Girafarig", imagem: "https://img.pokemondb.net/sprites/home/normal/girafarig.png" },
    { id: 204, nome: "Pineco", imagem: "https://img.pokemondb.net/sprites/home/normal/pineco.png" },
    { id: 205, nome: "Forretress", imagem: "https://img.pokemondb.net/sprites/home/normal/forretress.png" },
    { id: 206, nome: "Dunsparce", imagem: "https://img.pokemondb.net/sprites/home/normal/dunsparce.png" },
    { id: 207, nome: "Gligar", imagem: "https://img.pokemondb.net/sprites/home/normal/gligar.png" },
    { id: 208, nome: "Steelix", imagem: "https://img.pokemondb.net/sprites/home/normal/steelix.png" },
    { id: 209, nome: "Snubbull", imagem: "https://img.pokemondb.net/sprites/home/normal/snubbull.png" }
  ])

  return (
    <>
      <h1>Cards de Coisas</h1>

      <section>
        <h2>🐴 Cavalos</h2>
        <div className="listaCards">
          {cavalos.map((cavalo) => (
            <div className="card" key={cavalo.id}>
              <h3>{cavalo.nome}</h3>
              <p><strong>Raça:</strong> {cavalo.raca}</p>
              <p><strong>Idade:</strong> {cavalo.idade} anos</p>
              <p><strong>Pelagem:</strong> {cavalo.pelagem}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>🚗 Carros Clássicos</h2>
        <div className="listaCards">
          {carros.map((carro) => (
            <div className="card" key={carro.id}>
              <h3>{carro.modelo}</h3>
              <p><strong>Marca:</strong> {carro.marca}</p>
              <p><strong>Ano:</strong> {carro.ano}</p>
              <p><strong>Cor:</strong> {carro.cor}</p>
              <p><strong>KM:</strong> {carro.quilometragem.toLocaleString('pt-BR')}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>🦕 Dinossauros</h2>
        <div className="listaCards">
          {dinos.map((dino) => (
            <div className="card" key={dino.id}>
              <h3>{dino.nome}</h3>
              <p><strong>Família:</strong> {dino.família}</p>
              <p><strong>Peso:</strong> {dino.peso}</p>
              <p><strong>Altura:</strong> {dino.altura}</p>
              <p><strong>Comprimento:</strong> {dino.comprimento}</p>
              <p><strong>Período:</strong> {dino.períodoHistórico}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>⚡ Pokémons (demo de imagens)</h2>
        <div className="listaCards">
          {pokemonhos.map((poke) => (
            <div className="card card-poke" key={poke.id}>
              <img src={poke.imagem} alt={poke.nome} />
              <p>{poke.nome}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default App