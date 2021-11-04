import React, { useState } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Navbar.css'
import { useNavbarStyles } from './NavbarStyles'
import { MenuData } from './MenuData.js'
import { Link } from 'react-router-dom';



function Navbar() {

    const classes = useNavbarStyles();

    const [sidebar, setSidebarOpen] = useState(false);
    const [opened, setOpened] = useState(false);
    
    const handleDrawerOpen = () => {
        if(opened){
            setOpened(false);
            setSidebarOpen(false);
        }else{
            setSidebarOpen(true);
            setOpened(true);
            console.log('open the drawer')
        }
    };

    return (
        <div className={classes.root}>
          <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: sidebar,} ) }>
            <Toolbar>
                <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" className={clsx(classes.menuButton, sidebar && classes.hide)}>
                    <div className={classes.menuContainer}>
                        <MenuIcon className={classes.menuButton} />
                    </div>
                </IconButton>
                {/* <Typography className={classes.title} variant="h6" noWrap>
                    citizens against the vaccine
                </Typography> */}
                <Typography className={classes.title} variant="h6" noWrap>
                    <h4 className="nav-title">
                        crazy programmer
                    </h4>
                </Typography>
            </Toolbar>
          </AppBar>
          <Drawer className={classes.drawer} variant="persistent" anchor="left" open={sidebar} classes={ { paper: classes.drawerPaper, } }>
              <div className="navbar-list-container">
                {
                   MenuData.map((item, index) => {
                       return(
                           <li key={index} className={item.cName}>
                               <Link className={item.cName} to={item.path}>
                                   <span>
                                       {item.title}
                                   </span>
                               </Link>
                           </li>
                       )
                   })
                }
              </div>
          </Drawer>
        </div>
      );
}

export default Navbar
