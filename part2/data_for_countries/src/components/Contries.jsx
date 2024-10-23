import CountryInfo from "./CountryInfo"
import ShowCountryButton from "./ShowCountryButton"

const Countries = ({ countries, showCountry, setShowCountry }) => {
  if (countries.length > 10) {
    return (<div>Too many matches, specify another filter</div>)
  } else if (countries.length == 1) {
    return (<CountryInfo country={countries[0]} />)
  }

  // console.log("show ", countries)
  return (
    <>
      {countries.map((country, index) => {
        if (showCountry === index) {
          return (
            <div key={country.name.common}>
              <div>{country.name.common} <ShowCountryButton countryIndex={index} setShowCountry={setShowCountry} />
              </div>
              <CountryInfo country={country} />
            </div>)
        } else {
          return (
            <div key={country.name.common}>
              <div>{country.name.common} <ShowCountryButton countryIndex={index} setShowCountry={setShowCountry} />
              </div>
            </div>)
        }
      })}
    </>
  )
}

export default Countries
