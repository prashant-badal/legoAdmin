import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';



 const datas=[{
    title:"CUSTOMERS",
    isMoney:false,
    link:"See all users",
    icon:<PersonOutlineTwoToneIcon 
    fontSize='large'
    sx={{color:" #590fbf" ,backgroundColor:"#a289c4",borderRadius:"7px"}}
    
    />,
},


{
    title:"PRODUCTS",
    isMoney:false,
    link:"See all products",
    icon:<ShoppingBagTwoToneIcon
    fontSize='large'
     sx={{color:" #853a7c" ,backgroundColor:"#cca1c7",borderRadius:"7px"}}
    
    />
},

{
    title:"ORDERS",
            isMoney:false,
            link:"See all order",
            icon:<PersonOutlineTwoToneIcon 
            fontSize='large' sx={{color:" green" ,backgroundColor:"#c2f542",borderRadius:"7px"}}
            />,
},


{
    title:"EARNINGS",
    isMoney:true,
    link:"View net earnings",
    icon:<MonetizationOnTwoToneIcon  fontSize='large' sx={{color:" crimson" ,backgroundColor:"rgba(255,0,0,0.2)",borderRadius:"7px"}}/>,
}

];
export default datas;
