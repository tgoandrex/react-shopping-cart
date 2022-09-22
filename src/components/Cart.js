import { Button } from "react-bootstrap";

function Cart(props) {
    const handleClick = () => {
        props.setCart([]);
        props.setShowCartAlert(true);
        setTimeout(() => props.setShowCartAlert(false), 3000);
    }
    return (
        <div id='cart' className='slide-in'>
            {props.cart.length > 0 ?
                props.cart.map((cartItem) => {
                    return(
                        <div>
                            {cartItem.name} ${cartItem.price.toFixed(2)}
                        </div>
                    )
                })
            : 'Cart is empty'}
            <div id='cart-total'>
                Total products in cart: {props.cart.length}<br />
                Cart total: ${props.cartTotal.toFixed(2)}<br />
                {props.cart.length > 0 &&<Button variant='danger' onClick={() => handleClick()}>Empty Cart</Button>}
            </div>
        </div>
    );
  }
  
  export default Cart;