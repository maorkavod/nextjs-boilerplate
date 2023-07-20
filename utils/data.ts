import { fetchData } from './api'

/**
 * Fetches data from an API using the fetchData function.
 *  
 * @returns {Promise<any>} - A Promise that resolves to the parsed JSON response data from the API.
 * 
 * if the request fails or the response is not OK, return an empty object
 **/
async function getData () {
  try {
    const data = await fetchData('https://jsonplaceholder.typicode.com/todos')
    return data
  } catch (error) {
    console.error(error)
    return {}
  }
}

export {
    getData
}
