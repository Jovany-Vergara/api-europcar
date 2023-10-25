const axios = require('axios')

const API = "https://www.europcar.com.mx"

const fetchApi = axios.create({
  baseURL: API,
})

module.exports = {
  fetchApi,
}
