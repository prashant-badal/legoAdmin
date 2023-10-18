import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { TranscationData } from './TransTableData';
import styles from './TransTable.module.css'
import { Typography } from '@mui/material';

const TranscationTable = () => {
  return (
    <>
     <TableContainer className='tablecontainer' component={Paper}>
      <Table  sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tracking ID</TableCell>
            <TableCell >Product</TableCell>
            <TableCell >Customer</TableCell>
            <TableCell >Data</TableCell>
            <TableCell >Amount</TableCell>
            <TableCell >Payment Method</TableCell>
            <TableCell >Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TranscationData.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell >
                {row.id}
              </TableCell>
              <TableCell >
                <div style={{display:"flex",alignItems:"center"}}>
                    <img src={row.img} alt="productimage"  style={{width:"32px",height:"32px",borderRadius:"40%",marginRight:"10px"}}/>   {row.product}
                </div>
             </TableCell>
              <TableCell >{row.customer}</TableCell>
              <TableCell >{row.date}</TableCell>
              <TableCell >{row.amount}</TableCell>
              <TableCell >{row.method}</TableCell>
              <TableCell >
                <Typography variant='span' className={styles[row.status]} >
                {row.status}
                    
                </Typography>
               
                    </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default TranscationTable
