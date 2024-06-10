import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductState from './context/productState';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Products from './components/Products';
import News from './components/News';
import Discussions from './components/Discussions';
import Events from './components/Events';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <>
    <ProductState>
      <Router>
        <Navbar/>
        <div className='container'>
          <Routes>
            <Route path='/products' element={<Products/>}></Route>
          </Routes>
          <Routes>
            <Route path="/product/:id" element={<ProductDetail/>}></Route>
          </Routes>
          <Routes>
            <Route path='/news' element={<News/>}></Route>
          </Routes>
          <Routes>
            <Route path='/discussions' element={<Discussions/>}></Route>
          </Routes>
          <Routes>
            <Route path='/events' element={<Events/>}></Route>
          </Routes>
        </div>
      </Router>
    </ProductState>
    </>
  );
}

export default App;
