import './OnTheWay.css'
import pattern from './pictures/pattern.png'
import {Link} from 'react-router-dom'

function OnTheWay(){
    return(
        <div className='ontheway'>
            <h1>Your nachos are on the way</h1>
            <img src={pattern} alt='company pattern' id='pattern'/>

            <div className='round-text'>
                <p>Order confirmed</p>
                <p>Preparing</p>
                <p>Out for delivery</p>
            </div>
            
            <div className='rounds-and-connections'>
                <div id='yellow-ontheway'/>
                <div id='connection'/>
                <div id='red-ontheway'/>
                <div id='connection'/>
                <div id='green-ontheway'/>
            </div>

            <h3>
                <Link to='/contact'>Contact</Link>
            </h3>
        </div>
    )
}

export default OnTheWay