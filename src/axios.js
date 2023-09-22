import axios from "axios"

const instance = axios.create({
    baseURL : 'http://127.0.0.1:5001/ecommerce-4c692/us-central1/api',
    withCredentials: false,
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
      }
})

export default instance
