import './About.css'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

function About(){
    return(
        <div className='about'>
            <h3>About</h3>
            <div className='nachoose-story'>
                <h1>Nachoose story</h1>
            </div>
            <div className='about-text'>
                <p>Nachoose was created so people could have
                the best nachos of their lives and share it with
                their friends. We have been delivering
                amazing nachos to amazing people for five
                years now!</p>
            </div>
            <div className='our-food'>
                <h1>Our food</h1>
            </div>
            <div className='about-text'>
                <p>We use handmade tortillas and fresh
                ingredients on our nachos, having healthier
                options and choices for people with special
                diets</p>
            </div>
            <div className='about-button'>
                <Link to='/choose/choose-a-size'>
                    <Button id='about-button'>Order now!</Button>
                </Link>
            </div>
        
        </div>
    )
}

export default About