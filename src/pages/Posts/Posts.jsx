import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/actions/posts'
import Post from '../../components/Post/Post'

import styles from './Posts.module.css'
import CreatePostForm from '../../components/CreatePostForm/CreatePostForm'
import NavBar from '../../components/Navbar/Navbar'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

const Posts = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const { items } = useSelector(({ posts }) => posts)

	useEffect(() => {
		dispatch(getPosts())
	}, [dispatch])

	const handleBack = () => {
		history.goBack()
	}

	return (
		<>
			<NavBar />
			{items ? (
				<>
					<div className={styles.container}>
						{items.map((post) => (
							<Post key={post._id} {...post} />
						))}
					</div>
				</>
			) : (
				<div className={styles.spinner}>Loading...</div>
			)}
		</>
	)
}

export default Posts
