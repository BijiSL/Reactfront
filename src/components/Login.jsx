import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div style={{margin:'5%'}}>
        <Typography variant='h3' style={{color:'darkgoldenrod'}}>BlogApp Login</Typography>
        <br/><br/>
        <TextField id="outlined-basic" label="E-mail" variant="outlined" />
        <br/><br/>
        <TextField id="outlined-basic" label="Password" variant="outlined" /> 
        <br/><br/>
    <Button  varient="contained"> Login</Button>&nbsp;&nbsp;
    <Typography style={{color:'darkcyan'}}>
        <Link to={'/s'}>New User?Please click me</Link></Typography>
    {/* <Button  varient="contained"> Signup</Button> */}
    </div>
  )
}

export default Login