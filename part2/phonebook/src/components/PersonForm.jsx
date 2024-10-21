import { isEqual } from 'lodash'

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
    if (persons.some((person) => isEqual(person, newPerson))) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewPhone('')
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
