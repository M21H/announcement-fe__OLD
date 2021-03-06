import { client } from '.'

class ApiAuth {
	async login(loginData) {
		const { data } = await client.put('/auth/login', loginData)
		return data
	}

	async register(registerData) {
		const { data } = await client.post('/auth/register', registerData)
		return data
	}
}

export default new ApiAuth()
