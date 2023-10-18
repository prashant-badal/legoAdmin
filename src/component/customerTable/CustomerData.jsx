import img1 from '../../assert/image/download.jpg'
import styles from './CustomerStyle.module.css'

export const customerCol=[
    { field: 'id', headerName: 'ID', width: 100 },
   


  { field: 'firstName', headerName: 'User', width: 230 ,    renderCell:(params)=>{
    return (
        <>
    
        <img src={params.row.img} alt="customerImg"  style={{width:"45px",height:"45px",borderRadius:"50%",marginRight:"10px"}}/>
        {params.row.lastName}
        </>
    )
}},
  { field: 'email', headerName: 'Email', width: 220 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 100,
  },
  { field: 'status', headerName: 'Status', width: 300 ,
  renderCell:(params)=>{
    return (
        <>
    <div className={styles[params.row.status]}>{params.row.status}</div>
        
        
        </>
    )
}

},
  
  
];

export const customerRow=[
    { id: 1, lastName: 'Snow', email: 'John123@gmail.com', age: 35,img:img1 ,status:"active"},
    { id: 2, lastName: 'Lannister', email: 'Cersei@gmail.com', age: 42,img:img1,status:"passive" },
    { id: 3, lastName: 'Lannister', email: 'Jaime@gmail.com', age: 45 ,img:img1,status:"passive"},
    { id: 4, lastName: 'Stark', email: 'Arya@gmail.com', age: 16 ,status:"active",img:img1},
    { id: 5, lastName: 'Targaryen', email: 'Daenerys@gmail.com', age: 12 ,img:img1,status:"active"},
    { id: 6, lastName: 'Melisandre', email: 'abcgmail.com', age: 50,img:img1 ,status:"active"},
    { id: 7, lastName: 'Clifford', email: 'Ferrara@gmail.com', age: 44 ,img:img1,status:"passive"},
    { id: 8, lastName: 'Frances', email: 'Rossini@gmail.com', age: 36 ,img:img1,status:"active"},
    { id: 9, lastName: 'Roxie', email: 'Harvey@gmail.com', age: 65 ,img:img1},
]