import React from 'react'
import Portal from '../../Portal/Portal'
import closeIcon from '../../../assets/icons/close.png'

import useInput from '../../../hooks/useInput'
import { useEffect } from 'react'
import { createPost, updatePost } from '../../../redux/actions/posts'
import { useDispatch } from 'react-redux'

import styles from './NewPost.modal.module.css'

const NewPost = ({ onClose }) => {
	const dispatch = useDispatch()
	const [author, setAuthor] = useInput('', true)
	const [title, setTitle] = useInput('', true)
	const [desc, setDesc] = useInput('', true)

	useEffect(() => {
		return () => {
			setTitle('')
			setDesc('')
			setAuthor('')
		}
	}, [])

	const handleSubmit = (e) => {
		e.preventDefault()

		if (author.value && title.value && desc.value) {
			const data = { author: author.value, title: title.value, desc: desc.value }

			dispatch(createPost(data))
			onClose()
		}
	}

	return (
		<Portal>
			<div className={styles.overlay} onClick={onClose} />
			<div className={styles.modal}>
				<div>
					<img className={styles.closeButton} src={closeIcon} onClick={onClose} alt='close' />
					<h3>
						<center>Create new post</center>
					</h3>
				</div>

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
			</div>
		</Portal>
	)
}

export default NewPost
