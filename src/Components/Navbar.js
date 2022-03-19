import React from 'react';
import CustomButton from './CustomButton.js'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 
import { Link } from "react-router-dom";

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        // ['@media (max-width:780px)']: { 
        //    flexDirection: "column"
        //   }
    },
    menuItem: {
        fontWeight: "bold",
        cursor: "pointer", 
        flexGrow: 1,
        // ['@media (max-width:780px)']: { 
        //     paddingBottom: "1rem"    }
    },
    noUnderline:{
        textDecoration: 'none',
        "&:hover": {
            color:  "#4f25c8"
        }
    }
});
const Navbar = () => {
    const classes = styles();
    const handleLogout=()=>{
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div>
             <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                {/* <img src={logo} className={classes.logo}/>  */}
                <Typography variant="h6" className={classes.menuItem}>
                    <Link to="/" className={classes.noUnderline}>Home</Link>
                </Typography>

                <Typography variant="h6" className={classes.menuItem}>
                    <Link to="/posts" className={classes.noUnderline}>Posts</Link>
                </Typography>

                <Typography variant="h6" className={classes.menuItem}>
                <Link to="/profile" className={classes.noUnderline}>Profile</Link>
                </Typography>

                {localStorage.getItem("token") == null && <Link to="/login" className={classes.noUnderline}><CustomButton content="Login"/></Link>}
                {localStorage.getItem("token") && <CustomButton toggle={handleLogout} content="Logout"/>}
            </Toolbar>
        </div>
    );
}

export default Navbar;