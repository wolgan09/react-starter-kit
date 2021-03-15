import React, { Component } from 'react'
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge, makeStyles, fade, Button, Grid } from '@material-ui/core';
import Logo from '../../assets/img/logo.png';
import _ from 'lodash';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';


const useStyles = makeStyles((theme) => ({
    header:{
        backgroundColor: theme.palette.common.white
    },
    logo:{
        height:'36px',
        width: '60px'
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: '5%',
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },    
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }));
export default function Header() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };
        return (
            <div className={classes.grow}>
      <AppBar position="static" color={classes.header} >
        <Toolbar>
        <Grid container spacing={3}>
        <Grid item alignItems="center" xs={12} sm={1}>
                <Link to="/"> <img className={classes.logo} src={Logo} /></Link>
        </Grid>
          
          <Grid item xs={12} sm={5}>
          <ul className="sub-menu">
          {['men','women','kids','home&living','offers'].map((i) => ( 
              <li className="menu-items"> 
              <Link to={`/shop/${i}`}><Button >{i}</Button> </Link>
              </li>
            ))}
          </ul>
          </Grid>
          
          <Grid item xs={12} sm={4}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
            <SearchIcon/>
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          </Grid>

          <Grid item xs={12} sm={2}>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
              <PermIdentityIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <FavoriteBorderIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
            //   aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <LocalMallOutlinedIcon/>
            </IconButton>
          </div>
          </Grid>
          </Grid>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
            //   aria-controls={mobileMenuId}
              aria-haspopup="true"
            //   onClick={handleMobileMenuOpen}
              color="inherit"
            >
              {/* <MoreIcon /> */}
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>
            {/* <div className="toolbar-container">
                <NavLink to="/" className="display-4 col font-weight-bold">Myntra</NavLink>
                <NavLink to="/todo" className="display-4 col font-weight-bold">Todo</NavLink>
                <NavLink to="/weather" className="display-4 col font-weight-bold">WA</NavLink>
            </div> */}
            </div>
        )
}

