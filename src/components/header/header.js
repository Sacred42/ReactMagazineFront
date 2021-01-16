import react from 'react';
import { Link } from 'react-router-dom';


const Header = () =>{
    return (
        <header>
      <Link to="/"><div className="brand">First Magazine</div></Link>
      <div className="links-header">
        <Link to="/productcart">Cart</Link>
        <a href="#">Sign in</a>
        <a href="#">Sign up</a>
      </div>
    </header>
    )
}

export default Header;