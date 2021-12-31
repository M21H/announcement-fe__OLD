import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import useInput from '../../hooks/useInput'
import useToggle from '../../hooks/useToggle'
import { createPost } from '../../redux/actions/posts'
import Modal from '../Modals/Base/Modal'
import cn from 'classnames'

import styles from './NewPost.module.css'

const NewPost = () => {
	const dispatch = useDispatch()
	const { username } = useSelector(({ auth }) => auth)
	const [isToggle, toggle] = useToggle(false)

	const [author, setAuthor] = useInput('', true)
	const [title, setTitle] = useInput('', true)
	const [desc, setDesc] = useInput('', true)

	const handleSubmit = (e) => {
		e.preventDefault()

		dispatch(createPost(author.value, title.value, desc.value))
		setAuthor('')
		setTitle('')
		setDesc('')
		toggle()
	}

	return (
		<>
			<center>
				<button className='button' style={{ margin: 10 }} type='button' onClick={toggle}>
					create post
				</button>
			</center>
			{isToggle && (
				<Modal titleModal='Create new post'>
					<form className='form' onSubmit={handleSubmit}>
						<div className='formFields'>
							<input
								className={cn({ [styles.error]: author.error })}
								type='text'
								{...author}
								placeholder='author'
								list='authors'
							/>
							<datalist id='authors'>
								<option value={username} />
							</datalist>

							<input className={cn({ [styles.error]: title.error })} type='text' {...title} placeholder='title' />

							<textarea className={cn({ [styles.error]: desc.error })} {...desc} placeholder='description' />
						</div>
						<div className='formActions'>
							<button className='formButton' type='submit' disabled={!author.value || !title.value || !desc.value}>
								create
							</button>
						</div>
					</form>
				</Modal>
			)}
		</>
	)
}

export default NewPost
