import React,{useState,useEffect} from 'react';
import {Form,Button,Checkbox, FormField} from 'semantic-ui-react'
import{useNavigate}from 'react-router-dom'
import{API_URL}from '../Constants/url'
import axios from 'axios';
function Update() {
  const[firstName,setFirstname]=useState('')
  const[lastName,setLastname]=useState('')
  const[id,setId]=useState('')
  const[checked,setChecked]=useState(false)
  const navigate=useNavigate();


  const updateData = async ()=> {
    await axios.put(API_URL+id,{
    firstName,lastName,checked
  });
  navigate('/read');
  }

  useEffect(()=>{
    setId(localStorage.getItem('id'))
    setFirstname(localStorage.getItem('firstname'))
    setLastname(localStorage.getItem('lastname'))
    setChecked(localStorage.getItem('checked'))
  },[])



  return (
    <div>
    <Form className='Form'>
      <Form.Field>
        <label>First Name</label>
        <input value={firstName} onChange={event =>setFirstname(event.target.value)} placeholder='Enter first name'/>
      </Form.Field><br/>
      <Form.Field>
        <label>Last Name</label>
        <input value={lastName} onChange={event =>setLastname(event.target.value)} placeholder='Enter last name'/>
      </Form.Field><br/>
      <Form.Field>
        <Checkbox checked={checked} onChange={()=>setChecked(!checked)} label="Age more than 18"/>
      </Form.Field><br/>
      <Button onClick={updateData}>Update</Button>
    </Form>
    
  </div>
  );
}

export default Update;
