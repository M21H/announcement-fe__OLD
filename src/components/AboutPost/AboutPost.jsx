import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPost } from '../../redux/actions/posts'
import styles from './AboutPost.module.css'

const AboutPost = () => {
	const dispatch = useDispatch()
	const { id } = useParams()

	const currentPost = useSelector(({ posts }) => posts.items.filter((item) => item._id === id))
	console.log(currentPost)

	// useEffect(() => {
	// 	dispatch(getPost(id))
	// }, [id])

	return (
		<div>
			<h1>about post {id}</h1>
		</div>
	)
}

export default AboutPost
