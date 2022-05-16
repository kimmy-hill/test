import React, {useState} from 'react';
import { validateEmail } from '../utils/helpers';



function Contact() {

const styles = {
resize: "none"
}

const errorStyle = {
color: "red",
fontWeight: "bold"
}

const [email, typeEmail] = useState('');
const [name, typeName] = useState('');
const [message, typeMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');

const resetError = ()=> setErrorMessage('')

function emailError(){
if (email === ""|| !validateEmail(email)){
setErrorMessage("Please enter a valid email!")
setTimeout(resetError,5000)
}
}

function nameError(){
if (name === ""){
setErrorMessage("Please enter your name!")
setTimeout(resetError,3000)
}
}

function messageError (e){
if (message === ""){
setErrorMessage("Please enter a message!")
setTimeout(resetError,3000)
}
}



function handleInput(e) {

    let inputType = e.target.name;
    let inputValue = e.target.value;

    switch (inputType){
    case('email'):
    typeEmail(inputValue);
    break;
    case('name'):
    typeName(inputValue);
    break;
    case('message'):
    typeMessage(inputValue);
    break;
}
  };
  

 

 const submitForm = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage('Fill out a valid email please!');
      return;
    } 
    if (name === "") {
      setErrorMessage("Please enter your name!");
      return;
    } 
    if (message === ""){
      setErrorMessage("Please enter a message!");
      return;
    }

    alert(`Thanks, I will respond to your message as soon as possible :)`);
    
    typeName('');
    typeEmail('');
    typeMessage('');
  };

  return (
<form className= "flex-column align-center m-5">

<h2 className= "m-1 mb-3">Contact</h2>

  <div className="form-group m-1">
    <label className='font-weight-bold '>Name</label>
    <input 
      value = {name} 
      name= "name" 
      onBlur= {nameError} 
      className="form-control"
      onChange = {handleInput}
     />
  </div>


 <div className="form-group m-1">
    <label className='font-weight-bold '>Email address</label>
    <input 
      value = {email} 
      name="email" 
      onBlur={emailError} 
      className="form-control"
      onChange = {handleInput}
      />
  </div>

  <div className="form-group m-1">
    <label className='font-weight-bold '>Message</label>
    <textarea  
        onChange = {handleInput}
        value = {message} 
        name= "message" 
        onBlur={messageError} 
        style = {styles} 
        className="form-control"  
        rows="5"></textarea>
  </div>
<div style={errorStyle} className="form-group m-1">{errorMessage}</div>
<button type="submit" onClick={submitForm} className="btn btn-primary mb-2 m-1" id="pink" >Submit</button>

</form>


  );
}

export default Contact;