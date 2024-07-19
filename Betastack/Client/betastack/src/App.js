import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductState from './context/productState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './components/Products';
import News from './components/News';
import Discussions from './components/Discussions';
import Events from './components/Events';
import ProductDetail from './components/ProductDetail';
import Comments from './components/Comments';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Authentication from './components/Authentication';
import productContext from './context/productContext';
import { useContext } from 'react';
import MyProducts from './components/MyProducts';


      
      function App() {
        return (
          <ProductState>
        <Router>
          <productContext.Consumer>
            {({ isAuthenticated }) => (
              <>
                {isAuthenticated ? <Navbar /> : <Authentication />}
                {isAuthenticated && <div className='container'>
                  <Routes>
                    <Route path='/products' element={<Products />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/discussions' element={<Discussions />} />
                    <Route path='/events' element={<Events />} />
                    <Route path='/myproducts' element={<MyProducts />} />
                  </Routes>
                </div>}
              </>
            )}
          </productContext.Consumer>
        </Router>
      </ProductState>
        );
      }
      

export default App;
