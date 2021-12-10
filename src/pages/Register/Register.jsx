import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import { register } from '../../redux/actions/auth'
import { useHistory } from 'react-router'

const Register = () => {
	const dispatch = useDispatch()
	const history = useHistory()
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
			dispatch(register(data)).then(() => {
				history.push('/')
			})
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
