import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/actions/posts'

import Post from '../../components/Post/Post'
import NavBar from '../../components/Navbar/Navbar'
import NewPost from '../../components/NewPost/NewPost'

import styles from './Posts.module.css'

const Posts = () => {
	const dispatch = useDispatch()
	const { items } = useSelector(({ posts }) => posts)

	useEffect(() => {
		dispatch(getPosts())
	}, [dispatch])

	return (
		<>
			<NavBar />
			<NewPost />
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
