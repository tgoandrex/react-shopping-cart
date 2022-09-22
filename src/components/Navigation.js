import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Navigation(props) {
    const handleClick = () => {props.showCart === false ? props.setShowCart(true) : props.setShowCart(false)};
    return (
        <Navbar bg='dark'>
            <Nav className='me-auto'>
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/products' className='nav-link'>Product List</Link>
            </Nav>
            <Nav>
                <Button onClick={() => handleClick()}>Show/Hide Cart</Button>
            </Nav>
        </Navbar>
    );
}

export default Navigation;