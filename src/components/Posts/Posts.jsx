import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/actions/posts'
import Post from './Post/Post'

const Posts = () => {
	const dispatch = useDispatch()
	const { items } = useSelector(({ posts }) => posts)

	useEffect(() => {
		dispatch(getPosts())
	}, [dispatch])

	return (
		<>
			<h1>Posts</h1>
			{items && items.map((post) => <Post key={post._id} {...post} />)}
		</>
	)
}

export default Posts
