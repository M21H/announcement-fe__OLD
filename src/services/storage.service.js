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

	setPaginationCurrentPostPage(page) {
		localStorage.setItem('currentPostPage', page)
	}
	getPaginationCurrentPostPage() {
		return localStorage.getItem('currentPostPage')
	}
}

export default new TokenService()
