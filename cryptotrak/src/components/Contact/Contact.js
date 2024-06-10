import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import './Contact.css'


function Contact() {
    return (
        <div>
            <Header></Header>
            
            <form>      
  <input name="name" type="text" class="feedback-input" placeholder="Name" />   
  <input name="email" type="text" class="feedback-input" placeholder="Email" />
  <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
  <input type="submit" value="SUBMIT"/>
</form>

            <Footer></Footer>
        </div>
    )
}

export default Contact



