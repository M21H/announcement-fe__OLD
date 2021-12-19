import React, { forwardRef, useImperativeHandle } from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import closeIcon from '../../assets/icons/close.png'
import Portal from '../Portal/Portal'

import styles from './Modal.module.css'

const Modal = forwardRef(({ titleModal, children }, ref) => {
	const [display, setDisplay] = useState(true)

	useImperativeHandle(ref, () => ({
		handleOpen: () => open(),
		handleClose: () => close(),
	}))

	const open = () => {
		setDisplay(true)
	}

	const close = () => {
		setDisplay(false)
	}

	if (display) {
		return ReactDOM.createPortal(
			<>
				<div className={styles.overlay} onClick={close} />
				<div className={styles.modal}>
					<div>
						<img className={styles.closeButton} src={closeIcon} onClick={close} alt='close' />
						<h3>
							<center>{titleModal}</center>
						</h3>
					</div>
					{children}
				</div>
			</>,
			document.getElementById('modal-root')
		)
	}
	return null
})

export default Modal
