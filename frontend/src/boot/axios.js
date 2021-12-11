import { boot } from 'quasar/wrappers'
import axios from 'axios'

let api = axios.create({ baseURL: 'http://127.0.0.1:5000/api' })
if (process.env.PROD) {
  api = axios.create({ baseURL: 'http://ijsesemfinal4-env.eba-qqphzbwm.us-west-2.elasticbeanstalk.com/api' })
}

const imdbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDhlY2UxOTI5Nzk5ZTQxZTIyZTFlZGJiMTU5M2Q5NiIsInN1YiI6IjYwYjFmYzdkYTA2NjQ1MDA2ZTc4M2I5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dWbo1Wf3aRUXfctrrwTMfg8aCe09j7Mf-wqOrH2c9ns',
    'Content-Type': 'application/json;charset=utf-8'
  },
  params: {
    api_key: 'a48ece1929799e41e22e1edbb1593d96'
  }
})

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api, imdbApi }
