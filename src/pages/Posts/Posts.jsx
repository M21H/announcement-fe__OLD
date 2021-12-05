import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/actions/posts'
import Post from '../../components/Post/Post'

import styles from './Posts.module.css'
import { Spinner } from 'react-bootstrap'
import CreatePostForm from '../../components/CreatePostForm/CreatePostForm'
import NavBar from '../../components/Navbar/Navbar'

const Posts = () => {
	const dispatch = useDispatch()
	const { items } = useSelector(({ posts }) => posts)

	useEffect(() => {
		dispatch(getPosts())
	}, [dispatch])

	return (
		<>
			<NavBar />
			{items ? (
				<>
					<CreatePostForm />
					<div className={styles.container}>
						{items.map((post) => (
							<Post key={post._id} {...post} />
						))}
					</div>
				</>
			) : (
				<div className={styles.spinner}>
					<Spinner animation='border' variant='primary' role='status'>
						<span className='visually-hidden'>Loading...</span>
					</Spinner>
				</div>
			)}
		</>
	)
}

export default Posts
