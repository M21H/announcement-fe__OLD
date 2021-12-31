import { client } from '.'

class ApiPost {
	async fetchPosts(page = 1, size = 3) {
		const { data } = await client.get(`/posts?page=${page}&size=${size}`)
		return data
	}

	async fetchPost(id) {
		const { data } = await client.get(`/posts/${id}`)
		return data
	}

	async updatePost(id, postData) {
		const { data } = await client.put(`/posts/${id}`, postData)
		return data
	}

	async createPost(author, title, desc) {
		const { data } = await client.post('/posts', { author, title, desc })
		return data
	}

	async deletePost(id) {
		const { data } = await client.delete(`/posts/${id}`)
		return data
	}
}

export default new ApiPost()
