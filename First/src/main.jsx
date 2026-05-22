import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import { CommunityProvider } from './context/CommunityContext';
import { ShopProvider } from './context/ShopContext';
import Router from './routes/Router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CommunityProvider>
        <ShopProvider>
          <RouterProvider router={Router} />
        </ShopProvider>
      </CommunityProvider>
    </AuthProvider>
  </StrictMode>,
)
