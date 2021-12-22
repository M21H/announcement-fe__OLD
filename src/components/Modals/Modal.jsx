import React, { useState } from 'react'
import closeIcon from '../../assets/icons/close.png'
import Portal from '../Portal/Portal'

import styles from './Modal.module.css'

const Modal = ({ titleModal, children }) => {
	const [display, setDisplay] = useState(true)

	const handleClose = () => {
		setDisplay(false)
	}

	return display ? (
		<Portal>
			<div className={styles.overlay} onClick={handleClose} />
			<div className={styles.modal}>
				<div className={styles.modalTop}>
					<img className={styles.modalTop__closeButton} src={closeIcon} onClick={handleClose} alt='close' />
					<div className={styles.modalTop__title}>{titleModal}</div>
				</div>
				{children}
			</div>
		</Portal>
	) : null
}

export default Modal
