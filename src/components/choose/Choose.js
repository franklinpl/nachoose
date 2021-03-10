import './Choose.css'
import {useState} from 'react'
import pattern from '../pictures/pattern.png'
import {Link} from 'react-router-dom'

function Choose(){

    const [postCode, setPostCode] = useState('')

    const onChangePostCode = (e) => {
        setPostCode(e.target.value)
    }

    return(
        <div className='choose'>
            <h1>Enter your post code</h1>
            <img src={pattern} alt='brand pattern'/>
            <input type='text' onChange={onChangePostCode} value={postCode}/>
            <Link to='/choose/choose-a-size'>
                <button>Next {`>`}</button> 
            </Link>
        </div>
    )
}

export default Choose