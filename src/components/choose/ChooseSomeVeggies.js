import './ChooseSomeVeggies.css'
import {useState} from 'react'
import pattern from '../pictures/pattern.png'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addToReview, changeItem} from '../redux/Shopping/shopping-actions'

function ChooseSomeVeggies({products, addToReview, changeItem, review}){

    const [choppedTomatoes, setChoppedTomatoes] = useState(false)
    const [redOnions, setRedOnions] = useState(false)
    const [blackOlives, setBlackOlives] = useState(false)
    const [jalapenos, setJalapenos] = useState(false)
    const [sweetCorn, setSweetCorn] = useState(false)
    const [chosenVeggies, setChosenVeggies] = useState('')

    const [extraTomatoes, setExtraTomatoes] = useState(false)
    const [extraRedOnions, setExtraRedOnions] = useState(false)
    const [extraBlackOlives, setExtraBlackOlives] = useState(false)
    const [extraJalapenos, setExtraJalapenos] = useState(false)
    const [extraSweetCorn, setExtraSweetCorn] = useState(false)
    const [chosenExtra, setChosenExtra] = useState([])

    const change = () => {
        const lastItem = review.find(item => item.type === 'Veggies')
        const itemId = products.find(each => each.name === chosenVeggies).id
        changeItem(lastItem,itemId)
    }

    const extraItems = (name) => {
    if (name === 'chopped tomatoes'){
        extraTomatoes ? setExtraTomatoes(false) : setExtraTomatoes(true) && setChosenExtra([...chosenExtra, 'Extra tomatoes'])
    }
    if (name === 'red onions'){
        extraRedOnions ? setExtraRedOnions(false) : setExtraRedOnions(true) && setChosenExtra([...chosenExtra, 'Extra red onions'])
    }
    if (name === 'black olives'){
        extraBlackOlives ? setExtraBlackOlives(false) : setExtraBlackOlives(true) && setChosenExtra([...chosenExtra, 'Black olives'])
    }
    if (name === 'jalapenos'){
        extraJalapenos ? setExtraJalapenos(false) : setExtraJalapenos(true) && setChosenExtra([...chosenExtra, 'Extra jalapenos'])
    }
    if (name === 'sweet corn'){
        extraSweetCorn ? setExtraSweetCorn(false) : setExtraSweetCorn(true) && setChosenExtra([...chosenExtra, 'Extra sweet corn'])
    }
    }

    const addTheItem = () => {
        const itemId = products.filter(each => each.name === chosenVeggies).map(each => each.id)
        addToReview(itemId[0])
        if (extraTomatoes === true){
            addToReview(products.filter(item => item.type === 'Extra' && item.name === 'Chopped tomatoes')
                .map(param => param.id)[0])
        }
        if (extraRedOnions === true){
            addToReview(products.filter(item => item.type === 'Extra' && item.name === 'Red onions')
                .map(param => param.id)[0])
        }
        if (extraBlackOlives === true){
            addToReview(products.filter(item => item.type === 'Extra' && item.name === 'Black olives')
                .map(param => param.id)[0])
        }
        if (extraJalapenos === true){
            addToReview(products.filter(item => item.type === 'Extra' && item.name === 'Jalapenos')
                .map(param => param.id)[0])
        }
        if (extraSweetCorn === true){
            addToReview(products.filter(item => item.type === 'Extra' && item.name === 'Sweet corn')
                .map(param => param.id)[0])
        }
    }

    const buttonClicked = value => {
        if (value === 'chopped tomatoes') {
            setChoppedTomatoes(true)
            setRedOnions(false)
            setBlackOlives(false)
            setJalapenos(false)
            setSweetCorn(false)
            setChosenVeggies('Chopped tomatoes')
        }
        else if (value === 'red onions') {
            setChoppedTomatoes(false)
            setRedOnions(true)
            setBlackOlives(false)
            setJalapenos(false)
            setSweetCorn(false)
            setChosenVeggies('Red onions')
        }
        else if (value === 'black olives') {
            setChoppedTomatoes(false)
            setRedOnions(false)
            setBlackOlives(true)
            setJalapenos(false)
            setSweetCorn(false)
            setChosenVeggies('Black olives')
        }
        else if (value === 'jalapenos') {
            setChoppedTomatoes(false)
            setRedOnions(false)
            setBlackOlives(false)
            setJalapenos(true)
            setSweetCorn(false)
            setChosenVeggies('Jalapenos')
        }
        else {
            setChoppedTomatoes(false)
            setRedOnions(false)
            setBlackOlives(false)
            setJalapenos(false)
            setSweetCorn(true)
            setChosenVeggies('Sweet corn')
        }
    }


    return(
        <div className='choose-some-veggies'>
        <div className='progress-bar-size'>
            <div id='this-one'></div>
            <div id='this-one'></div>
            <div id='this-one'></div>
            <div id='this-one'></div>
            <div id='this-one'></div>
            <div></div>
        </div>
        <h1>Choose some veggies</h1>
        <img src={pattern} alt='company pattern' id='pattern'/>
        <div className='choose-some-veggies-buttons'>
            <button onClick={() => buttonClicked('chopped tomatoes')} id={choppedTomatoes ? 'clicked' : ''}>
                Chopped tomatoes
                <span>
                    <img src='https://img.icons8.com/ios/452/vegetarian-mark.png' alt='vegan icon'/>
                </span>
            </button>
            <button onClick={() => buttonClicked('red onions')} id={redOnions ? 'clicked' : ''}>
                Red onions
                <span>
                    <img src='https://img.icons8.com/ios/452/vegetarian-mark.png' alt='vegan icon'/>
                </span>
            </button>
            <button onClick={() => buttonClicked('black olives')} id={blackOlives ? 'clicked' : ''}>
                Black olives
                <span>
                    <img src='https://img.icons8.com/ios/452/vegetarian-mark.png' alt='vegan icon'/>
                </span>
            </button>
            <button onClick={() => buttonClicked('jalapenos')} id={jalapenos ? 'clicked' : ''}>
                jalapenos
                <span>
                    <img src='https://img.icons8.com/ios/452/vegetarian-mark.png' alt='vegan icon'/>
                </span>
            </button>
            <button onClick={() => buttonClicked('sweetCorn')} id={sweetCorn ? 'clicked' : ''}>
                Sweet corn
                <span>
                    <img src='https://img.icons8.com/ios/452/vegetarian-mark.png' alt='vegan icon'/>
                </span>
            </button>
            
            <div className='extra-veggies'>
               <p id='extra-veggies' style={{fontWeight:'bold'}}> Choose below for extra veggies (£0.80 each)</p>
            </div>

            <div className='choose-some-veggies-buttons'>
            <button onClick={() => extraItems('chopped tomatoes')} id={extraTomatoes ? 'clicked' : ''}>
                Chopped tomatoes
                <span>
                    <img src='https://img.icons8.com/ios/452/vegetarian-mark.png' alt='vegan icon'/>
                </span>
            </button>
            <button onClick={() => extraItems('red onions')} id={extraRedOnions ? 'clicked' : ''}>
                Red onions
                <span>
                    <img src='https://img.icons8.com/ios/452/vegetarian-mark.png' alt='vegan icon'/>
                </span>
            </button>
            <button onClick={() => extraItems('black olives')} id={extraBlackOlives ? 'clicked' : ''}>
                Black olives
                <span>
                    <img src='https://img.icons8.com/ios/452/vegetarian-mark.png' alt='vegan icon'/>
                </span>
            </button>
            <button onClick={() => extraItems('jalapenos')} id={extraJalapenos ? 'clicked' : ''}>
                jalapenos
                <span>
                    <img src='https://img.icons8.com/ios/452/vegetarian-mark.png' alt='vegan icon'/>
                </span>
            </button>
            <button onClick={() => extraItems('sweet corn')} id={extraSweetCorn ? 'clicked' : ''}>
                Sweet corn
                <span>
                    <img src='https://img.icons8.com/ios/452/vegetarian-mark.png' alt='vegan icon'/>
                </span>
            </button>
            </div>
        </div>
        <div className='main-choose-some-veggies'>
        {
                    review.length < 7 ? 
                    
                    <div className='back-next-veggies'>
                        <Link to='/choose-a-sauce'>
                            <button>{`<`} Back</button>
                        </Link>
                        <Link to='/choose/review'>
                            <button onClick={() => addTheItem()}>Next {`>`}</button>
                        </Link>
                    </div>
                   
                :
        
                <Link to='/choose/review'>
                    <button onClick={() => change()} style={{width:'10rem'}}>Back to review {`>`}</button>
                </Link>

                }
        </div> 
    </div>
    )
}
const mapStateToProps = state => {
    return {
        products: state.shop.products,
        review: state.shop.review
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToReview: (id) => dispatch(addToReview(id)),
        changeItem: (lastItem, id) => dispatch(changeItem(lastItem, id))
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (ChooseSomeVeggies)