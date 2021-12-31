import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const AboutPost = () => {
	const { id } = useParams()

	const currentPost = useSelector(({ posts }) => posts.items.filter((item) => item._id === id))
	console.log(currentPost)

	return (
		<div>
			<h1>about post {id}</h1>
		</div>
	)
}

export default AboutPost
