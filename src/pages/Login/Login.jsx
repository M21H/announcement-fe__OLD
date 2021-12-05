import React, { useRef } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import { login } from '../../redux/actions/auth'

const Login = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const username = useInput('', true)
	const password = useInput('', true)

	const handleSubmit = (e) => {
		e.preventDefault()
		const data = { username: username.value, password: password.value }
		dispatch(login(data)).then(() => {
			username.reset('')
			password.reset('')
			history.push('/posts')
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
					<Form.Control
						type='text'
						placeholder='username'
						onChange={username.onChange}
						onBlur={username.onBlur}
						value={username.value}
					/>
					{username.error && <Form.Text className='text-danger'>{username.error}</Form.Text>}
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Control
						type='password'
						placeholder='Password'
						onChange={password.onChange}
						onBlur={password.onBlur}
						value={password.value}
					/>
					{password.error && <Form.Text className='text-danger'>{password.error}</Form.Text>}
					<Link to='/auth/register'>Go to registration</Link>
				</Form.Group>

				<Button variant='primary' type='submit' disabled={!username.value || !password.value}>
					Login
				</Button>
			</Container>
		</Form>
	)
}

export default Login
