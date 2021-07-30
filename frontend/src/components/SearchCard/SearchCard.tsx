import './searchCard.css';

export default function SearchCard() {
	return (
		<div className="base-card search-card">
			<div className="btn-search">
				<input
					type="text"
					className="form-control"
					placeholder="Digite sua busca"
				/>
				<div className="btn-icon-container search-text">
					<h6>BUSCAR</h6>
				</div>
			</div>
		</div>
	);
}
