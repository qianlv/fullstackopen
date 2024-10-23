const QueryInput = ({ query, setQuery }) => {
  const handleQuery = (event) => {
    console.log(event.target.value)
    setQuery(event.target.value)
  }

  return (
    <div>
      find countries <input value={query} onChange={handleQuery} />
    </div>
  )
}

export default QueryInput
