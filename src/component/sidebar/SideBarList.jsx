import { Accordion, AccordionDetails, AccordionSummary, Collapse, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';



import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import ProductionQuantityLimitsTwoToneIcon from '@mui/icons-material/ProductionQuantityLimitsTwoTone';
import FormatListNumberedTwoToneIcon from '@mui/icons-material/FormatListNumberedTwoTone';

import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';
import StreetviewTwoToneIcon from '@mui/icons-material/StreetviewTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import CreditScoreTwoToneIcon from '@mui/icons-material/CreditScoreTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
const SideBarList = () => {
    const [openProduct, setOpenProduct] = useState(true);
    const [openCustomer, setOpenCustomer] = useState(false);

   const handleToggle1=()=>
   {
    
    setOpenProduct(!openProduct);
   };

   
   const handleToggle2=()=>
   {
    
    setOpenCustomer(!openCustomer);
   }
  return (
   <>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
            
          <ListItemIcon>
            < StarBorder fontSize='large' sx={{paddingTop:1.5}}/>
            <h2>LEGO App</h2>
          
          </ListItemIcon>
        
         
        </ListSubheader>
      }
    >
        <Divider/>
        

      <Divider/>
        <ListItem disablePadding>

       {/* dashboard */}
      <ListItemButton component={Link} to="/">
            <ListItemIcon>
            <DashboardTwoToneIcon/>
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
      </ListItem>

<Divider/>
{/* Product */}
<ListItemButton onClick={handleToggle1}>
        <ListItemIcon>
          <ProductionQuantityLimitsTwoToneIcon  />
        </ListItemIcon>
        <ListItemText primary="Products" />
        {openProduct ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openProduct} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            {/* ProductList */}
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/product">
            <ListItemIcon>
              <FormatListNumberedTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Product List" />
          </ListItemButton>

           {/* ADD Product */}
           <ListItemButton sx={{ pl: 4 }} component={Link} to="/addproduct">
            <ListItemIcon>
              <FormatListNumberedTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary=" Add Product " />
          </ListItemButton>

              {/* ProductTable */}
          {/* <ListItemButton sx={{ pl: 4 }} component={Link} to="/product-table">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Product Table" />
          </ListItemButton> */}
        </List>
      </Collapse>
  

      <Divider/>
{/* Customer */}
<ListItemButton onClick={handleToggle2}>
        <ListItemIcon>
          <SupportAgentTwoToneIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
        {openCustomer ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openCustomer} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            {/* CustomerList */}
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              < StreetviewTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Customer List" />
          </ListItemButton>

              {/* CustomerTable */}
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/customer-table">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Customer Table" />
          </ListItemButton>
        </List>
      </Collapse>

     

{/* Transcation */}
<ListItemButton  component={Link} to="/transcation">
     <ListItemIcon>
     <CreditScoreTwoToneIcon />
     </ListItemIcon>
     <ListItemText primary="Transcation" />
 </ListItemButton>

 {/* Notes */}
<ListItemButton>
     <ListItemIcon>
     <SendIcon />
     </ListItemIcon>
     <ListItemText primary=" Notes " />
 </ListItemButton>


{/* Profile */}
<ListItemButton>
     <ListItemIcon>
     <AccountBoxTwoToneIcon />
     </ListItemIcon>
     <ListItemText primary=" Profile " />
 </ListItemButton>


{/* Log Out */}
<ListItemButton component={Link} to="/login">
     <ListItemIcon>
     <LogoutTwoToneIcon />
     </ListItemIcon>
     <ListItemText primary=" Log Out" />
 </ListItemButton>

 <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Item 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ListItem>
            <ListItemText primary="Content for item 3" />
          </ListItem>
        </AccordionDetails>
      </Accordion>
  

</List>
   </>
  )
}

export default SideBarList
