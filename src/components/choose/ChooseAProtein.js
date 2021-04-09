import './ChooseAProtein.css'
import {useState} from 'react'
import pattern from '../pictures/pattern.png'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addToReview} from '../redux/Shopping/shopping-actions'
import nachoPanela from '../pictures/nacho-panela.jpg'

function ChooseAProtein({products, addToReview}){

    const [beef, setBeef] = useState(false)
    const [chicken, setChicken] = useState(false)
    const [blackBeans, setBlackBeans] = useState(false)
    const [meatFreeMince, setMeatFreeMince] = useState(false)
    const [chosenProtein, setChosenProtein] = useState('')

    const addTheItem = () => {
        const itemId = products.filter(each => each.name === chosenProtein).map(each => each.id)
        addToReview(itemId[0])
    }

    const buttonClicked = value => {
        if (value === 'beef') {
            setBeef(true);
            setChicken(false)
            setBlackBeans(false)
            setMeatFreeMince(false)
            setChosenProtein('Beef')
        }
        else if (value === 'chicken') {
            setBeef(false);
            setChicken(true)
            setBlackBeans(false)
            setMeatFreeMince(false)
            setChosenProtein('Chicken')
        }
        else if (value === 'black beans') {
            setBeef(false);
            setChicken(false)
            setBlackBeans(true)
            setMeatFreeMince(false)
            setChosenProtein('Black beans')
        }
        else {
            setBeef(false);
            setChicken(false)
            setBlackBeans(false)
            setMeatFreeMince(true)
            setChosenProtein('Meat-free mince')
        }
    }
    
    return(
        <div className='choose-a-protein'>
            <div className='progress-bar-size'>
                <div id='this-one'></div>
                <div id='this-one'></div>
                <div id='this-one'></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <h1>Choose a protein</h1>
            <img src={pattern} alt='company pattern'/>
            <div className='panela-background'>
            <div className='choose-a-protein-buttons'>
                <button onClick={() => buttonClicked('beef')} id={beef ? 'clicked' : ''}>Beef</button>
                <button onClick={() => buttonClicked('chicken')} id={chicken ? 'clicked' : ''}>Chicken</button>
                <button onClick={() => buttonClicked('black beans')} id={blackBeans ? 'clicked' : ''}>
                    Black beans
                    <span>
                        <img src='https://img.icons8.com/ios/452/vegetarian-mark.png' alt='vegan icon'/>
                    </span>
                </button>
                <button onClick={() => buttonClicked('meat-free mince')} id={meatFreeMince ? 'clicked' : ''}>
                    Meat-free mince
                    <span>
                        <img src='https://img.icons8.com/ios/452/vegetarian-mark.png' alt='vegan icon'/>
                    </span>
                </button>
            </div>
            <div className='main-nacho-na-panela'>
                <div className='back-next'>
                    <Link to='/choose/choose-a-tortilha'>
                        <button>{`<`} Back</button>
                    </Link>
                    <Link to='/choose/choose-a-cheese'>
                        <button onClick={() => addTheItem()}>Next {`>`}</button>
                    </Link>
                    
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps) (ChooseAProtein)