import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import StoreIcon from '@mui/icons-material/Store';
import ChairIcon from '@mui/icons-material/Chair';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { useTheme } from '@mui/material';


const drawerWidth = 280;

const SIDE_BAR_ITEMS =[
  {
    id:1,
    Link:"Dashboard",
    icon:<DashboardIcon/>
  },
  {
    id:2,
    Link:"Orders",
    icon:<InventoryIcon/>
  },
  {
    id:3,
    Link:"Customized Orders",
    icon:<StoreIcon/>
  },
  {
    id:4,
    Link:"Products",
    icon:<ChairIcon/>
    
  },
  {
    id:5,
    Link:"Staff",
    icon:<PeopleAltIcon/>
  },
  {
    id:6,
    Link:"Suppliers",
    icon:<LocalShippingIcon/>
  },
  {
    id:7,
    Link:"Reports",
    icon:<AssessmentIcon/>
  }
  
]

export default function ClippedDrawer() {

  const theme = useTheme();

  return (
    <Drawer className='h-full '
        variant="permanent"
        sx={{
          // height:"100%",
          // width: "100%",
          // flexShrink: 0,
          // [`& .MuiDrawer-paper`]: {boxSizing: 'border-box' },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        anchor="left"
      >
        <Toolbar />
        <List sx={{
          backgroundColor: theme.palette.primary.main
        }} className='text-white hover:opacity-100 h-full AdminBar'>
            {SIDE_BAR_ITEMS.map((text, index) => (
              <ListItem className='opacity-50 pl-3' key={text.id} disablePadding>
                <ListItemButton>
                  <ListItemIcon className='text-white'>
                   {text.icon}
                  </ListItemIcon>
                  <ListItemText sx={{    fontSize:'3rem' }}  primary={text.Link} />
               
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        {/* <div className='h-full bg-[#00172D]'>
        </div> */}
      </Drawer>
  );
}
