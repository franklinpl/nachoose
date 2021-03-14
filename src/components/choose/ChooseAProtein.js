import './ChooseAProtein.css'
import {useState} from 'react'
import pattern from '../pictures/pattern.png'
import {Link} from 'react-router-dom'

function ChooseAProtein(){

    const [beef, setBeef] = useState(false)
    const [chicken, setChicken] = useState(false)
    const [blackBeans, setBlackBeans] = useState(false)
    const [meatFreeMince, setMeatFreeMince] = useState(false)

    const buttonClicked = value => {
        if (value === 'beef') {
            setBeef(true);
            setChicken(false)
            setBlackBeans(false)
            setMeatFreeMince(false)
        }
        else if (value === 'chicken') {
            setBeef(false);
            setChicken(true)
            setBlackBeans(false)
            setMeatFreeMince(false)
        }
        else if (value === 'black beans') {
            setBeef(false);
            setChicken(false)
            setBlackBeans(true)
            setMeatFreeMince(false)
        }
        else {
            setBeef(false);
            setChicken(false)
            setBlackBeans(false)
            setMeatFreeMince(true)
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
            <div className='choose-a-protein-buttons'>
                <button onClick={() => buttonClicked('beef')} id={beef ? 'clicked' : ''}>Beef</button>
                <button onClick={() => buttonClicked('chicken')} id={chicken ? 'clicked' : ''}>Chicken</button>
                <button onClick={() => buttonClicked('black beans')} id={blackBeans ? 'clicked' : ''}>
                    Black beans
                    <span>
                        <img src='https://static.thenounproject.com/png/3357600-200.png' alt='vegan icon'/>
                    </span>
                </button>
                <button onClick={() => buttonClicked('meat-free mince')} id={meatFreeMince ? 'clicked' : ''}>
                    Meat-free mince
                    <span>
                        <img src='https://static.thenounproject.com/png/3357600-200.png' alt='vegan icon'/>
                    </span>
                </button>
            </div>
            <div className='back-next'>
                <Link to='/choose/choose-a-tortilha'>
                    <button>{`<`} Back</button>
                </Link>
                <Link to='/choose/choose-a-cheese'>
                    <button>Next {`>`}</button>
                </Link>
                
            </div>
        </div>
    )
}

export default ChooseAProtein