import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { AppProviders } from './contexts/AppProviders.tsx' 


createRoot(document.getElementById('root')!).render(
<AppProviders>
<App />
</AppProviders>
 

)
