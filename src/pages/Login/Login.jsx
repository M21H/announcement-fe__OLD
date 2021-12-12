import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import { login } from '../../redux/actions/auth'

import styles from './Styles.module.css'

const Login = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const [username] = useInput('', true)
	const [password] = useInput('', true)

	const handleSubmit = (e) => {
		e.preventDefault()
		const data = { username: username.value, password: password.value }
		dispatch(login(data)).then(() => {
			history.push('/posts')
		})
	}

	return (
		<div className={styles.login}>
			<form className={styles.login__form} onSubmit={handleSubmit}>
				<h3 className='header__text'>Login</h3>
				<input
					className={styles.login__formInput}
					style={{ border: username.error && '2px solid red' }}
					type='text'
					placeholder='username'
					{...username}
					tabIndex={1}
				/>
				{username.error && <span className={styles.error}>{username.error}</span>}

				<input
					className={styles.login__formInput}
					style={{ border: password.error && '2px solid red' }}
					type='password'
					placeholder='password'
					{...password}
					tabIndex={2}
				/>
				{password.error && <span className={styles.error}>{password.error}</span>}

				<div className={styles.login__actions}>
					<Link to='/auth/register' tabIndex={4}>
						Go to registration
					</Link>

					<button className='button' type='submit' disabled={!username.value || !password.value} tabIndex={3}>
						Login
					</button>
				</div>
			</form>
		</div>
	)
}

export default Login
