import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Scroll from './components/Scroll';
import { CartProvider } from './context/cartContext';
const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
     <CartProvider>
     <Scroll />
     <App />

     </CartProvider>
   
    </BrowserRouter>
)