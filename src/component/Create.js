
import React,{useState} from 'react';
import{API_URL}from '../Constants/url'
import {Form,Button,Checkbox, FormField} from 'semantic-ui-react'
import axios from 'axios';
  import {useNavigate} from 'react-router-dom'
function Create() {
  const[firstName,setFirstname]=useState('')
  const[lastName,setLastname]=useState('')
  const[checked,setChecked]=useState(false)
  const navigate=useNavigate();

  const postData = async ()=> {
      await axios.post(API_URL,{
      firstName,lastName,checked
    })
    navigate('/read');
    }
 
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
        <Button onClick={postData}>Submit</Button>
      </Form>
      
    </div>
  );
}

export default Create;
