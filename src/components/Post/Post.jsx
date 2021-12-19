import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Post.module.css'
import EditPost from '../EditPost/EditPost'

const Post = ({ _id, desc, title, createdAt }) => {
	const [isModalOpened, setIsModalOpened] = useState(false)

	const toggleModal = () => {
		setIsModalOpened(!isModalOpened)
	}

	return (
		<div className={styles.container}>
			<div>
				<div className={styles.title}>{title}</div>
				<p className={styles.desc}>{desc}</p>
			</div>

			<div className={styles.details}>
				<span className={styles.postedOn}>Posted on: {createdAt.slice(0, 10)}</span>
				<div className={styles.actions}>
					<NavLink to={`/posts/${_id}`}>About</NavLink>
					<span style={{ cursor: 'pointer' }} onClick={toggleModal}>
						Edit
					</span>
					<EditPost _id={_id} title={title} desc={desc} isOpen={isModalOpened} />
				</div>
			</div>
		</div>
	)
}

export default Post
