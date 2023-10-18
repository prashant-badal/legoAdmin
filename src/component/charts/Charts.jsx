import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { Box } from '@mui/system';
import { Card, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts';
const Charts = () => {
  return (
   <>
   <h1>Charts</h1>
   <Box sx={{display:"flex",flexWrap:"wrap",
    justifyContent:{
        lg:"space-between",
        xs:"space-evenly"
        
    }
}}>
    <Card sx={{p:1.2}}>
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'June' },
            { id: 1, value: 15, label: 'July' },
            { id: 2, value: 20, label: 'August' },
          ],
        },
      ]}
      width={400}
      height={300}
    />
    <Typography textAlign="center" variant='h5' color="blue">
        Sell in last 3 months
    </Typography>
    </Card>

    <Card>

    <LineChart

  series={[
    { curve: "natural", data: [0, 5, 2, 6, 3, 9.3] },
    { curve: "natural", data: [6, 3, 7, 9.5, 4, 2] },
  ]}
  width={600}
      height={300}
  
/>
<Typography textAlign="center" variant='h5' color="blue">
    Comparing of Earning 
    </Typography>
    </Card>
   </Box>
    
    
   
   </>
  )
}

export default Charts
