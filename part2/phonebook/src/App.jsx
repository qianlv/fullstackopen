import { useState, useEffect } from 'react'
import personService from "./services/persons"
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    console.log("effect")
      personService.getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response)
      })
  }, [])

  console.log("render", persons.length, 'persons')


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filterName={filterName}
        setFilterName={setFilterName}
      />
      <h3>add a new</h3>
      <PersonForm
        newName={newName}
        newPhone={newPhone}
        setNewName={setNewName}
        setNewPhone={setNewPhone}
        persons={persons}
        setPersons={setPersons}
      />
      <h3>Numbers</h3>
      <Persons
        persons={persons}
        filterName={filterName}
        setPersons={setPersons}
      />
    </div>
  )
}

export default App
