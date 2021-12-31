import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts, postActions } from '../../redux/actions/posts'
import TokenService from '../../services/storage.service'
import cn from 'classnames'

import left from '../../assets/icons/arrow-left.png'

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

	useEffect(() => {
		setPortionNumber(Math.ceil(currentPage / portionSize))
	}, [currentPage])

	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
	const rigthPortionPageNumber = portionNumber * portionSize

	const handlePageChanged = (page) => {
		if (currentPage !== page) {
			TokenService.setPaginationCurrentPostPage(page)
			dispatch(postActions.setCurrentPage(page))
			dispatch(getPosts(page, pageSize))
		}
	}

	return (
		<div className={styles.container}>
			<ul className={styles.list}>
				<button className='button' disabled={portionNumber <= 1} onClick={() => setPortionNumber(portionNumber - 1)}>
					prev
				</button>

				{pages
					.filter((page) => page >= leftPortionPageNumber && page <= rigthPortionPageNumber)
					.map((page, index) => (
						<li
							className={cn({ [styles.active]: currentPage === page }, styles.pageNum)}
							key={index}
							style={{ padding: '0 5px', cursor: 'pointer' }}
							onClick={() => handlePageChanged(page)}>
							{page}
						</li>
					))}

				<button
					className='button'
					disabled={portionCount <= portionNumber}
					onClick={() => setPortionNumber(portionNumber + 1)}>
					next
				</button>
			</ul>
		</div>
	)
}

export default Pagination
