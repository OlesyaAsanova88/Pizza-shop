import ReactDOM from 'react-dom/client';
import App from '@src/App/App';
import './assets/scss/app.scss';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
);
