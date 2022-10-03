import './ChooseATortilha.css'
import {useState} from 'react'
import pattern from '../pictures/pattern.png'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addToReview, changeItem} from '../redux/Shopping/shopping-actions'

function ChooseATortilha({products, addToReview, changeItem, review}){

    const [fried, setFried] = useState(false)
    const [baked, setBaked] = useState(false)
    const [chosenTortilha, setChosenTortilha] = useState('')

    const change = () => {
        const lastItem = review.find(item => item.type === 'Tortilha')
        const itemId = products.find(each => each.name === chosenTortilha).id
        changeItem(lastItem,itemId)
    }

    const addTheItem = () => {
        const itemId = products.filter(each => each.name === chosenTortilha).map(each => each.id)
        addToReview(itemId[0])
    }

    const buttonClicked = value => {
        if (value === 'fried') {
            setFried(true);
            setBaked(false)
            setChosenTortilha('Fried')
        }
        else if (value === 'baked') {
            setFried(false);
            setBaked(true)
            setChosenTortilha('Baked')
        }
    }
    
    return(
        <div className='choose-a-tortilha'>
            <div className='progress-bar-size'>
                <div id='this-one'></div>
                <div id='this-one'></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <h1>Choose a tortilha</h1>
            <img src={pattern} alt='company pattern' id='pattern'/>
            <div className='choose-a-tortilha-buttons'>
                <button onClick={() => buttonClicked('fried')} id={fried ? 'clicked' : ''}>Fried 
                    <span>
                        <img src='https://static.thenounproject.com/png/1378032-200.png' alt='gluten free icon'/>
                    </span>
                </button>
                <button onClick={() => buttonClicked('baked')} id={baked ? 'clicked' : ''}>Baked
                    <span>
                        <img src='https://static.thenounproject.com/png/1378032-200.png' alt='gluten free icon'/>
                    </span>
                </button>
            </div>
            <div className='main-choose-a-tortilha'>
                
                <div className='back-next'>
                {
                    review.length < 7 ? 
                    
                    <div>
                        <Link to='/choose-a-size'>
                            <button>{`<`} Back</button>
                        </Link>
                        <Link to='/choose/choose-a-protein'>
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

export default connect (mapStateToProps, mapDispatchToProps) (ChooseATortilha)