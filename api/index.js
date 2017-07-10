import axios from 'axios';

const apiKey = '0240b5b76e694a97b5bfa18f38c7c2bc';

axios
  .interceptors
  .request
  .use(request => {
    console.log('Starting Request', request)
    return request
  })

axios
  .interceptors
  .response
  .use(response => {
    console.log('Response:', response)
    return response
  })

export function getNews() {
  return axios
    .get('https://newsapi.org/v1/sources?language=en')
    .then((result) => result.data.sources);
}

export function getListNews(source) {
  return axios
    .get(`https://newsapi.org/v1/articles?apiKey=${apiKey}&source=${source}`)
    .then((result) => result.data.articles);
}