import { Button, Col } from 'react-bootstrap';

function Product(props) {
    const handleClick = (product) => {
        if(product.stock > 0) {
            props.setShowCart(true);
            props.setCart(current => [...current, {name: product.name, price: product.price}]);
            props.setCartTotal(props.cartTotal + product.price);
            --product.stock;
            props.setShowProductAlert(true);
            setTimeout(() => props.setShowProductAlert(false), 3000);
        }
    }
    return (
        <Col>
            <h3>{props.product.name}</h3>
            ${props.product.price.toFixed(2)}<br />
            {props.product.stock > 0 ?`${props.product.stock} in stock`: 'Out of stock'}<br />
            {props.product.stock > 0 &&<Button size='sm' onClick={() => handleClick(props.product)}>Add to Cart</Button>}
        </Col>
    );
}
  
  export default Product;