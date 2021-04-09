import './ChooseASauce.css'
import {useState} from 'react'
import pattern from '../pictures/pattern.png'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addToReview} from '../redux/Shopping/shopping-actions'

function ChooseASauce({products, addToReview}){

    const [sourCream, setSourCream] = useState(false)
    const [guacamole, setGuacamole] = useState(false)
    const [salsa, setSalsa] = useState(false)
    const [extraSauce, setExtraSauce] = useState(false)
    const [chosenSauce, setChosenSauce] = useState('')

    const check = () => {
       extraSauce ? setExtraSauce(false) : setExtraSauce(true);
    }

    const addTheItem = () => {

        //item with extra sauce
        const itemWithExtra = products.filter(each => each.name === chosenSauce && each.extraSauce === 'yes')
            .map(each => each.id)
        
        //item without extra cheese
        const itemWithoutExtra = products.filter(each => each.name === chosenSauce && each.extraSauce === 'no')
            .map(each => each.id)

        if (extraSauce) {
            addToReview(itemWithExtra[0])
        }
        else {
            addToReview(itemWithoutExtra[0])
        }
    }

    const buttonClicked = value => {
        if (value === 'sour cream') {
            setSourCream(true)
            setGuacamole(false)
            setSalsa(false)
            setChosenSauce('Sour cream')
        }
        else if (value === 'guacamole') {
            setSourCream(false)
            setGuacamole(true)
            setSalsa(false)
            setChosenSauce('Guacamole')
        }
        else {
            setSourCream(false)
            setGuacamole(false)
            setSalsa(true)
            setChosenSauce('Salsa')
        }
    }

    return(
        <div className='choose-a-sauce'>
        <div className='progress-bar-size'>
            <div id='this-one'></div>
            <div id='this-one'></div>
            <div id='this-one'></div>
            <div id='this-one'></div>
            <div id='this-one'></div>
            <div id='this-one'></div>
        </div>
        <h1>Choose a sauce</h1>
        <img src={pattern} alt='company pattern'/>
        <div className='choose-a-sauce-buttons'>
            <button onClick={() => buttonClicked('sour cream')} id={sourCream ? 'clicked' : ''}>Sour cream</button>
            <button onClick={() => buttonClicked('guacamole')} id={guacamole ? 'clicked' : ''}>
                Guacamole
                <span>
                    <img src='https://img.icons8.com/ios/452/vegetarian-mark.png' alt='vegan icon'/>
                </span>
            </button>
            <button onClick={() => buttonClicked('salsa')} id={salsa ? 'clicked' : ''}>
                Salsa
                <span>
                    <img src='https://img.icons8.com/ios/452/vegetarian-mark.png' alt='vegan icon'/>
                </span>
            </button>
        </div>
        <div className='extra-sauce'>
                <input type='checkbox' id='extra-sauce' name='extra-sauce' value='extra-sauce' onClick={() => check()}/>
                <label htmlFor='extra-sauce' style={{fontWeight:'bold'}}> Extra sauce for  £1.00</label>
            </div>
            <div className='main-choose-a-sauce'>
                <div className='back-next'>
                    <Link to='/choose/choose-some-veggies'>
                        <button>{`<`} Back</button>
                    </Link>
                    <Link to='/choose/review'>
                    <button onClick={() => addTheItem()}>Next {`>`}</button>
                    </Link>
                    
                </div>
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

export default connect (mapStateToProps, mapDispatchToProps) (ChooseASauce)