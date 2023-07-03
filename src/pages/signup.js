


import './signup.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";




const Input = () => {
    

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  


  const handlecontact=(e)=>{
  
      e.preventDefault( )
          const value = e.target.value;
      
          // Perform validation logic here
          if ( value.length >=10) {
            setErrorMessage('contact must be at least 10 characters long.');
          } else {
            setErrorMessage('');
          }
      
          setContact(value);
        };
  
 



  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContact(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const register =async(e)=>{

      e.preventDefault();

      try{
          // await axios.post("http://localhost:3001/user",{
          //     email,password,name,contact
          // })
          // .then(res=>{
          //     if(res.data=="exist"){
          //    return alert("User already exists")
          //     } 
          //     else if(res.data=="notexist")
          //     {
          //         // history("/home",{state:{id:email}})
          //      return  alert('created')
          //     }
          // })
          // .catch(e=>{
          //     alert("wrong details")
          //     console.log(e);
          // })
        //   let config={
        //     url:'',
        //     method: 'POST',
        //     data:,
        //     headers:{'Content-Type': 'application/json'}
        // }
        axios.post('/user',{
          "name":name,
          "email":email,
          "contact": contact,
          "password":password
      }).then((res)=>{
            console.log(res);
        }).catch((error)=>{
            console.log(error);
        })

      }
      catch(e){
          console.log(e);

      }

  
  }
  

  return (
    <div>
      <h2>Sign Up Form</h2>
      <form>
        <div className="form-container">
          <label htmlFor="name" className="label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="input-field"
            required
          />
        </div>
        <div className="form-container">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="input-field"
          />
        </div>
        <div className="form-container">
          <label htmlFor="contactNumber" className="label">
            Contact Number:
          </label>
          <input
            type="tel"
            id="contactNumber"
            value={contact}
            onChange={handleContactNumberChange}
            className="input-field" onKeyUp={handlecontact}
            pattern="[0-9]{10}"
            maxLength={10}
            required
          />
          {errorMessage && <p>{errorMessage}</p>}
        </div>
        <div className="form-container">
          <label htmlFor="password" className="label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="input-field"
          />
        </div>
        <button type="submit" onClick={register}className="button">
          Register
        </button>
      </form>
      <div>
        {data.map((post) => (
          <div key={post.id}>
            <h1>{post.email}</h1>
            <button type='submit'>Submit</button>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Input;
