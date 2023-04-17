import data from './data';
import { useState, useRef } from 'react';
import List from './List'
import './App.css'


function App() {
  const [people, setPeople] = useState(data)
  const [inputList, setInput] = useState()
  const [hideBtn, setHideBtn] = useState('block')
  const nameRef = useRef()
  const ageRef = useRef()

  function addPerson(){
    let ageString = String(ageRef.current.value)
    if (!(/years/.test(ageString))){
      ageString = ageString + ' years'
    } 
    setPeople(prevPeople => {
      return [...prevPeople,{
        id: prevPeople.length + 1, 
        name: nameRef.current.value,  
        age: ageString}]
    })
    setInput('')
    setHideBtn('block')
  }
  
  function DisplayInput(){
    return(
      <>
      <input ref={nameRef} placeholder="Full Name"></input>
      <input ref={ageRef} placeholder="Age in years"></input>
      <button onClick={addPerson} className='add' >Add Birthday</button>
      </>
    )
  }

  function addInputFields(){
    setInput(<DisplayInput />)
    setHideBtn('none')

  }


  return (
    <section className='card'>
      <h2>{people.length} Birthdays today</h2>
      <List people={people}/>
      <button onClick={() => setPeople([])}>Clear All</button>
      <button style={{display:hideBtn}} onClick={addInputFields} className='add'>Add birthday</button>
      {inputList}
    </section>
  )
}


export default App;
