import './HomeScreen.css'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

function HomeScreen(){
    return(
        <div className='homescreen'>
            <h1 id='homescreen-title'>Nachoose</h1>
            <div className='homescreen-button'>
                <Link to='/order-now'>
                    <Button variant='contained' color='primary' id='homescreen-button'>Order Now!</Button>
                </Link> 
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