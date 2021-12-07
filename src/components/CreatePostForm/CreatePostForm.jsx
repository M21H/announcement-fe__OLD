import React from 'react'
import useInput from '../../hooks/useInput'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { createPost } from '../../redux/actions/posts'

const CreatePostForm = () => {
	const dispatch = useDispatch()
	const author = useInput('', true)
	const title = useInput('', true)
	const desc = useInput('', true)

	const handleSubmit = (e) => {
		e.preventDefault()

		if (!author.value || !title.value || !desc.value) {
			author.setError('Field is empty')
			title.setError('Field is empty')
			desc.setError('Field is empty')
		}

		const data = { author: author.value, title: title.value, desc: desc.value }

		dispatch(createPost(data))
		author.reset('')
		title.reset('')
		desc.reset('')
	}

	return (
		<Form style={{ width: 400 }}>
			<Form.Group className='mb-3'>
				<Form.Control type='text' placeholder='author' onChange={author.onChange} onBlur={author.onBlur} />
				{author.error && <Form.Text className='text-danger'>{author.error}</Form.Text>}
			</Form.Group>

			<Form.Group className='mb-3'>
				<Form.Control type='text' placeholder='title' onChange={title.onChange} onBlur={title.onBlur} />
				{title.error && <Form.Text className='text-danger'>{title.error}</Form.Text>}
			</Form.Group>

			<Form.Group className='mb-3'>
				<Form.Control type='text' placeholder='description' onChange={desc.onChange} onBlur={desc.onBlur} />
				{desc.error && <Form.Text className='text-danger'>{desc.error}</Form.Text>}
			</Form.Group>

			<Button variant='primary' type='submit' onClick={handleSubmit}>
				Submit
			</Button>
		</Form>
	)
}

export default CreatePostForm
