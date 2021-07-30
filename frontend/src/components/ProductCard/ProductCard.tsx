import './productCard.css';
import CarImg from 'assets/images/car-card.png';
import ButtonCatalog from 'components/ButtonCatalog/ButtonCatalog';

export default function ProductCard() {
	return (
		<div className="base-card product-card">
			<div className="card-top-container">
				<img src={CarImg} alt="Car" />
			</div>
			<div className="card-bottom-container">
				<h6>Audi Supra TT</h6>
				<p>
					Conheça nossos carros e dê mais um passo na realização do seu sonho
				</p>
			</div>
			<div className="btn-catalog">
				<ButtonCatalog />
			</div>
		</div>
	);
}
