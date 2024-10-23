import { useEffect, useState } from 'react'
import QueryInput from './components/QueryInput'
import Countries from './components/Contries'
import countriesService from './services/countries'

function App() {
  const [query, setQuery] = useState("")
  const [countries, setCountries] = useState([])
  const [showCountry, setShowCountry] = useState(null)

  useEffect(() => {
    console.log(`query ${query}`)
    if (query) {
      countriesService.getAll().then((returnedCountries) => {
        const filterCountries = returnedCountries.filter(
          country => country.name.common.toLowerCase().includes(query.toLowerCase()))
        console.log(filterCountries.length)
        setCountries(filterCountries)
      })
    } else {
      setCountries([])
    }
    setShowCountry(null);
  }, [query])

  return (
    <>
      <QueryInput query={query} setQuery={setQuery} />
      <Countries countries={countries} showCountry={showCountry} setShowCountry={setShowCountry} />
    </>
  )
}

export default App
