import React from 'react'

import { DataGrid } from '@mui/x-data-grid';
import { customerCol, customerRow } from './CustomerData';
import { Button } from '@mui/base';
import styles from './CustomerStyle.module.css'



const CustomerTableSection = () => {
    const action=[
        {
            field:"action",
            headerName:"Action",
            width :200,
            renderCell:()=>{
                return (
                    <>
                    <Button className={styles.btnn}>View More</Button>
                    </>
                )
            }
        }
    ]
  return (
    <>
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={customerRow}
        columns={customerCol.concat(action)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      </div>
    </>
  )
}

export default CustomerTableSection
