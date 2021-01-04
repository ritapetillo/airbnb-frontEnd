import React,{useEffect,useState, useContext} from 'react'
import { Modal,Button,InputGroup,FormControl} from "react-bootstrap";
import AppContext from '../context/app-context'



function ModalSignUp({showSignUp,setShowSignUp}) {
    
    const [show,setShow] = useState(false)
    const [credentials, setCredentials] = useState()
    useEffect(() => {
       setShow(showSignUp) 
        
    }, [showSignUp])
    const {doRegister} = useContext(AppContext)


    const handleSubmit = async ()=>{
       console.log(credentials)
       try{
         const user = await doRegister(credentials)
         console.log(user)
setShow(!show)} catch(err){
  console.log(err)
}
    }
    return (
        <Modal show={show} onHide={()=>setShowSignUp(!show)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body><div>
        <label htmlFor="firstName">First Name</label>

<InputGroup className="mb-3">
  <FormControl
  id="firstName"
  type="text"
    placeholder="First Name"
    aria-label="firstName"
    aria-describedby="basic-addon1"
    onChange={(e)=>setCredentials({...credentials,firstName:e.target.value})}
  />
  </InputGroup>
  <label htmlFor="lastName">Last Name</label>

  <InputGroup className="mb-3">
  <FormControl
  id="lastName"
  type="text"
    placeholder="Last Name"
    aria-label="lastName"
    aria-describedby="basic-addon1"
    onChange={(e)=>setCredentials({...credentials,lastName:e.target.value})}
  />
  </InputGroup>
        <label htmlFor="username">Username/Email</label>

  <InputGroup className="mb-3">
    <FormControl
    id="username"
    type="text"
      placeholder="Username"
      aria-label="username"
      aria-describedby="basic-addon1"
      onChange={(e)=>setCredentials({...credentials,email:e.target.value})}
    />
    </InputGroup>
    <label htmlFor="password">Password</label>

    <InputGroup className="mb-3">

     <FormControl
     id="password"
     type="password"
      placeholder="Password"
      aria-label="password"
      aria-describedby="basic-addon1"
      onChange={(e)=>setCredentials({...credentials,password:e.target.value})}
    />
  </InputGroup>
  <label htmlFor="repeatPassword">Repeat Password</label>

<InputGroup className="mb-3">

 <FormControl
 id="repeatPassword"
 type="password"
  placeholder="Password"
  aria-label="repeatPassword"
  aria-describedby="basic-addon1"
  onChange={(e)=>setCredentials({...credentials,repeatPassword:e.target.value})}
/>
</InputGroup>
{/* <label htmlFor="repeatPassword">Avatar</label>

<InputGroup className="mb-3">

 <FormControl
 id="avatar"
 type="file"
  onChange={(e)=>setCredentials({...credentials,image:e.target.files[0]})}
/>
</InputGroup> */}
  </div>
  </Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" onClick={()=>setShowSignUp(!showSignUp)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ModalSignUp
