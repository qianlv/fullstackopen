const Persons = ({ filterName, persons }) => {
  return (<>
    {
      persons.
        filter(person => person.name.includes(filterName)).
        map(person => <div key={person.name}>{person.name}</div>)
    }
  </>
  )
}

export default Persons
