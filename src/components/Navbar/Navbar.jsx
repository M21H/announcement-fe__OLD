import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../../redux/actions/auth'

import styles from './Navbar.module.css'

const NavBar = () => {
	const dispatch = useDispatch()
	const { username } = useSelector(({ auth }) => auth)

	const handleLOgout = () => {
		dispatch(logout())
	}

	return (
		<>
			<header className={styles.header}>
				<div className='container'>
					<NavLink className={styles.header__logoLink} to='/posts'>
						<p>Announcement</p>
					</NavLink>
					<div className='header__search'>
						<input className={styles.header__input} type='text' placeholder='search by title' />
						<button type='button'>search</button>
					</div>
					<div className='header__aboutUser'>
						<div className={styles.aboutUser__username} onClick={handleLOgout}>
							{username}
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default NavBar
