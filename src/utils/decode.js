import jwtDecode from 'jwt-decode'

export const decodedUser = (token) => {
  const user = jwtDecode(token)
  return user
}