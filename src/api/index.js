import axios from 'axios'
import TokenService from '../services/storage.service'
import { logout } from '../redux/actions/auth'
import store from '../redux/store'

const config = {
	baseURL: process.env.REACT_APP_BASE_URL,
	'Access-Control-Allow-Origin': '*',
}

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

client.interceptors.response.use(
	(response) => {
		if (response.status === 200 || 201) {
			const { token } = response.data
			if (token) {
				TokenService.setAuthToken(token)
			}
		}
		return response
	},
	(error) => {
		if (error.response.status === 401) {
			store.dispatch(logout())
		}
		return Promise.reject(error)
	}
)
