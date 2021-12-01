import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*'
  }
})

class Api {
  async fetchPosts() {
    const { data } = await instance.get('/post')
    console.log("data GET")
    return data
  }

  async newPost(data) {
    console.log("async createPost", data)
    const res = await instance.post('/post', data)
    console.log(res)
    return res
  }

  async deletePost(id) {
    const res = await instance.delete(`/post/:${id}`)
  }
}

export default new Api()
