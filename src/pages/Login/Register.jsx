import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import { register } from '../../redux/actions/auth'
import { useHistory } from 'react-router'

import styles from './Styles.module.css'

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
		<>
			<div className={styles.register}>
				<form className={styles.register__form} onSubmit={handleSubmit}>
					<h3 className='header__text'>Register</h3>
					<input
						className={styles.register__formInput}
						style={{ border: username.error && '2px solid red' }}
						type='text'
						placeholder='username'
						{...username}
						tabIndex={1}
					/>
					{username.error && <span className={styles.error}>{username.error}</span>}

					<input
						className={styles.register__formInput}
						style={{ border: password.error && '2px solid red' }}
						type='password'
						placeholder='password'
						{...password}
						tabIndex={2}
					/>
					{password.error && <span className={styles.error}>{password.error}</span>}

					<input
						className={styles.register__formInput}
						style={{ border: confirmPassword.error && '2px solid red' }}
						type='password'
						placeholder='confirm password'
						{...confirmPassword}
						tabIndex={3}
					/>
					{confirmPassword.error && <span className={styles.error}>{confirmPassword.error}</span>}

					<div className={styles.register__actions}>
						<Link to='/auth/login' tabIndex={5}>
							Go to login
						</Link>

						<button className='button' type='submit' disabled={!username.value || !password.value} tabIndex={4}>
							Register
						</button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Register
