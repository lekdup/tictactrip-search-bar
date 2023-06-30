import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api.comparatrip.eu/cities/autocomplete/?q='
})

// export const getPosts = async () => {
//   const response = await api.get('')
// }
