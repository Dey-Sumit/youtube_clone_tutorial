import axios from 'axios'

// const request = axios.create({
//    baseURL: 'https://www.googleapis.com/youtube/v3',
//    params: {
//       key: process.env.REACT_APP_YT_API_KEY,
//    },
// })

// export default request
console.log(process.env.REACT_APP_YT_API_KEY)
export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
      key: 'AIzaSyA3WLFo6oY5PnF6Pw0LZ75MsnyzWGTmCko',
   },
})
