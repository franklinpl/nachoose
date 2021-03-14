import './ChooseATortilha.css'
import {useState} from 'react'
import pattern from '../pictures/pattern.png'
import {Link} from 'react-router-dom'

function ChooseATortilha(){

    const [fried, setFried] = useState(false)
    const [baked, setBaked] = useState(false)

    const buttonClicked = value => {
        if (value === 'fried') {
            setFried(true);
            setBaked(false)
        }
        else if (value === 'baked') {
            setFried(false);
            setBaked(true)
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
            <img src={pattern} alt='company pattern'/>
            <div className='choose-a-tortilha-buttons'>
                <button onClick={() => buttonClicked('fried')} id={fried ? 'clicked' : ''}>Fried 
                    <span>
                        <img src='https://www.vhv.rs/dpng/d/147-1470650_icon-gluten-free-png-transparent-png.png' alt='gluten free icon'/>
                    </span>
                </button>
                <button onClick={() => buttonClicked('baked')} id={baked ? 'clicked' : ''}>Baked
                    <span>
                        <img src='https://www.vhv.rs/dpng/d/147-1470650_icon-gluten-free-png-transparent-png.png' alt='gluten free icon'/>
                    </span>
                </button>
            </div>
            <div className='back-next'>
                <Link to='/choose/choose-a-size'>
                    <button>{`<`} Back</button>
                </Link>
                <Link to='/choose/choose-a-protein'>
                    <button>Next {`>`}</button>
                </Link>
                
            </div>
        </div>
    )
}

export default ChooseATortilha