import './ChooseACheese.css'
import {useState} from 'react'
import pattern from '../pictures/pattern.png'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addToReview} from '../redux/Shopping/shopping-actions'

function ChooseACheese({products, addToReview}){

    const [cheedar, setCheedar] = useState(false)
    const [american, setAmerican] = useState(false)
    const [veganCheese, setVeganCheese] = useState(false)
    const [extraCheese, setExtraCheese] = useState(false)
    const [chosenCheese, setChosenCheese] = useState('')

    const addTheItem = () => {
        //item with extra cheese
        const itemWithExtra = products.filter(each => each.name === chosenCheese)
            .filter(each => each.extraCheese === 'yes').map(each => each.id)
        
        //item without extra cheese
        const itemWithoutExtra = products.filter(each => each.name === chosenCheese)
            .filter(each => each.extraCheese === 'no').map(each => each.id)
        
        if (extraCheese) {
            addToReview(itemWithExtra[0])
        }
        else {
            addToReview(itemWithoutExtra[0])
        }
    }

    const check = () => {
        extraCheese ? setExtraCheese(false) : setExtraCheese(true)
    }

    const buttonClicked = value => {
        if (value === 'cheedar') {
            setCheedar(true);
            setAmerican(false);
            setVeganCheese(false)
            setChosenCheese('Cheedar')
        }
        else if (value === 'american') {
            setCheedar(false);
            setAmerican(true);
            setVeganCheese(false)
            setChosenCheese('American')
        }
        else {
            setCheedar(false);
            setAmerican(false);
            setVeganCheese(true)
            setChosenCheese('Vegan cheese')
        }
    }

    return(
        
        <div className='choose-a-cheese'>
            
            <div className='progress-bar-size'>
                <div id='this-one'></div>
                <div id='this-one'></div>
                <div id='this-one'></div>
                <div id='this-one'></div>
                <div></div>
                <div></div>
            </div>
            
            <h1>Choose a cheese</h1>
            <img src={pattern} alt='company pattern' id='pattern'/>
            <div className='choose-a-cheese-buttons'>
                <button onClick={() => buttonClicked('cheedar')} id={cheedar ? 'clicked' : ''}>Cheedar</button>
                <button onClick={() => buttonClicked('american')} id={american ? 'clicked' : ''}>American</button>
                <button onClick={() => buttonClicked('vegan cheese')} id={veganCheese ? 'clicked' : ''}>
                    Vegan cheese
                    <span>
                        <img src='https://img.icons8.com/ios/452/vegetarian-mark.png' alt='vegan icon'/>
                    </span>
                </button>
            </div>
            
            <div className='main-choose-a-cheese'>
                <div className='extra-cheese'>
                    <input type='checkbox' id='extra-cheese' name='extra-cheese' value='extra-cheese' onClick={() => check()}/>
                    <label htmlFor='extra-cheese' style={{fontWeight:'bold'}}> Extra cheese for  £1.00</label>
                </div>
                <div className='back-next'>
                    <Link to='/choose/choose-a-protein'>
                        <button>{`<`} Back</button>
                    </Link>
                    <Link to='/choose/choose-some-veggies'>
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

export default connect (mapStateToProps, mapDispatchToProps) (ChooseACheese)