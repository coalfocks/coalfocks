import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { HelloWorld } from './components/hello-world';

const root = ReactDOM.createRoot(document.getElementById('react-root') as HTMLElement);
root.render(
	<StrictMode>
		<HelloWorld />
	</StrictMode>,
);
