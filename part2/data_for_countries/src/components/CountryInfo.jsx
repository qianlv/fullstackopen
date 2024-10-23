const ListLanguages = ({ languages }) => {
  const ols = []
  for (let key in languages) {
    ols.push(languages[key])
  }
  console.log(ols)
  return (
    <>
      {ols.map(language => <li key={language}>{language}</li>)}
    </>
  )
}

// "flags": {
//   "png": "https://flagcdn.com/w320/kw.png",
//   "svg": "https://flagcdn.com/kw.svg",
//   "alt": "The flag of Kuwait is composed of three equal horizontal bands of green, white and red, with a black trapezium superimposed on the hoist side of the field. This trapezium has its base on the hoist end and spans about one-fourth the width of the field."
// },
const ShowFlag = ({flags}) => {
  return (
    <img src={flags.png} alt={flags.alt} />
  )
}

const CountryInfo = ({ country }) => {
  console.log(country.capital.join(" "))
  console.log(country.languages)
  return (
    <div>
      <h2>{country.name.common}</h2>
      <div>capital {country.capital.join(" ")}</div>
      <div>area {country.area}</div>
      <h3>languages</h3>
      <ul>
        <ListLanguages languages={country.languages} />
      </ul>
      <ShowFlag flags={country.flags} />
    </div>
  )
}

export default CountryInfo
