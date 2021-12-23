import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/actions/posts'

import Post from '../../components/Post/Post'
import NewPost from '../../components/NewPost/NewPost'
import NavBar from '../../components/Navbar/Navbar'

import styles from './Posts.module.css'

const Posts = () => {
	const { items } = useSelector(({ posts }) => posts)

	return (
		<>
			<NavBar />
			<NewPost />
			{items.length > 0 ? (
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
