import React from 'react'
import useInput from '../../hooks/useInput'
import { createPost } from '../../redux/actions/posts'

const Form = () => {
	const author = useInput('', true)
	const title = useInput('', true)
	const desc = useInput('', true)

	const handleSubmit = () => {
		console.log('submit')
		const data = { author: author.value, title: title.value, desc: desc.value }
		createPost(data)
	}

	return (
		<div>
			<textarea {...author} placeholder='author' />
			{author.error && <span style={{ color: 'red' }}>{author.error}</span>}
			<textarea {...title} placeholder='title' />
			{title.error && <span style={{ color: 'red' }}>{title.error}</span>}
			<textarea {...desc} placeholder='desc' />
			{desc.error && <span style={{ color: 'red' }}>{desc.error}</span>}
			<button type='button' onClick={handleSubmit}>
				submit
			</button>
		</div>
	)
}

export default Form
