import ProductCard from 'components/ProductCard/ProductCard';
import SearchCard from 'components/SearchCard/SearchCard';

export default function Catalog() {
	return (
		<div className="container my-4">
			<div className="row">
				<div>
					<SearchCard />
				</div>
				<div className="col-sm-6 col-lg-4 col-xl-4">
					<ProductCard />
				</div>
				<div className="col-sm-6 col-lg-4 col-xl-4">
					<ProductCard />
				</div>
				<div className="col-sm-6 col-lg-4 col-xl-4">
					<ProductCard />
				</div>
				<div className="col-sm-6 col-lg-4 col-xl-4">
					<ProductCard />
				</div>
				<div className="col-sm-6 col-lg-4 col-xl-4">
					<ProductCard />
				</div>
				<div className="col-sm-6 col-lg-4 col-xl-4">
					<ProductCard />
				</div>
			</div>
		</div>
	);
}
