import './YourOrder.css'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import pattern from './pictures/pattern.png'
import {useEffect, useState} from 'react'
import {removeFromCart} from './redux/Shopping/shopping-actions'

if (localStorage.getItem('cart') === null){localStorage.setItem('cart', JSON.stringify([]))}

function YourOrder({cart, removeFromCart}){

    const [totalPrice, setTotalPrice] = useState('initial price')
    const [extraValue, setExtraValue] = useState(0)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))

        if (cart.length > 0){
            const cartPrice = cart.map(item => 
                item.filter(item => item.price > 0))[0][0].price
            const deliveryFee = 3.5;
            let extras = 0;
            cart.map(item => item.map(item => {
                if (item.extraCheese === 'yes'){extras += 1}
                if (item.extraSauce === 'yes'){extras += 1}
                if (item.type === 'Extra'){extras += 0.8}
    
            }))
            setExtraValue(extras)
            setTotalPrice(cartPrice+deliveryFee+extras)
        }
    }, [cart])

    const setPrice = (value) => {
        setTotalPrice(value+3.5)
    }

    return(
        <div className='order'>
            {cart.length === 0 ?
                <div className='zero-cart'>
                    <h1>There are no items in your cart</h1>
                    <div className='homescreen-button-zero-cart'>
                        <Link to='/choose/choose-a-size'>
                            <Button variant='contained' color='primary' id='homescreen-button'>Order Now!</Button>
                        </Link> 
                    </div>
                </div>

                :

        <div className='items-in-cart'>
            <div className='your-order'>
                <h1>Your order</h1>
                <img src={pattern} alt='company pattern' id='pattern'/> 

                <div>
    
                    {cart.map((item) => {
                        return <div className='cart-item'>
                            
                                    {item.map((component) => {
                                        return component.type === 'Size' ? <div>
                                                <div className='cart-component'>
                                                    <div>
                                                        <h2>{component.name}</h2>
                                                        <p onClick = {() => removeFromCart(component.productId)} style={{cursor:'pointer', color:'#2B93C6'}}>{`Remove`}</p>
                                                    </div>
                                                    <h2 id='price'>{component.price}</h2>
                                                    {() => setPrice(component.price)} 
                                                </div>
                                                {extraValue > 0 ? <div className='cart-component cart-component-next'>
                                                    <h2 id='extras'>Extras</h2>
                                                    <p id='price'>{extraValue}</p>
                                                </div> : ''}
                            
                                            </div> : ''})}
                                </div>
                            })}
                            
                </div>   
                
                <div className='delivery-fee'>
                    <h2>Delivery fee</h2>
                    <p id='price'>3.50</p>
                </div>
                
                <div className='cart-total'>
                    <h1>Total</h1>
                    <p id='price-total'>{totalPrice}</p>
                </div>
                
                <div className='another-bowl'>
                    <Link to='/choose/choose-a-size'>
                        <Button id='another-bowl'>Add another bowl</Button>
                    </Link>
                </div>

                <div className='confirm-order'>
                    <Link to='/payment'>
                        <Button id='confirm-order' color='primary' variant='contained'>Confirm order</Button>
                    </Link>
                </div>
            
            </div>
            </div>          
        }
        </div>
    )
    }

    const mapDispatchToProps = dispatch => {
        return {
            removeFromCart: (id) => dispatch(removeFromCart(id))
        }
    }

const mapStateToProps = state => {
    return{
        cart: state.shop.cart
    }
}



export default connect (mapStateToProps, mapDispatchToProps) (YourOrder)