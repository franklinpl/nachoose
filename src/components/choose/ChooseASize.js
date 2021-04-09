import './ChooseASize.css'
import {useState} from 'react'
import pattern from '../pictures/pattern.png'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addToReview} from '../redux/Shopping/shopping-actions'
import nachoMao from '../pictures/nacho-mao.jpg'

function ChooseASize({addToReview, products}){
    const [individual, setIndividual] = useState(false)
    const [double, setDouble] = useState(false)
    const [party, setParty] = useState(false)
    const [chosenSize, setChosenSize] = useState('')

    const addTheItem = () => {
        const itemId = products.filter(each => each.name === chosenSize).map(each => each.id)
        addToReview(itemId[0])
    }

    const buttonClicked = value => {
        if (value === 'Individual') {
            setIndividual(true);
            setDouble(false);
            setParty(false);
            setChosenSize('Individual nacho bowl')
        }
        else if (value === 'Double') {
            setIndividual(false);
            setDouble(true);
            setParty(false);
            setChosenSize('Double nacho bowl')
        }
        else {
            setIndividual(false);
            setDouble(false);
            setParty(true);
            setChosenSize('Party nacho bowl')
        }
    }

    return(
        <div className='choose-a-size'>
            <div className='progress-bar-size'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            
            <div className='main-choose-a-size'>
                <h1>Choose a size</h1>
                <img src={pattern} alt='company pattern'/>
            
                <div className='choose-a-size-buttons'>        
                    <button onClick={() => buttonClicked('Individual')} id={individual ? 'clicked' : ''}>Individual <span>£ 7.00</span></button>
                    <button onClick={() => buttonClicked('Double')} id={double ? 'clicked' : ''}>Double <span>£ 14.00</span></button>
                    <button onClick={() => buttonClicked('Party')} id={party ? 'clicked' : ''}>Party <span>£ 32.00</span></button>
                </div>
            </div>
   
            
            <div className='back-next'>
                <Link to='/choose'>
                    <button>{`<`} Back</button>
                </Link>
                <Link to='/choose/choose-a-tortilha'>
                    <button onClick={() => addTheItem()}>Next {`>`}</button>
                </Link>
                
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.shop.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToReview: (id) => dispatch(addToReview(id))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(ChooseASize)