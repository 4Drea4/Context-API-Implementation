import './index.css'
import { AppProviders } from './contexts/AppProviders.tsx' 
import App from './App'
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
<AppProviders>
<App />
</AppProviders>
 

)
