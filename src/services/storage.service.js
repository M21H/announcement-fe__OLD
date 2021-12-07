class TokenService {
	getAuthToken() {
		return localStorage.getItem('authToken')
	}
	setAuthToken(token) {
		localStorage.setItem('authToken', token)
	}
	removeAuthToken() {
		localStorage.removeItem('authToken')
	}
}

export default new TokenService()
