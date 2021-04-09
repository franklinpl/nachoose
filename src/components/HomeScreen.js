import './HomeScreen.css'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import imageLogo from './pictures/nachoose-logo.png'
import pattern from './pictures/pattern.png'
import backgroundImage from './pictures/nacho-mao.jpg'

function HomeScreen(){
    return(
        <div className='homescreen'>
            <div className='main'>
                <img src={imageLogo} alt='logo' id='homescreen-logo'/>
                <div className='homescreen-button'>
                    <Link to='/choose/choose-a-size'>
                        <Button variant='contained' color='primary' id='homescreen-button'>Order Now!</Button>
                    </Link> 
                </div>
            </div>
            <div className='homescreen-pattern'>
                <img src={pattern} alt='brand pattern'/>
            </div>
            <div className='homescreen-opening-times'>
                <h3 id='opening-times'>Opening times</h3>
                <h3>1pm - 11pm</h3>
                <h3>Thr to Sun</h3>
                <h3>Glasgow City</h3>
            </div>
            
        </div>
    )
}

export default HomeScreen