import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Navigation from './components/Navigation';
import Cart from './components/Cart';

import LandingRoute from './routes/LandingRoute';
import ProductsRoute from './routes/ProductsRoute';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [showCartAlert, setShowCartAlert] = useState(false);

  return (
    <Router>
      <Navigation showCart={showCart} setShowCart={setShowCart} />
      <Container fluid className='text-center' id='main'>
        <Row>
          <Col xs={showCart ? 8 : 12}>
            <Routes>
              <Route path='/' element={<LandingRoute />} />
              <Route path='/products' element={
                <ProductsRoute 
                  setCart={setCart} cart={cart} setCartTotal={setCartTotal} cartTotal={cartTotal} setShowCart={setShowCart}
                  showCartAlert={showCartAlert}
                />
              } />
            </Routes>
          </Col>
          {showCart && 
            <Col xs={4}>
              <Cart cart={cart} cartTotal={cartTotal} setCart={setCart} setShowCartAlert={setShowCartAlert} />
            </Col>
          }
        </Row>
      </Container>
    </Router>
  );
}

export default App;
