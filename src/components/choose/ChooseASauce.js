import './ChooseASauce.css'
import {useState} from 'react'
import pattern from '../pictures/pattern.png'
import {Link} from 'react-router-dom'

function ChooseASauce(){

    const [sourCream, setSourCream] = useState(false)
    const [guacamole, setGuacamole] = useState(false)
    const [salsa, setSalsa] = useState(false)
    const [extraSauce, setExtraSauce] = useState(false)

    const check = () => {
       extraSauce ? setExtraSauce(false) : setExtraSauce(true);
    }

    const buttonClicked = value => {
        if (value === 'sour cream') {
            setSourCream(true)
            setGuacamole(false)
            setSalsa(false)
        }
        else if (value === 'guacamole') {
            setSourCream(false)
            setGuacamole(true)
            setSalsa(false)
        }
        else {
            setSourCream(false)
            setGuacamole(false)
            setSalsa(true)
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
                    <img src='https://static.thenounproject.com/png/3357600-200.png' alt='vegan icon'/>
                </span>
            </button>
            <button onClick={() => buttonClicked('salsa')} id={salsa ? 'clicked' : ''}>
                Salsa
                <span>
                    <img src='https://static.thenounproject.com/png/3357600-200.png' alt='vegan icon'/>
                </span>
            </button>
        </div>
        <div className='extra-sauce'>
                <input type='checkbox' id='extra-sauce' name='extra-sauce' value='extra-sauce'/>
                <label for='extra-sauce' style={{fontWeight:'bold'}}> Extra sauce for  £1.00</label>
            </div>
        <div className='back-next'>
            <Link to='/choose/choose-some-veggies'>
                <button>{`<`} Back</button>
            </Link>
            <Link to='/choose/summary'>
                <button>Next {`>`}</button>
            </Link>
            
        </div>
    </div>
    )
}

export default ChooseASauce