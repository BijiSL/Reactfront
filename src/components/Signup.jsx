import { Box, Button, Grid, Grid2, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
         <Box sx={{ flexGrow: 1 }} style={{marginTop:'10%'}}>
      <Grid2 container spacing={2}>
        <Grid2 size={4}>
       <TextField id="outlined-basic" label="Name"  variant='outlined'/>
        </Grid2>
        <Grid2 size={4}>
        <TextField fullWidth id="outlined-basic" label="Email"  variant='outlined'/>
        </Grid2>
        <Grid2 size={12}>
        <TextField fullWidth id="outlined-multiline-flexible"
          label="Address"
          multiline
          rows={4}/>
        </Grid2>
        <Grid2 size={6}>
        <TextField fullWidth id="outlined-basic" label="Phone"  variant='outlined'/>
        </Grid2>
        <Grid2 size={6}>
        <TextField fullWidth id="outlined-basic" label="Password"  variant='outlined'/>
        </Grid2>
        <Grid2 size={12}>
        <Button variant="contained" >SIGN UP</Button>
        </Grid2>
        <Grid2 size={12}>
        <Typography style={{color:'darkcyan'}}>
        <Link to={'/l'}>Registered User?Please click me</Link></Typography>
        </Grid2>
      </Grid2>
    </Box>
    </div>

  )
}

export default Signup