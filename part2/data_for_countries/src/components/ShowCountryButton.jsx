const ShowCountryButton = ({countryIndex, setShowCountry}) => {
  const onClick = () => {
    setShowCountry(countryIndex)
  }
  return <button onClick={onClick}>show</button>
}

export default ShowCountryButton
