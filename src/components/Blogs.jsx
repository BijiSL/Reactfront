import { Card, CardContent, CardMedia, Grid2, Typography } from '@mui/material'
import React from 'react'
const data=[{blogname:'Foodblog',blogimg:'Food blog',blogdesc:'Food Blog'},
    {blogname:'Travelblog',blogimg:'Travel blog',blogdesc:'Travel Blog'},
    {blogname:'Movieblog',blogimg:'Movie blog',blogdesc:'Movie Blog'}
]

const Blogs = () => {
  return (
    <Grid2 container spacing={2}>
  <Grid2 size={4} style={{marginTop:'3%'}}>
  <Card sx={{ maxWidth: 345 }} style={{marginTop:'3%'}}>
      <CardMedia
        sx={{ height: 140 }}
        image={row.blogimg}   
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
         </Card>
  </Grid2>
 
</Grid2>
        
    
  )
}

export default Blogs