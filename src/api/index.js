import axios from 'axios'
import TokenService from '../services/storage.service'

const config = {
	baseURL: process.env.REACT_APP_BASE_URL,
	'Access-Control-Allow-Origin': '*',
}

// export const client = axios.create({
// 	baseURL: 'http://localhost:3001/api',
// 	headers: {
// 		Authorization: `Bearer ${localStorage.getItem('token')}`,
// 		'Content-Type': 'application/json;charset=UTF-8',
// 		'Access-Control-Allow-Origin': '*',
// 	},
// })

export const client = axios.create(config)

client.interceptors.request.use((config) => {
	const token = TokenService.getAuthToken()
	if (token) {
		config.headers['Authorization'] = `Bearer ${token}`
	} else {
		delete config.headers['Authorization']
	}
	return config
})

client.interceptors.response.use((res) => {
	if (res.status === 200) {
		const { token } = res.data
		if (token) {
			console.log(token)
			TokenService.setAuthToken(token)
		} else {
			console.log('from interceptors.response: no token')
		}
	} else {
		console.log('from interceptors.response: somethings went wrong ')
	}

	return res
})
