import axios from 'axios'

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api"


const getAll = () => {
  return axios.get(`${baseUrl}/all`).then(resp => resp.data)
}

export default {
  getAll
}
