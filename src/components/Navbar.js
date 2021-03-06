import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <div className='navbar'>
            <Link to='/'>
                <h1 className='navbar-logo'>LOGO</h1>
            </Link>
            
            <div className='navbar-components'>
                
                <Link to='/choose'>
                    <h2>Choose</h2>
                </Link>
                
                <Link to='/your-order'>
                    <h2>Your Order</h2>
                </Link>
                
                <Link to='/about'>
                    <h2>About</h2>
                </Link>

                <Link to='/contact'>
                    <h2>Contact</h2>
                </Link>
            </div>
        </div>
    )
}

export default Navbar