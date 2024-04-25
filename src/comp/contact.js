import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
    const [userData, setUserData] = useState(
        {
            Name:'', Email:'', Subject:'', Message:''
        }
    )
    let name, value 
    console.log(userData)
    const data= (e) => {
        name= e.target.name
        value= e.target.value
        setUserData({...userData, [name]:value})

    }
    const send = async(e) => {
        const {Name, Email, Subject, Message} = userData
        e.preventDefault();
        const option = {
            method: 'POST',
            headers: {
                'Content-type': 'aplication/json'
            },
            body :JSON.stringify(
              {
                Name, Email, Subject, Message
              }  
            )
        }
        const res = await fetch ('https://contact-us-react-9c45f-default-rtdb.firebaseio.com/Messages.json' , option)
        console.log(res)
        if(res){
         alert ('Message sent')   
        }
    }
  return(  
  <>
  <div className='container'>
<div className='contact_box'>
    <form method='POST'>
    <input type='text' name='Name' value={userData.Name} placeholder='Enter Your Full Name' autoComplete='off' onChange={data}/>
    <input type='email' name='Email' value={userData.Email} placeholder='Enter Your Email' autoComplete='off' onChange={data} />
    <input type='text' name='Subject'value={userData.Subject} placeholder='Subject of Message' autoComplete='off' onChange={data} />
    <textarea value={userData.Message} name='Message' placeholder='Your Message' autoComplete='off' onChange={data}></textarea>
   <button onClick={send}>Send</button>
    </form>
</div>

  </div>
  </>
)  
  
}

export default Contact