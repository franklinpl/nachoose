import './ChooseSomeVeggies.css'
import {useState} from 'react'
import pattern from '../pictures/pattern.png'
import {Link} from 'react-router-dom'

function ChooseSomeVeggies(){

    const [choppedTomatoes, setChoppedTomatoes] = useState(false)
    const [redOnions, setRedOnions] = useState(false)
    const [blackOlives, setBlackOlives] = useState(false)
    const [jalapenos, setJalapenos] = useState(false)
    const [sweetCorn, setSweetCorn] = useState(false)

    const [extraTomatoes, setExtraTomatoes] = useState(false)
    const [extraRedOnions, setExtraRedOnions] = useState(false)
    const [extraBlackOlives, setExtraBlackOlives] = useState(false)
    const [extraJalapenos, setExtraJalapenos] = useState(false)
    const [extraSweetCorn, setExtraSweetCorn] = useState(false)


    const extraItems = (name) => {
    if (name === 'chopped tomatoes'){
        extraTomatoes ? setExtraTomatoes(false) : setExtraTomatoes(true)
    }
    if (name === 'red onions'){
        extraRedOnions ? setExtraRedOnions(false) : setExtraRedOnions(true)
    }
    if (name === 'black olives'){
        extraBlackOlives ? setExtraBlackOlives(false) : setExtraBlackOlives(true)
    }
    if (name === 'jalapenos'){
        extraJalapenos ? setExtraJalapenos(false) : setExtraJalapenos(true)
    }
    if (name === 'sweet corn'){
        extraSweetCorn ? setExtraSweetCorn(false) : setExtraSweetCorn(true)
    }
    }

    const buttonClicked = value => {
        if (value === 'chopped tomatoes') {
            setChoppedTomatoes(true)
            setRedOnions(false)
            setBlackOlives(false)
            setJalapenos(false)
            setSweetCorn(false)
        }
        else if (value === 'red onions') {
            setChoppedTomatoes(false)
            setRedOnions(true)
            setBlackOlives(false)
            setJalapenos(false)
            setSweetCorn(false)
        }
        else if (value === 'black olives') {
            setChoppedTomatoes(false)
            setRedOnions(false)
            setBlackOlives(true)
            setJalapenos(false)
            setSweetCorn(false)
        }
        else if (value === 'jalapenos') {
            setChoppedTomatoes(false)
            setRedOnions(false)
            setBlackOlives(false)
            setJalapenos(true)
            setSweetCorn(false)
        }
        else {
            setChoppedTomatoes(false)
            setRedOnions(false)
            setBlackOlives(false)
            setJalapenos(false)
            setSweetCorn(true)
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
        <img src={pattern} alt='company pattern'/>
        <div className='choose-some-veggies-buttons'>
            <button onClick={() => buttonClicked('chopped tomatoes')} id={choppedTomatoes ? 'clicked' : ''}>
                Chopped tomatoes
                <span>
                    <img src='https://static.thenounproject.com/png/3357600-200.png' alt='vegan icon'/>
                </span>
            </button>
            <button onClick={() => buttonClicked('red onions')} id={redOnions ? 'clicked' : ''}>
                Red onions
                <span>
                    <img src='https://static.thenounproject.com/png/3357600-200.png' alt='vegan icon'/>
                </span>
            </button>
            <button onClick={() => buttonClicked('black olives')} id={blackOlives ? 'clicked' : ''}>
                Black olives
                <span>
                    <img src='https://static.thenounproject.com/png/3357600-200.png' alt='vegan icon'/>
                </span>
            </button>
            <button onClick={() => buttonClicked('jalapenos')} id={jalapenos ? 'clicked' : ''}>
                jalapenos
                <span>
                    <img src='https://static.thenounproject.com/png/3357600-200.png' alt='vegan icon'/>
                </span>
            </button>
            <button onClick={() => buttonClicked('sweetCorn')} id={sweetCorn ? 'clicked' : ''}>
                Sweet corn
                <span>
                    <img src='https://static.thenounproject.com/png/3357600-200.png' alt='vegan icon'/>
                </span>
            </button>
            
            <div className='extra-veggies'>
               <p id='extra-veggies' style={{fontWeight:'bold'}}> Choose below for extra veggies (£0.8 each)</p>
            </div>

            <div className='choose-some-veggies-buttons'>
            <button onClick={() => extraItems('chopped tomatoes')} id={extraTomatoes ? 'clicked' : ''}>
                Chopped tomatoes
                <span>
                    <img src='https://static.thenounproject.com/png/3357600-200.png' alt='vegan icon'/>
                </span>
            </button>
            <button onClick={() => extraItems('red onions')} id={extraRedOnions ? 'clicked' : ''}>
                Red onions
                <span>
                    <img src='https://static.thenounproject.com/png/3357600-200.png' alt='vegan icon'/>
                </span>
            </button>
            <button onClick={() => extraItems('black olives')} id={extraBlackOlives ? 'clicked' : ''}>
                Black olives
                <span>
                    <img src='https://static.thenounproject.com/png/3357600-200.png' alt='vegan icon'/>
                </span>
            </button>
            <button onClick={() => extraItems('jalapenos')} id={extraJalapenos ? 'clicked' : ''}>
                jalapenos
                <span>
                    <img src='https://static.thenounproject.com/png/3357600-200.png' alt='vegan icon'/>
                </span>
            </button>
            <button onClick={() => extraItems('sweet corn')} id={extraSweetCorn ? 'clicked' : ''}>
                Sweet corn
                <span>
                    <img src='https://static.thenounproject.com/png/3357600-200.png' alt='vegan icon'/>
                </span>
            </button>
            </div>
        </div>
        <div className='back-next-veggies'>
            <Link to='/choose/choose-a-cheese'>
                <button>{`<`} Back</button>
            </Link>
            <Link to='/choose/choose-a-sauce'>
                <button>Next {`>`}</button>
            </Link>
            
        </div>
    </div>
    )
}

export default ChooseSomeVeggies