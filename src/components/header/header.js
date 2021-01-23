import react from 'react';
import { Link } from 'react-router-dom';



const Header = () =>{
    return (
        <header>
      <Link to="/"><div className="brand">First Magazine</div></Link>
      <div className="links-header">
        <Link to="/productcart">Cart</Link>
        <Link to="/signin">Sign in</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    </header>
    )
}

export default Header;