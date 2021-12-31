import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import { logout } from '../../redux/actions/auth'
import { getPosts } from '../../redux/actions/posts'

import styles from './Navbar.module.css'

const NavBar = () => {
	const dispatch = useDispatch()
	const { username } = useSelector(({ auth }) => auth)
	const [searchByTitle, setSearchByTitle] = useInput('', false)

	const handleLOgout = () => {
		dispatch(logout())
	}

	const handleSearch = () => {
		dispatch(getPosts(searchByTitle.value))
		setSearchByTitle('')
	}

	return (
		<>
			<header className={styles.header}>
				<div className='container'>
					<NavLink className={styles.header__logoLink} to='/posts'>
						<p>Announcement</p>
					</NavLink>
					<div className='header__search'>
						<input className={styles.header__input} type='text' {...searchByTitle} placeholder='search by title' />
						<button className='button' type='button' onClick={handleSearch}>
							search
						</button>
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
