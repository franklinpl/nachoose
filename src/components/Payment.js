import './Payment.css'
import pattern from './pictures/pattern.png'
import {Redirect} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import {useState, useEffect} from 'react'

const delay = 5000

function Payment(){

    const [processCard, setProcessCard] = useState(false)
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        let timer = setTimeout(() => setRedirect(true), delay)
        return () => {
            clearTimeout(timer)
        }
    })

    const cardProcessment = () => {
        processCard ? setProcessCard(false) : setProcessCard(true)
    }

    return(
        <div>
            {
                processCard ?
                    redirect ?
                    <Redirect to='/ontheway'/>
                    :
                    <div className='processing'>
                        <h1>Processing card</h1>
                        <p>Please, do not close the browser until processment is complete</p>
                        <div className='colored-balls'>
                            <div id='yellow'/>
                            <div id='green'/>
                            <div id='red'/>
                        </div>
                    </div>
                :
                <div className='payment'>
            <h1 id='payment-text'>Payment</h1>
            <img src={pattern} alt='company pattern' id='pattern'/>

            <form>
                <div className='billing-information'>
                    <h1>Billing information</h1>
                    <input type='text' id='full-name' placeholder='Full name'/>
                    <input type='text' placeholder='Address line 1'/>
                    <input type='text' placeholder='Address line 2'/>
                    <input type='text' placeholder='Address line 3'/>
                    <div className='post-code'>
                        <input type='text' id='post-code' placeholder='Post Code'/>
                    </div>
                    <div className='country-and-city'>
                        <input type='text' id='country' placeholder='UK'/>
                        <input type='text' id='city' placeholder='City'/>
                    </div>
                    <div className='phone-number'>
                        <input type='text' id='code' placeholder='+44'/>
                        <input type='cel' placeholder='Phone number' id='phone'/>
                    </div>
                </div>

                <div className='card-information'>
                    <h1>Card information</h1>
                    <input type='text' placeholder='Name on card'/>
                    <input type='number' placeholder='Card number'/>
                    <div className='date-and-CVV'>
                        <input type='date' id='date' placeholder='mm/yyyy'/>
                        <input type='number' id='cvv' placeholder='CVV'/>
                    </div>
                </div>

                <div className='confirm-order'>
                    <Button id='confirm-order' color='primary' 
                        variant='contained' onClick={() => cardProcessment()}>Confirm order</Button>
                </div>
            
            </form>
        </div>
            }
        </div>
        
    )
}

export default Payment