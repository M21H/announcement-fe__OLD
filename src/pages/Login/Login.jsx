import React, { useRef } from 'react'
import { Form, Button, Container, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import { login } from '../../redux/actions/auth'

const Login = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const [username, setUsername, setUsernameError] = useInput('', true)
	const [password, setPassword, setPasswordError] = useInput('', true)

	const handleSubmit = async (e) => {
		e.preventDefault()
		const data = { username: username.value, password: password.value }
		await dispatch(login(data))
		history.push('/')
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Container
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					height: '100vh',
				}}>
				<h3>Login</h3>
				<Form.Group className='mb-3'>
					<Form.Control type='text' placeholder='username' {...username} />
					{username.error && <Form.Text className='text-danger'>{username.error}</Form.Text>}
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Control type='password' placeholder='Password' {...password} />
					{password.error && <Form.Text className='text-danger'>{password.error}</Form.Text>}
				</Form.Group>

				<Container style={{ display: 'flex', justifyContent: 'space-between', width: 300 }}>
					<Link to='/auth/register'>Go to registration</Link>
					<Button variant='primary' type='submit' disabled={!username.value || !password.value}>
						Login
					</Button>
				</Container>
			</Container>
		</Form>
	)
}

export default Login
