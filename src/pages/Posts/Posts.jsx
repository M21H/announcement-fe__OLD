import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/actions/posts'
import Post from '../../components/Post/Post'

import styles from './Posts.module.css'
import NavBar from '../../components/Navbar/Navbar'
import { useHistory } from 'react-router'
import NewPostModal from '../../components/Modals/NewPost/NewPost.modal'

const Posts = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const { items } = useSelector(({ posts }) => posts)

	const [isModalOpened, setIsModalOpened] = useState(false)

	useEffect(() => {
		dispatch(getPosts())
	}, [dispatch])

	const handleBack = () => {
		history.goBack()
	}

	const toggleModal = () => {
		setIsModalOpened(!isModalOpened)
	}

	return (
		<>
			<NavBar />
			<center>
				<button style={{ margin: 10 }} type='button' onClick={toggleModal}>
					create post
				</button>
			</center>
			{isModalOpened && <NewPostModal onClose={toggleModal} />}
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
