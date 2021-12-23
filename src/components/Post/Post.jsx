import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Modal from '../Modals/Modal'
import { useDispatch } from 'react-redux'
import useInput from '../../hooks/useInput'
import { deletePost, updatePost } from '../../redux/actions/posts'

import styles from './Post.module.css'
import useToggle from '../../hooks/useToggle'

const Post = ({ _id, desc, title, createdAt }) => {
	const dispatch = useDispatch()
	const [isToggle, toggle] = useToggle(false)
	const [postTitle, setPostTitle] = useInput(title, false)
	const [postDesc, setPostDesc] = useInput(desc, false)

	useEffect(() => {
		setPostTitle(title)
		setPostDesc(desc)
	}, [title, desc])

	const resetFields = () => {
		setPostTitle('')
		setPostDesc('')
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const data = { title: postTitle.value, desc: postDesc.value }
		dispatch(updatePost(_id, data))
		toggle()
	}

	const handleDelete = () => {
		const confirm = window.confirm('are you sure?')
		if (confirm) {
			dispatch(deletePost(_id))
			toggle()
		}
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
					<span style={{ cursor: 'pointer' }} onClick={toggle}>
						Edit
					</span>
					{isToggle && (
						<Modal titleModal='Edit post'>
							<form className={styles.form} onSubmit={handleSubmit}>
								<div className={styles.form__inputs}>
									<input type='text' {...postTitle} placeholder={title} />
									<textarea {...postDesc} placeholder={desc} />
								</div>

								<button type='submit'>submit</button>
								<button style={{ backgroundColor: 'red' }} type='button' onClick={handleDelete}>
									delete post
								</button>
								<button type='button' onClick={resetFields}>
									clear field
								</button>
							</form>
						</Modal>
					)}
				</div>
			</div>
		</div>
	)
}

export default Post
