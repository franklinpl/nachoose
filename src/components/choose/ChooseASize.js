import './ChooseASize.css'
import {useState} from 'react'
import pattern from '../pictures/pattern.png'
import {Link} from 'react-router-dom'

function ChooseASize(){

    const [individual, setIndividual] = useState(false)
    const [double, setDouble] = useState(false)
    const [party, setParty] = useState(false)

    const buttonClicked = value => {
        if (value === 'Individual') {
            setIndividual(true);
            setDouble(false);
            setParty(false)
        }
        else if (value === 'Double') {
            setIndividual(false);
            setDouble(true);
            setParty(false)
        }
        else {
            setIndividual(false);
            setDouble(false);
            setParty(true)
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
            <h1>Choose a size</h1>
            <img src={pattern} alt='company pattern'/>
            <div className='choose-a-size-buttons'>
                <button onClick={() => buttonClicked('Individual')} id={individual ? 'clicked' : ''}>Individual <span>£ 7.00</span></button>
                <button onClick={() => buttonClicked('Double')} id={double ? 'clicked' : ''}>Double <span>£ 14.00</span></button>
                <button onClick={() => buttonClicked('Party')} id={party ? 'clicked' : ''}>Party <span>£ 32.00</span></button>
            </div>
            <div className='back-next'>
                <Link to='/choose'>
                    <button>{`<`} Back</button>
                </Link>
                <Link to='/choose/choose-a-tortilha'>
                    <button>Next {`>`}</button>
                </Link>
                
            </div>
        </div>
    )
}

export default ChooseASize