import React, { useCallback, useEffect, useState } from 'react'
import closeIcon from '../../../assets/icons/close.png'
import Portal from '../../Portal/Portal'

import styles from './Confirm.module.css'

const Confirm = ({ titleModal, onClose }) => {
	const [display, setDisplay] = useState(true)

	const handleClose = useCallback(() => {
		setDisplay(false)
	}, [])

	return display ? (
		<Portal>
			<div className={styles.overlay} />
			<div className={styles.modal}>
				<div className={styles.modalTop}>
					<div className={styles.modalTop__title}>{titleModal}</div>
				</div>
				<center>
					<button onClick={handleClose} onClick={onClose}>
						YES
					</button>
					<button onClick={handleClose} onClick={onClose}>
						NO
					</button>
				</center>
			</div>
		</Portal>
	) : null
}

export default Confirm
