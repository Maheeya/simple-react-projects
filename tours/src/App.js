import { useState, useEffect } from "react"
import Card from './Card'
import './app.css'
function App() {

const [tours, setTours] = useState([])
const [loading, setLoading] = useState(false)

var url = 'https://course-api.com/react-tours-project'

const removeTours = (id) => {
  const newTours = tours.filter((tour) => tour.id !== id)
  setTours(newTours)
}


function fetchTours(){
  setLoading(true)
  const fetchPromise = fetch(url)
  fetchPromise.then(
    (result) => {
      const jsonPromise = result.json()
      jsonPromise.then((data) => {
        setTours(data)
      })
    },
    (error) => {
      console.log('We have encountered an error')
    }
  ).finally( () => {
    setLoading(false)
    
  })
}

useEffect(() => {
  fetchTours(url)
}, []) //empty array runs only on first render

if (loading){
  return(
    <h1>Loading...</h1>
  )
}
else if (tours.length === 0 & !loading){
  return (
  <main>
    <h1> Tours </h1>
    <h2> No Tours available</h2>
    <button className="btn" onClick={() => fetchTours()}>refresh</button>
  </main>
  )
} else{
  return (
    <main>
      <h1>Tours</h1>
      <div className="App">
      <Card tours={tours} removeTours={removeTours} />

      </div>
    </main>
  );
}
}

export default App;
