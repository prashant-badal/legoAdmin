import { Button, Card, FormControl, Input, InputAdornment, InputLabel, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import img2 from "../../assert/image/3342137.png"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const AddProduct = () => {
  return (
    <>
    <Box >
        <Card sx={{p:2,m:2}}>
            <Typography  color="error">ADD New Product</Typography>
        </Card>

        <Card>
      
          <Box sx={{display:"flex"}}>
            <Typography sx={{width:"30%",display:"flex",justifyContent:"center",alignItem:"center",border:"1px dotted red"}}><img src={img2} alt='no image' width="100px" height="200px"/></Typography>
        
          <Box  sx={{p:4}}>
            <div >
              <label htmlFor="file" style={{display:"flex",alignItems:"center"}}>
                Image : <DriveFolderUploadIcon fontSize='large'/>
              </label>
              <input type="file" id="file" style={{display:"none"}}/>
            </div>

            <div className="pId" style={{marginTop:"20px"}} >
           <label htmlFor="ProductId">Product Id</label>
           <TextField  sx={{marginLeft:"10px"}} id="ProductId" label="Product Id" variant="outlined" />
            </div>


            <div className="pDes" style={{marginTop:"20px"}} >
           <label htmlFor="Product Description ">Product Description</label>
           <TextField  sx={{marginLeft:"10px"}} id="ProductId" label="Product Id" variant="outlined"  multiline
          rows={4}/>
            </div>

          <div>
          
          
           <label htmlFor="standard-adornment-amount"> Amount</label>
           <FormControl sx={{ m: 1 }} variant="standard">
          {/* <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel> */}
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
     
        </div>
        <div className="Categories" style={{marginTop:"20px"}} >
           <label htmlFor="Product Description ">Product Description</label>
           <TextField  sx={{marginLeft:"10px"}} id="Categoriesd" label="Categories" variant="outlined"  multiline
         />
            </div>

         


          </Box>
          
          </Box>
          <Button   variant="contained" color="secondary" sx={{width:"50%",textAlign:"center"}}>Add Product</Button>
       
        </Card>
    </Box>
    </>
  )
}

export default AddProduct
