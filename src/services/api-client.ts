import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '6b5b098d70584c4bbbcc02452039990b'
  }
})