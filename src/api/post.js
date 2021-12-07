import { client } from '.'

class ApiPost {
	async fetchPosts() {
		const { data } = await client.get('posts')
		return data
	}

	async createPost(postData) {
		const { data } = await client.post('posts', postData)
		return data
	}

	async deletePost(id) {
		const res = await client.delete(`posts/:${id}`)
	}
}

export default new ApiPost()
