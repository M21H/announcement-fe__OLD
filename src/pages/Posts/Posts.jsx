import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/actions/posts'

import Post from '../../components/Post/Post'
import NewPost from '../../components/NewPost/NewPost'
import NavBar from '../../components/Navbar/Navbar'

import styles from './Posts.module.css'
import Pagination from '../../components/Pagination/Pagination'

const Posts = () => {
	const dispatch = useDispatch()
	const { items, pageSize, currentPage, isLoading } = useSelector(({ posts }) => posts)

	useEffect(() => {
		dispatch(getPosts(currentPage, pageSize))
	}, [])

	return (
		<>
			<NavBar />
			<NewPost />

			{isLoading ? (
				<>
					<div className={styles.spinner}>Loading...</div>
				</>
			) : (
				<div className={styles.container}>
					{items.map((post) => (
						<Post key={post._id} {...post} />
					))}
				</div>
			)}
			{isLoading || <Pagination />}
		</>
	)
}

export default Posts
