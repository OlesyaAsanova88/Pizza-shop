import ProductsPizza from '@components/ProductsPizza';
import { FC } from 'react';

interface Props {
	searchValue: string;
}

const Home: FC<Props> = () => {
	return <ProductsPizza />;
};

export default Home;
