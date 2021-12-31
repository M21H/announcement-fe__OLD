import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts, postActions } from '../../redux/actions/posts'
import styles from './Pagination.module.css'

const Pagination = ({ portionSize = 3 }) => {
	const dispatch = useDispatch()
	const { pageSize, totalPagesCount, currentPage } = useSelector(({ posts }) => posts)

	const pagesCount = Math.ceil(totalPagesCount / pageSize)

	const pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	const portionCount = Math.ceil(pagesCount / portionSize)
	const [portionNumber, setPortionNumber] = useState(1)
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
	const rigthPortionPageNumber = portionNumber * portionSize

	const handlePageChanged = (page) => {
		dispatch(postActions.setCurrentPage(page))
		dispatch(getPosts(page, pageSize))
	}

	return (
		<div className={styles.pagination}>
			<ul className={styles.paginationList}>
				{portionNumber > 1 && (
					<button
						onClick={() => {
							setPortionNumber(portionNumber - 1)
						}}>
						prev
					</button>
				)}
				{pages
					.filter((page) => page >= leftPortionPageNumber && page <= rigthPortionPageNumber)
					.map((page, index) => (
						<li
							key={index}
							style={{ padding: '0 5px', cursor: 'pointer' }}
							className={page === currentPage ? styles.selected : ''}
							onClick={() => handlePageChanged(page)}>
							{page}
						</li>
					))}
				{portionCount > portionNumber && (
					<button
						onClick={() => {
							setPortionNumber(portionNumber + 1)
						}}>
						next
					</button>
				)}
			</ul>
		</div>
	)
}

export default Pagination
