import { isEqual } from 'lodash'
import personsService from '../services/persons'

const RemovePerson = ({ person: removedPerson, persons, setPersons, setError }) => {
  const handleRemove = (event) => {
    event.preventDefault()
    if (confirm(`Delete ${removedPerson.name}`)) {
      personsService.remove(removedPerson.id).then(removeData => {
        setPersons(persons.filter(person => !isEqual(person, removeData)))
      }).catch(error => {
        console.log(error)
        setError(`Information of ${removedPerson.name} has already been removed from server`)
        setPersons(persons.filter(person => !isEqual(person, removedPerson)))
        setTimeout(() => setError(null), 5000)
      })
    }
  }

  return (
    <button onClick={handleRemove}>delete</button>
  )
}

export default RemovePerson
