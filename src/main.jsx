import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers/rootReducer'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: rootReducer
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
