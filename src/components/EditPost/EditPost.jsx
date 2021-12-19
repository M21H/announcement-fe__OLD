import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useInput from '../../hooks/useInput'
import { deletePost, updatePost } from '../../redux/actions/posts'
import Modal from '../Modals/Modal'

import styles from './EditPost.module.css'

const EditPost = ({ _id, title, desc, onClose }) => {
	const dispatch = useDispatch()
	const [postTitle, setPostTitle] = useInput(title, false)
	const [postDesc, setPostDesc] = useInput(desc, false)

	useEffect(() => {
		setPostTitle(title)
		setPostDesc(desc)
		return () => {
			setPostTitle('')
			setPostDesc('')
		}
	}, [title, desc])

	const resetFields = () => {
		setPostTitle('')
		setPostDesc('')
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (title.value && desc.value) {
			const data = { title: postTitle.value, desc: postDesc.value }

			dispatch(updatePost(_id, data))
			onClose()
		}
	}

	const handleDelete = () => {
		const confirm = window.confirm('are you sure')

		if (confirm) {
			dispatch(deletePost(_id))
			onClose()
		}
	}
	return (
		<Modal titleModal='Edit post' onClose={onClose}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<input type='text' {...postTitle} placeholder={title || 'title'} />
				<textarea {...postDesc} placeholder={desc || 'description'} />

				<button type='submit'>submit</button>
				<button style={{ backgroundColor: 'red' }} type='button' onClick={handleDelete}>
					delete post
				</button>
				<button type='button' onClick={resetFields}>
					clear field
				</button>
			</form>
		</Modal>
	)
}

export default EditPost
