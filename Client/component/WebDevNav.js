import React from "react";
import propTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Grid, Typography, Button, Link } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';

const WDNStyles = {
    appBarHt:{
        height:"80px",
    },
    gridHt:{
        height:"80px"
    },
    imgStyle:{
        width:"100%",
        height:"100%"
    },
    typoFont:{
        fontFamily:"Open sans",
        marginTop:"10px",marginLeft:"30px"
    },
    btn1:{
        marginTop:"20px",
        backgroundColor:"#4caf50",
        color:"white",
        fontFamily:"Open sans",
        '&:hover':{
            backgroundColor:"#4caf50"
        }
    },
    btn2:{
        marginTop:"20px",
        marginLeft:"30px",
        backgroundColor:"#FBC02D",
        fontFamily:"Open sans",
        '&:hover':{
            backgroundColor:"#FBC02D"
        }
    },
    btn3:{
        marginTop:"20px",
        marginLeft:"30px",
        backgroundColor:"#f44336",
        fontFamily:"Open sans",
        '&:hover':{
            backgroundColor:"#f44336"
        }
    },
};

class WebDevNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="relative" className={classes.appBarHt}>
          <Grid container spacing={0} >
            <Grid item xs={2} className={classes.gridHt}>
              <img src={require("./Images/clogo.jpg")}  className={classes.imgStyle}/>
            </Grid>
            <Grid item xs={6}>
            <Typography variant="h3" component="h1" className={classes.typoFont}>Web Development Courses</Typography>
            </Grid>
            <Grid item xs={4}>
            <Button variant="contained" size="large" className={classes.btn1} endIcon={<HomeIcon />} href="/coursemaina/home">Home </Button>
            <Button variant="contained" size="large" className={classes.btn2} endIcon={<ShoppingCartIcon />}  href="/coursemaina/cart">Cart</Button>
            <Button variant="contained" size="large" className={classes.btn3} endIcon={<PersonIcon />} href="/coursemaina/profile">Profile</Button>
            </Grid>
          </Grid>
        </AppBar>
      </div>
    );
  }
}

WebDevNav.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(WDNStyles)(WebDevNav);
