import React from 'react'
import closeIcon from '../../assets/icons/close.png'
import Portal from '../Portal/Portal'

import styles from './Modal.module.css'

const Modal = ({ titleModal, children, onClose }) => {
	return (
		<Portal>
			<div className={styles.overlay} onClick={onClose} />
			<div className={styles.modal}>
				<div>
					<img className={styles.closeButton} src={closeIcon} onClick={onClose} alt='close' />
					<h3>
						<center>{titleModal}</center>
					</h3>
				</div>
				{children}
			</div>
		</Portal>
	)
}

export default Modal
