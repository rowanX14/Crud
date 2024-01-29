import {Table,Button} from 'semantic-ui-react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../Constants/url';
import {useNavigate} from 'react-router-dom'
 
function Read() {

const[apidata,setAPIData]=useState([]);
const navigate=useNavigate();

const updateUser=({firstName,lastName,checked,id})=>{
  localStorage.setItem('id',id)
  localStorage.setItem('firstname',firstName)
  localStorage.setItem('lastname',lastName)
  localStorage.setItem('checked',checked)
  navigate('/update')
}
const deleteUser=async(id) =>{
  await axios.delete(API_URL+id)
  callGETAPI()
}
const callGETAPI=async()=>{
  const resp=await axios.get(API_URL);
  setAPIData(resp.data);
}
useEffect(()=>{callGETAPI();},[]);

  return (
      <Table > 
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>FirstName</Table.HeaderCell>
            <Table.HeaderCell>LastName</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{
          apidata.map(data=>(<Table.Row key={data.id}><Table.Cell>{data.firstName}
          </Table.Cell><Table.Cell>{data.lastName}
          </Table.Cell><Table.Cell>{data.checked ? 'Checked':'NotChecked'}
          </Table.Cell><Table.Cell><Button size='xl' onClick={()=>deleteUser(data.id)}>delete</Button></Table.Cell>
          <Table.Cell><Button size='xl' onClick={()=>updateUser(data)}>update</Button></Table.Cell></Table.Row>))}
          
        </Table.Body>
      </Table>
  );
}

export default Read;
