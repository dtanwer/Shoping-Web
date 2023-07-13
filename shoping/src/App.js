import './App.css';
import MainPage from './componets/mainPage';
import Home from './pages/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Product from './pages/product';
import Cart from './pages/Cart';
import Protected from './componets/protected';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/cart' element={<Protected><Cart/></Protected>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
