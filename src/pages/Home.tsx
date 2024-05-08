import ProductsPizza from '@components/ProductsPizza';
import { FC } from 'react';

interface Props {
	searchValue: string;
}

const Home: FC<Props> = ({ searchValue }) => {
	return <ProductsPizza searchValue={searchValue} />;
};

export default Home;
