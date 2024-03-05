import React, {useState} from 'react'
import {
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import { menuItem } from './Header'

const DrawerContainer = () => {

    const [openDrawer, setOpenDrawer] = useState(false);
    const drawerBtn = () => {
        setOpenDrawer(!openDrawer)
    }

  return (
    <>
    <Drawer PaperProps={{ sx: { backgroundColor: "#020916" } }} open={openDrawer} onClose={drawerBtn} anchor='left'>
        <List>
        {
            menuItem.map((nav, index) => (
                <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
                    <ListItemIcon>
                        <ListItemText>
                            {nav.name}
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            ))
        }
        </List>
    </Drawer>
    <IconButton onClick={drawerBtn} sx={{marginLeft:"auto", color:'white', }}>
        <MenuIcon/>
    </IconButton>
    </>
  )
}

export default DrawerContainer