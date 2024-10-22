import personsService from '../services/persons'

const PersonForm = ({ newName, newPhone, setNewName, setNewPhone, persons, setPersons }) => {
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newPhone,
    }
    let person = persons.find((person) => person.name === newName)
    if (person !== undefined) {
      console.log(person)
      if (confirm(`${newName} is already added to phonebook, replace the old number with a new one`)) {
        newPerson.id = person.id
        personsService.update(person.id, newPerson).then(returnPerson => {
          console.log("returnPerson ", returnPerson)
          setPersons(persons.map(person => person.id === returnPerson.id ? returnPerson : person))
        })
      } else {
        return
      }
    }

    personsService.create(newPerson).then(returnPerson => {
      setPersons(persons.concat(returnPerson))
      setNewName('')
      setNewPhone('')
    })

  }

  return (
    <form>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>number: <input value={newPhone} onChange={handlePhoneChange} /></div>
      <div>
        <button type="submit" onClick={addPerson}>add</button>
      </div>
    </form>
  )
}

export default PersonForm
