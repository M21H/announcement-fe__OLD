import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Modal from '../Modals/Base/Modal'
import { useDispatch } from 'react-redux'
import useInput from '../../hooks/useInput'
import { deletePost, updatePost } from '../../redux/actions/posts'
import cn from 'classnames'

import styles from './Post.module.css'
import useToggle from '../../hooks/useToggle'

const Post = ({ _id, desc, title, createdAt }) => {
	const dispatch = useDispatch()

	const [isToggleModal, toggleModal] = useToggle(false)

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
		if (postTitle.value && postDesc.value) {
			const data = { title: postTitle.value, desc: postDesc.value }
			dispatch(updatePost(_id, data))
			toggleModal()
		}
	}

	const handleDelete = () => {
		const confirm = window.confirm('are you sure?')
		if (confirm) {
			dispatch(deletePost(_id))
			toggleModal()
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
					<span style={{ cursor: 'pointer' }} onClick={toggleModal}>
						Edit
					</span>
					{isToggleModal && (
						<Modal titleModal='Edit post'>
							<form className='form' onSubmit={handleSubmit}>
								<div className='formFields'>
									<input
										className={cn({ [styles.error]: title.error })}
										type='text'
										{...postTitle}
										placeholder={title}
									/>
									<textarea className={cn({ [styles.error]: title.error })} {...postDesc} placeholder={desc} />
								</div>

								<div className='formActions'>
									<button className='formButton' type='submit' disabled={!postTitle.value || !postDesc.value}>
										submit
									</button>
									<button
										className='formButton'
										style={{ backgroundColor: 'red' }}
										type='button'
										onClick={handleDelete}>
										delete
									</button>
									<button
										className='formButton'
										type='button'
										onClick={resetFields}
										disabled={!postTitle.value && !postDesc.value}>
										clear field
									</button>
								</div>
							</form>
						</Modal>
					)}
				</div>
			</div>
		</div>
	)
}

export default Post
