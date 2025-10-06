import { useEffect, useState } from 'react'

type FunFact = {
  fact: string,
  img: string
}

function App() {
  const [funFact, setFunFact] = useState<FunFact | null>(null)

  useEffect(() => {
    //Hente data fra funfactdata.json hint: fetch
    fetch("/funfactdata.json")
      .then(result => result.json())
      .then(jsonResult => {
        const funFactsList: FunFact[] = jsonResult.funfacts
        setFunFact(randomFact(funFactsList))

      })
    //Sette et interval for å oppdatere et tilfeldig valg element. hint: setInterval
  }, [])

  function randomFact(factList: FunFact[]) {
    const index = Math.floor(Math.random() * factList.length)
    return factList[index]
  }

  return (
    <>
      <h1>Hello! My name is Erlend!!!</h1>
      <h3>I like movies, video games, reading, writing, drawing, painting, music... and so on...</h3>
      <h2>Here are som fun facts about me!</h2>
      <button>New fact</button>
      <div id="fact">
        <p>{funFact?.fact || "...loading"}</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Foto_oficial_de_Presidente_Kjell_Eugenio_Laugerud_Garcia.jpg/875px-Foto_oficial_de_Presidente_Kjell_Eugenio_Laugerud_Garcia.jpg" alt="Kjell Laugerud" />
        <p>{funFact?.img || "...loading"} </p>
      </div>
    </>
  )
}

export default App
