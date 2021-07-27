import './home.css';
import { ReactComponent as CarImage } from '../../assets/images/main-car.svg';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';

export default function Home() {
	return (
		<div className="home-container">
			<div className="base-card home-card">
				<div className="home-content-container">
					<div>
						<h1>O carro perfeito para você</h1>
						<p>
							Conheça nossos carros e dê mais um passo na realização do seu
							sonho
						</p>
					</div>
				</div>
				<div className="home-image-container">
					<CarImage />
				</div>
			</div>
			<div>
				<ButtonIcon />
			</div>
		</div>
	);
}
