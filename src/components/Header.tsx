import React from 'react'
import { NavbarWrapper } from '../styles/Styles.modules'
import { AppBar, Typography, Toolbar, Tab, Button, useTheme, useMediaQuery } from '@mui/material'

import DrawerContainer from './DrawerContainer';

export const menuItem = [
    {name: "Home"},
    {name: "Movies"},
    {name: "Tv Series"},
    {name: "Genre"},
];

const Header = () => {

    const themes = useTheme();
    const isMatching = useMediaQuery(themes.breakpoints.down('md'))

  return (
    <NavbarWrapper>
        <AppBar 
        sx={{padding:"10px", backgroundColor: '#02091690',
        backdropFilter: 'blur(10px) saturate(160%) contrast(95%) brightness(100%)',
        WebkitBackdropFilter: 'blur(5px) saturate(160%) contrast(45%) brightness(140%)',}}
        >
            <Toolbar variant='dense'>
            <Typography className='logo'>
                MildFlix
            </Typography>
            {isMatching ? (
                <DrawerContainer/>
            ) : (
            <div className='navLinks'>
                {
                    menuItem.map((nav, index)=>(
                        <Tab className='links' label={nav.name} key={index}/>
                    ))
                }
            </div>
            )}
            </Toolbar>
        </AppBar>
    </NavbarWrapper>
  )
}

export default Header