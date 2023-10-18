import React from 'react'
import {Box, Button, Card, TextField, Typography,CardActions } from '@mui/material'

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
   <>
   <Box sx={{p:2,display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}> 
    <Card sx={{m:1,p:1,display:"flex",justifyContent
    :"center",maxWidth:500,boxShadow:"inset 0 0 10px #000000",}}>
      <Typography><EmojiEmotionsIcon fontSize="large"/></Typography>
      <Typography variant="h4">Admin Login</Typography>
    </Card>




    <Card sx={{maxWidth:400,p:4,boxShadow:"inset 0 0 10px #000000",}}>

      
    <div className="pId" style={{marginTop:"20px"}} >
       <label htmlFor="ProductId">Product Id</label>
       <TextField  sx={{marginLeft:"10px"}} id="ProductId" label="Product Id" variant="outlined" />
        </div>

        <div className="password" style={{marginTop:"20px"}} >
        <label htmlFor="password">Product Id</label>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
           </FormControl>
          </div>


        <CardActions sx={{display:"flex" ,justifyContent:"center"}}>
        <Button   variant="contained" color="secondary" sx={{textAlign:"center"}}>Admin Login</Button>
        </CardActions>
        
    </Card>
   



   
      
      
 
    

     


     
      
 
  
   
   


   </Box>
   
   </>
  )
}

export default Login
