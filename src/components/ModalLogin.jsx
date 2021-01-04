import React,{useEffect,useState, useContext} from 'react'
import { Modal,Button,InputGroup,FormControl} from "react-bootstrap";
import AppContext from '../context/app-context'



function ModalLogin({showLogin,setShowLogin}) {
    
    const [show,setShow] = useState(false)
    const [credentials, setCredentials] = useState()
    useEffect(() => {
       setShow(showLogin) 
        
    }, [showLogin])
    const {doLogin} = useContext(AppContext)


    const handleSubmit = async ()=>{
        const log = await doLogin(credentials)
setShow(!show)
    }
    return (
        <Modal show={show} onHide={()=>setShowLogin(!show)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body><div>
        <label htmlFor="busername">Username/Email</label>

  <InputGroup className="mb-3">
    <FormControl
    id="username"
    type="text"
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
      onChange={(e)=>setCredentials({...credentials,email:e.target.value})}
    />
    </InputGroup>
    <label htmlFor="pasword">Password</label>

    <InputGroup className="mb-3">

     <FormControl
     id="password"
     type="password"
      placeholder="Password"
      aria-label="Password"
      aria-describedby="basic-addon1"
      onChange={(e)=>setCredentials({...credentials,password:e.target.value})}
    />
  </InputGroup>
  </div>
  </Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" onClick={()=>setShowLogin(!showLogin)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ModalLogin
