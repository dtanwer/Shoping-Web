import './App.css';
import MainPage from './componets/mainPage';
import Home from './pages/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Product from './pages/product';
import Cart from './pages/Cart';
import Protected from './componets/protected';
import DashBoard from './pages/DashBoard';
import OderSuccess from './pages/orderSuccess';
import Profile from './pages/profile';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/cart' element={<Protected><Cart/></Protected>}/>
        <Route path='/dashboard' element={<Protected><DashBoard/></Protected>}/>
        <Route path='/success' element={<Protected><OderSuccess/></Protected>}/>
        <Route path='/profile' element={<Protected><Profile/></Protected>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
