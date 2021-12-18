import React from 'react'
import Portal from '../../Portal/Portal'
import CloseIcon from '../../../assets/icons/close.png'

import styles from './EditPost.modal.module.css'

const EditPost = ({ isOpen, onClose }) => {
	if (!isOpen) {
		return null
	}

	return (
		<Portal>
			<div className={styles.overlay} onClick={onClose} />
			<div className={styles.modal}>
				<img className={styles.closeButton} src={CloseIcon} alt='close' onClick={onClose} />
			</div>
		</Portal>
	)
}

export default EditPost
