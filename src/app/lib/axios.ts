import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'production' 
  ? 'https://spot-sales-prediction-production.up.railway.app'
  : 'http://localhost:8000'

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
