import React, {ReactNode} from 'react';
import {Zoom, Modal} from '@material-ui/core';
import styles from './MaterialModal.scss';

export interface IModal {
	isOpen: boolean;
	setIsModalOpen: (isModalOpen: boolean) => void;
	children: ReactNode;
	isMobile?: boolean;
	noCloseIcon?: boolean;
}

const MaterialModal = ({
	children,
	isOpen,
	setIsModalOpen,
	isMobile,
	noCloseIcon,
}: IModal) => (
	<div>
		<Modal
			open={isOpen}
			onClose={() => setIsModalOpen(false)}
			style={{overflowY: 'auto', outline: 'none', zIndex: isMobile ? 9 : 10}}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Zoom in={isOpen}>
				<div className={styles.modalOverflow}>
					<div className={styles.modalFlex}>
						<div
							// добавил роль и пока отключил параметры для доступности
							className={styles.modalBackground}
							role="button"
							tabIndex={-1}
							onClick={() => setIsModalOpen(false)}
							aria-label="Закрыть модальное окно"
							aria-hidden
						/>
						<div className={styles.modal}>
							{!noCloseIcon && (
								<div
									className={styles.close}
									onClick={() => setIsModalOpen(false)}
									role="button"
									aria-hidden
								>
									×
								</div>
							)}
							{children}
						</div>
					</div>
				</div>
			</Zoom>
		</Modal>
	</div>
);

export default MaterialModal;
