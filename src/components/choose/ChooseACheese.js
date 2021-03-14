import './ChooseACheese.css'
import {useState} from 'react'
import pattern from '../pictures/pattern.png'
import {Link} from 'react-router-dom'

function ChooseACheese(){

    const [cheedar, setCheedar] = useState(false)
    const [american, setAmerican] = useState(false)
    const [veganCheese, setVeganCheese] = useState(false)
    const [extraCheese, setExtraCheese] = useState(false)

    const check = () => {
        extraCheese ? setExtraCheese(false) : setExtraCheese(true);
    }

    const buttonClicked = value => {
        if (value === 'cheedar') {
            setCheedar(true);
            setAmerican(false);
            setVeganCheese(false)
        }
        else if (value === 'american') {
            setCheedar(false);
            setAmerican(true);
            setVeganCheese(false)
        }
        else {
            setCheedar(false);
            setAmerican(false);
            setVeganCheese(true)
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
            <img src={pattern} alt='company pattern'/>
            <div className='choose-a-cheese-buttons'>
                <button onClick={() => buttonClicked('cheedar')} id={cheedar ? 'clicked' : ''}>Cheedar</button>
                <button onClick={() => buttonClicked('american')} id={american ? 'clicked' : ''}>American</button>
                <button onClick={() => buttonClicked('vegan cheese')} id={veganCheese ? 'clicked' : ''}>
                    Vegan cheese
                    <span>
                        <img src='https://static.thenounproject.com/png/3357600-200.png' alt='vegan icon'/>
                    </span>
                </button>
            </div>
            <div className='extra-cheese'>
                <input type='checkbox' id='extra-cheese' name='extra-cheese' value='extra-cheese' onClick={() => check()}/>
                <label htmlFor='extra-cheese' style={{fontWeight:'bold'}}> Extra cheese for  £1.00</label>
            </div>
            <div className='back-next'>
                <Link to='/choose/choose-a-protein'>
                    <button>{`<`} Back</button>
                </Link>
                <Link to='/choose/choose-some-veggies'>
                    <button>Next {`>`}</button>
                </Link>
                
            </div>
        </div>
    )
}

export default ChooseACheese