import { isEqual } from 'lodash'
import personsService from '../services/persons'

const RemovePerson = ({ person, persons, setPersons }) => {
  const handleRemove = (event) => {
    event.preventDefault()
    if (confirm(`Delete ${person.name}`)) {
      personsService.remove(person.id).then(removeData => {
        setPersons(persons.filter(person => !isEqual(person, removeData)))
      })
    }
  }

  return (
    <button onClick={handleRemove}>delete</button>
  )
}

export default RemovePerson
