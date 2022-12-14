import "./NotificationModal.css";

function NotificationModal({ children, shown, close, handleConfirm }) {
	return shown ? (
		<div className="notification-modal ">
			<div
				className="modal__overlay"
				onClick={() => {
					close();
				}}
			/>
			<div
				className="modal__content"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<h2 className="modal__title">Confirm</h2>
				<p className="modal__text">{children}</p>
				<div className="modal__buttons">
					<button
						type="button"
						className="modal__button modal__button--cancel"
						onClick={() => {
							close();
						}}
					>
						いいえ
					</button>
					<button
						type="button"
						className="modal__button modal__button--yes"
						onClick={() => handleConfirm()}
					>
						はい、削除します！
					</button>
				</div>
			</div>
		</div>
	) : null;
}

export default NotificationModal;
