import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
   
         <Box sx={{ flexGrow: 1 }}style={{marginTop:'0'}}>
      <AppBar position="static">
        <Toolbar>
             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{marginLeft:'0'}}>
            My Blog App
          </Typography>
          <Link to={'/blog'} style={{color:'white'}}><Button color="inherit">
            Home</Button></Link>
            <Link to={'/addblog'} style={{color:'white'}}> <Button color="inherit">Add Blog</Button></Link>
            <Link to={'/l'} style={{color:'white'}}> <Button color="inherit">Logout</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
 
  )
}

export default Navbar