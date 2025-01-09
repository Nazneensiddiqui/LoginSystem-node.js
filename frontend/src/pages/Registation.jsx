import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"


const Ragestation=()=>{
   const [input , setInput]=useState({})

   const handleInput=(e)=>{
         let name=e.target.name;
         let value=e.target.value;
         setInput(values=>({...values , [name]:value}))
         console.log(input)
}

const handleSubmit=()=>{
   let api="http://localhost:8200/users/ragestation";
  axios.post(api , input).then((res)=>{
   alert("Data Ragestered Succesfuly")
   console.log(res.data)
  })
 
   
} 

return(
    <>
    <center>
    <h1>Ragestation page</h1>
   <div style={{border:"1px solid #fdf4dc", backgroundColor:"#fdf4dc", width:"600px", height:"450px", borderRadius:"50px"}}  >
   <Form style={{padding:"50px"}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter Name</Form.Label>
    <Form.Control type="text"   name='name' onChange={handleInput}/>
  </Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>  Enter City</Form.Label>
    <Form.Control type="text" name='city' onChange={handleInput} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Enter Email</Form.Label>
    <Form.Control type="email" name='email' onChange={handleInput} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>  Enter Password</Form.Label>
    <Form.Control type="password" name='password' onChange={handleInput} />
  </Form.Group>
  <Button onClick={handleSubmit} style={{width:"200px" , padding:"10px", backgroundColor:"#6b4b3a" , color:"white"}}>Submit</Button>
</Form>
</div>
</center>

        </>
    )
}
export default Ragestation;

