import { useState, useEffect } from "react"
import Card from './Card'
import './app.css'
function App() {

const [tours, setTours] = useState([])

const url = 'https://course-api.com/react-tours-project'

const removeTours = (id) => {
  console.log('clicked')
  /*
  let newTours = tours
  for (let i=0; i<newTours.length; i++ ){
    if (newTours[i].id === id){
      newTours.splice(i, 1);
    }
  }
  */
  const newTours = tours.filter((tour) => tour.id !== id)
  setTours(newTours)
}


function fetchTours(url){
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
  )
}

useEffect(() => {
  fetchTours(url)
}, []) //empty array runs only on first render


  return (
    <div className="App">
    <Card tours={tours} removeTours={removeTours} />

    </div>
  );
}

export default App;
