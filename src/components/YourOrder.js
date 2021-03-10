import './YourOrder.css'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

function YourOrder({cart}){
    return(
        <div className='your-order'>
            {cart.length === 0 ?
                <div className='zero-cart'>
                    <h1>There are no items in your cart</h1>
                    <div className='homescreen-button'>
                        <Link to='/choose'>
                            <Button variant='contained' color='primary' id='homescreen-button'>Order Now!</Button>
                        </Link> 
                    </div>
                </div>

                :

                <div className='items-in-cart'>
                    
                </div>
        }
        </div>
    )
}

const mapStateToProps = state => {
    return{
        cart: state.shop.cart
    }
}

export default connect (mapStateToProps) (YourOrder)