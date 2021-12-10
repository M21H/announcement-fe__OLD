import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import { login } from '../../redux/actions/auth'

const Login = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const [username] = useInput('', true)
	const [password] = useInput('', true)

	const handleSubmit = (e) => {
		e.preventDefault()
		const data = { username: username.value, password: password.value }
		dispatch(login(data)).then(() => {
			history.push('/')
		})
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
