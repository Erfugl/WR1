import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello! My name is Erlend!!!</h1>
      <h3>I like movies, video games, reading, writing, drawing, painting, music... and so on...</h3>
      <h2>A fun fact about me:</h2>
      <p>I am related to a previous dictator of Guatemala: Kjell Laugerud</p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Foto_oficial_de_Presidente_Kjell_Eugenio_Laugerud_Garcia.jpg/875px-Foto_oficial_de_Presidente_Kjell_Eugenio_Laugerud_Garcia.jpg" alt="Kjell Laugerud" />
    </>
  )
}

export default App
