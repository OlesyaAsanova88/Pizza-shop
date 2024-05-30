import ReactDOM from 'react-dom/client';
import App from '@src/App/App';
import './assets/scss/app.scss';
import { Provider } from 'react-redux';

import { store } from '@src/redux/store';

console.log(store);

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
		,
	</Provider>,
);
