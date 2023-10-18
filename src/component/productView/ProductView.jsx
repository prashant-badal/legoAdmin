import React from 'react'
import {Box,Card} from '@mui/material'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img1 from '../../assert/image/download.jpg'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { ProductData } from './ProductViewData';

const ProductView = () => {
  return (
   <>
   <Box sx={{display:"flex",flexWrap:"wrap",
    justifyContent:{
        xs:"space-around",
        lg:"space-between"
    }
}}>

    {ProductData.map((data,index)=>(

<Card key={index} sx={{ maxWidth: 245 ,padding:1.2,m:1 }}>
<CardMedia
sx={{ height: 140,padding:1.2 }}
image={data.img}
title="green iguana"
/>
<CardContent>
<Typography gutterBottom variant="h6" component="div">
Product ID: {data.id}
</Typography>
<Typography gutterBottom variant="h6" component="div">
Product Title:  {data.title}
</Typography>
<Typography variant="body2" color="text.secondary">
  Price : $  {data.price}
</Typography>
</CardContent>
<CardActions>
<Button variant="outlined" color='success' startIcon={<SendIcon/>}>
EDIT
</Button>
<Button variant="outlined" color='secondary' startIcon={<DeleteIcon />}>
Delete
</Button>
</CardActions>
</Card>

     ))}
       
   </Box>
   </>
  )
}

export default ProductView
