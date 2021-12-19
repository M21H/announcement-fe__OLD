import React from 'react'
import { useDispatch } from 'react-redux'
import useInput from '../../hooks/useInput'
import { createPost } from '../../redux/actions/posts'
import Modal from '../Modals/Modal'

import styles from './NewPost.module.css'

const NewPost = ({ onClose }) => {
	const dispatch = useDispatch()
	const [author] = useInput('', true)
	const [title] = useInput('', true)
	const [desc] = useInput('', true)

	const handleSubmit = (e) => {
		e.preventDefault()

		if (author.value && title.value && desc.value) {
			const data = { author: author.value, title: title.value, desc: desc.value }

			dispatch(createPost(data))
			onClose()
		}
	}

	return (
		<Modal titleModal='Create new post' onClose={onClose}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<input type='text' {...author} placeholder='author' />
				{author.error && <span className={styles.error}>{author.error}</span>}

				<input type='text' {...title} placeholder='title' />
				{title.error && <span className={styles.error}>{title.error}</span>}

				<textarea {...desc} placeholder='description' />
				{desc.error && <span className={styles.error}>{desc.error}</span>}

				<button type='submit' disabled={!author.value || !title.value || !desc.value}>
					submit
				</button>
			</form>
		</Modal>
	)
}

export default NewPost
