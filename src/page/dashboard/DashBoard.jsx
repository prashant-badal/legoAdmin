import React from 'react'

import NavBar from '../../component/navbar/NavBar'
import Widget from '../../component/widget/Widget'
import { Box } from '@mui/material'
import Charts from '../../component/charts/Charts'
import TranscationTable from '../../component/transcationTable/TranscationTable'
import CustomerTable from '../../component/customerTable/CustomerTableSection'

const DashBoard = () => {
  return (
  <>
<NavBar>
<h1>Dashboard</h1>

<Box 
sx={{display:"flex",justifyContent:{
    lg:"space-between",
    xs:"space-evenly"
},flexWrap:"wrap"}}
>
   <Widget/>
</Box>

<CustomerTable/>

<Box>
    <Charts/>
</Box>

<TranscationTable/>

</NavBar>
 
</>
  )
}

export default DashBoard
