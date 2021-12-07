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
	const [username] = useInput('', true)
	const [password, setPasswordError] = useInput('', true)
	const [confirmPassword, , setConfirmPasswordError] = useInput('', true)

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (password.value !== confirmPassword.value) {
			setPasswordError('not match')
			setConfirmPasswordError('not match')
		} else {
			const data = { username: username.value, password: password.value }
			dispatch(register(data))
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
					<Form.Control type='text' placeholder='username' {...username} />
					{username.error && <Form.Text className='text-danger'>{username.error}</Form.Text>}
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Control type='password' placeholder='password' {...password} />
					{password.error && <Form.Text className='text-danger'>{password.error}</Form.Text>}
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Control type='password' placeholder='Confirm a password' {...confirmPassword} />
					{confirmPassword.error && <Form.Text className='text-danger'>{confirmPassword.error}</Form.Text>}
				</Form.Group>

				<Container style={{ display: 'flex', justifyContent: 'space-between', width: 300 }}>
					<Link to='/auth/login'>Go to registration</Link>
					<Button variant='primary' type='submit' disabled={!username.value || !password.value || !confirmPassword}>
						Register
					</Button>
				</Container>
			</Container>
		</Form>
	)
}

export default Register
