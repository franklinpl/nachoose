import './Review.css'
import pattern from '../pictures/pattern.png'
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {addToCart} from '../redux/Shopping/shopping-actions'

function Review({review, addToCart}){
    return(
        <div className='review'>
            <h1>Review</h1>
            <img src={pattern} alt='company pattern' id='pattern'/>

            <div className='review-main'>
  
                <div className='review-box'>
                    <div className='title-and-change'>
                        <h1>Size</h1>
                        <Link to='/choose/choose-a-size'>Change</Link>
                    </div>
                    <p id='item-name'>{review.filter(item => item.type === 'Size').map(item => item.name)}</p>
                </div>
                
                <div className='review-box'>
                    <div className='title-and-change'>
                        <h1>Tortilha</h1>
                        <Link to='/choose/choose-a-tortilha'>Change</Link>
                    </div>
                    <p id='item-name'>{review.filter(item => item.type === 'Tortilha').map(item => item.name)}</p>
                </div>
                
                <div className='review-box'>
                    <div className='title-and-change'>
                        <h1>Protein</h1>
                        <Link to='/choose/choose-a-protein'>Change</Link>
                    </div>
                    <p id='item-name'>{review.filter(item => item.type === 'Protein').map(item => item.name)}</p>
                </div>
                
                <div className='review-box'>
                    <div className='title-and-change'>
                        <h1>Veggies</h1>
                        <Link to='/choose/choose-some-veggies'>Change</Link>
                    </div>
                    <div className='name-and-extra'>
                        <p id='item-name'>{review.filter(item => item.type === 'Veggies').map(item => item.name)}</p>
                        <p id='extra'>*{review.filter(item => item.type === 'Extra')
                                .map(param => 'extra '+param.name+', ')}</p>
                    </div>
                </div> 

                <div className='review-box'>
                    <div className='title-and-change'>
                        <h1>Cheese</h1>
                        <Link to='/choose/choose-a-cheese'>Change</Link>
                    </div>
                    <div className='name-and-extra'>
                        <p id='item-name'>{review.filter(item => item.type === 'Cheese').map(item => item.name)}</p>
                        <p id='extra'>{review.filter(item => item.type === 'Cheese')
                            .map(param => param.extraCheese === 'yes' ? '*extra cheese' : '')}</p>
                    </div>
                </div>
                
                <div className='review-box'>
                    <div className='title-and-change'>
                        <h1>Sauce</h1>
                        <Link to='/choose/choose-a-sauce'>Change</Link>
                    </div>
                    <div className='name-and-extra'>
                        <p id='item-name'>{review.filter(item => item.type === 'Sauce').map(item => item.name)}</p>
                        <p id='extra'>{review.filter(item => item.type === 'Sauce')
                                .map(param => param.extraSauce === 'yes' ? '*extra sauce' : '')}</p>
                    </div>
                </div>
                
                <div className='review-quantity'>
                    <h1>Quantity</h1>
                    <input type='number' defaultValue='1'/>
                </div>
            
            </div>
            
            
            <div className='review-button'>
                <Link to='/your-order'>       
                    <Button variant='contained' color='primary' id='review-button' onClick={() => addToCart()}>Add to order</Button>
                </Link>
            </div>
            

        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: () => dispatch(addToCart())
    }
}

const mapStateToProps = state => {
    return {
        review: state.shop.review
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Review)