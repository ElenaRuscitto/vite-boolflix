import {reactive} from 'vue';

export const store = reactive ( {
  apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=4f4b297cb7d657cef5006f738fd4ef31&language=it",
  // array per la ricerca dei film
  toMovies: [],
  // array per la ricerca delle serie
  toSeries: [],
    // per la ricerca input
    queryParams: {
      query: '',
      
    },


})