import './Contact.css'
import Button from '@material-ui/core/Button'

function Contact(){

    return(
        <div className='contact'>
            <h1>Contact</h1>
            <h3>
                <span>Call</span>
                +44 07313578902
            </h3>

            <form className='contact-form'>
                <input type='email' placeholder='E-mail' id='email-input'/>
                <input type='text' placeholder='Your message here' id='text-input'/>
                <div className='submit-button'>
                    <Button variant='contained' color='primary' id='contact-button'>Submit!</Button> 
                `</div>
            </form>
            
            <div className='contact-opening-times'>
                <h1>Opening times</h1>
                <h3>
                    1pm - 11pm 
                    <span id='contact-opening-times'>Thr to Sun</span>
                </h3>
                <h3>Glasgow City</h3>
            </div>
        </div>
    )
}

export default Contact