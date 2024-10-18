import { createRoot } from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import { store } from './app/store';

createRoot(document.getElementById('root')).render(

    <Provider store={store}>
      <NextUIProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NextUIProvider>
  </Provider>

)
