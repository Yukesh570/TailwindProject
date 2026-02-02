import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Import your global Tailwind styles
import App from './App.tsx' // Importing App component
import { Provider } from "react-redux";
import { store } from "./app/store.ts"; // Importing your Redux store

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)