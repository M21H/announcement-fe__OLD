import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3001/api'
})

class Api {
  async fetchPosts() {
    try {
      const { data } = await instance.get('/post')
      return data
    } catch (e) {
      console.log(e)
    }
  }
}

export default new Api()
