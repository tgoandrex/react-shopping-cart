import { Link } from 'react-router-dom';
import { productList } from '../productList';

function LandingRoute() {
  const featuredProduct = productList.at(Math.floor(Math.random() * productList.length));
  return (
        <div className='mt-5'>
            <h3>Featured Product: {featuredProduct.name}</h3>
            ${featuredProduct.price.toFixed(2)}<br/>
            Currently {featuredProduct.stock ? 'in stock' : 'out of stock'}<br />
            <Link to='/products'>Buy Now</Link>
        </div>
  );
}

export default LandingRoute;