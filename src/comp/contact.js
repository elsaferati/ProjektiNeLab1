import React from 'react';
import './contact.css';
const Contact = () => {
    
  return(  
  <>
  <div className='container'>
<div className='contact_box'>
    <form method='POST'>
    <input type='text' name='Name' value="" placeholder='Enter Your Full Name' autoComplete='off'/>
    <input type='email' name='Email' value="" placeholder='Enter Your Email' autoComplete='off'/>
    <input type='text' name='Subject' value="" placeholder='Subject of Message' autoComplete='off'/>
    <textarea value="" name='Message' placeholder='Your Message'></textarea>
   <button>Send</button>
    </form>
</div>

  </div>
  </>
)  
  
}

export default Contact