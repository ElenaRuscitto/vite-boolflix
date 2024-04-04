import {reactive} from 'vue';

export const store = reactive ( {
  apiUrl: "https://api.themoviedb.org/3/search/",
  apiParams: {
    api_key: '4f4b297cb7d657cef5006f738fd4ef31',
    language: 'it',
    query: ''
  },
  // array per la ricerca dei film
  movie: [],
  // array per la ricerca delle serie
  tv: [],
   

})