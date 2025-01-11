import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom"

const Home=()=>{
const[email, setEmail]=useState("");
const[password, setPassword]=useState("")
const navigate=useNavigate()

  const handleSubmit=async()=>{
try {
  let api="http://localhost:8200/users/userlogin";
  const response= await axios.post(api , {email:email ,password: password})
    console.log(response)
    if(response.status==(200))
    {
       navigate("/deshboard")
    }
} catch (error) {
    alert(error.response.data.msg)
}
  }  
    return(
        <>
        <center>
       <h1 style={{color:"#6b4b3a"}}>Login Page</h1> 
       <div style={{border:"1px solid #fdf4dc", backgroundColor:"#fdf4dc", width:"600px", height:"300px", borderRadius:"50px"}}  >
       <Form style={{width:"50%", marginTop:"30px", marginBottom:"30px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Enter Email</Form.Label>
        <Form.Control type="email" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>  Enter Password</Form.Label>
        <Form.Control type="password" name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}  />
      </Form.Group>
      <Button onClick={handleSubmit}style={{width:"200px" , padding:"10px",backgroundColor:"#6b4b3a" , color:"white"}}>Submit</Button>
    </Form>
    </div>
    </center>
        </>
    )
}
export default Home;