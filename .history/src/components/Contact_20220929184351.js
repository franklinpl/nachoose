import './Contact.css'
import {useState} from 'react'
import * as emailjs from 'emailjs-com'

function Contact(){

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const [messageSent, setMessageSent] = useState(false)
    const [sending, setSending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        setSending(true)

        let template_params = {
            project:'nachoose',
            email: email,
            message: message
        }

        emailjs.sendForm('gmail', 'template_jit7267',e.target,'zglz4geI1KghnKy9A', template_params).then((result) => {
            console.log(result)
            setMessageSent(true)
        }, (error) => {
            console.log(error)
        })

        setSending(false)
       
        setEmail('')
        setMessage('')
        setName('')
    }

    return(
        <div className='contact'>
            
            <h1>Contact</h1>
            <h3>
                <span>Call</span>
                +44 07310066467
            </h3>
            
            <h1 id='message-sent'>{messageSent ? 'Message sent successfully!' : ''}</h1>

            <form className='contact-form' onSubmit={(e) => handleSubmit(e)}>
                <input type='text' placeholder='Name' name='name' id='email-input' value={name}
                    onChange={(e) => setName(e.target.value)}/>
                <input type='email' required placeholder='E-mail' name='email' id='email-input' value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                <textarea type='text' placeholder='Your message here' name='message' id='text-input' value={message}
                    onChange={(e) => setMessage(e.target.value)}/>
                <div className='submit-button'>
                    <button  id='contact-button'>{sending ? 'Sending ...' : 'Submit!'}</button> 
                </div>
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