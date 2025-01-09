import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Home=()=>{


const handleInput=(e)=>{

    }

  const handleSubmit=()=>{

  }  
    return(
        <>
        <center>
       <h1 style={{color:"#6b4b3a"}}>Login Page</h1> 
       <div style={{border:"1px solid #fdf4dc", backgroundColor:"#fdf4dc", width:"600px", height:"300px", borderRadius:"50px"}}  >
       <Form style={{width:"50%", marginTop:"30px", marginBottom:"30px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Enter Email</Form.Label>
        <Form.Control type="email" name='email' onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>  Enter Password</Form.Label>
        <Form.Control type="password" name='password' onChange={handleInput} />
      </Form.Group>
      <Button onClick={handleSubmit}style={{width:"200px" , padding:"10px",backgroundColor:"#6b4b3a" , color:"white"}}>Submit</Button>
    </Form>
    </div>
    </center>
        </>
    )
}
export default Home;