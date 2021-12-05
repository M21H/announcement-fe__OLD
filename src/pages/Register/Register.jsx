import React, { useRef } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import { register } from '../../redux/actions/auth'

const Register = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const username = useInput('', true)
	const password = useInput('', true)
	const confirmPassword = useInput('', true)

	const { isAuth } = useSelector(({ auth }) => auth)

	const handleSubmit = (e) => {
		e.preventDefault()

		if (password.value !== confirmPassword.value) {
			password.reset('')
			confirmPassword.reset('')
			return alert('passwords not match')
		}

		const data = { username: username.value, password: password.value }
		dispatch(register(data))

		if (isAuth) {
			history.push('/posts')
			username.reset('')
			password.reset('')
      confirmPassword.reset('')
		}
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
				<h3>Registration</h3>
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
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Control
						type='password'
						placeholder='Confirm a password'
						onChange={confirmPassword.onChange}
						onBlur={confirmPassword.onBlur}
						value={confirmPassword.value}
					/>
					{confirmPassword.error && <Form.Text className='text-danger'>{confirmPassword.error}</Form.Text>}
					<Link to='/auth/login'>Go to login</Link>
				</Form.Group>

				<Button variant='primary' type='submit' disabled={!username.value || !password.value || !confirmPassword.value}>
					Register
				</Button>
			</Container>
		</Form>
	)
}

export default Register
