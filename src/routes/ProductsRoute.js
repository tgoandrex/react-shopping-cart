import { useState } from 'react';
import { Alert, Row } from 'react-bootstrap'

import Product from '../components/Product';

import { productList } from '../productList';

function ProductsRoute(props) {
    const [showProductAlert, setShowProductAlert] = useState(false);

    return (
        <div>
            {showProductAlert && <Alert variant={'info'} className='fade-in'>Product added!</Alert>}
            {props.showCartAlert && <Alert variant={'danger'} className='fade-in'>Cart emptied!</Alert>}
            <Row className='mt-5'>
                {productList.map((product) => {
                    return <Product
                    key={product.id}
                    setCart={props.setCart}
                    cart={props.cart}
                    setCartTotal={props.setCartTotal}
                    cartTotal={props.cartTotal}
                    product={product}
                    setShowCart={props.setShowCart}
                    setShowProductAlert={setShowProductAlert}
                    />
                })}
            </Row>
        </div>
    );
  }
  
  export default ProductsRoute;