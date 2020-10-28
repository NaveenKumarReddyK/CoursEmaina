import React from "react";
import propTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Button,
  Backdrop,
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Divider,
  IconButton
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';


const cdStyles = {
  bckStyle: {
    zIndex: "2",
  },
  contStyle: {
    marginTop: "2px",
    backgroundColor: "#E3F2FD",
    borderRadius: "3px",
  },
  cdTitle: {
    padding: "20px 30px",
    fontFamily: "Open sans",
    fontWeigth: "bolder",
  },
  faBtn: {
    marginTop: "20px",
  },
  gr1Style: {
    height: "80px",
 
  },
  cardStyle: {
    maxWidth: "290px",
    marginTop: "10px",
  },
  cimgStyle: {
    width: "100%",
    height: "120px",
  },
  courTitleStyle: {
    textAlign: "center",
    fontFamily: "Open sans",
  },
  costStyle: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "Open sans",
  },
  capStyle: {
    color: "brown",
    textAlign: "center",
    fontFamily: "Open sans",
  },
  Cbtn1: {
    marginLeft: "26px",
    marginTop: "20px",
    padding: "9px 80px",
    fontFamily: "Open sans",
    fontSize: "20px",
    backgroundColor: "#43A047",
    "&:hover": {
      backgroundColor: "#43A047",
    },
  },
  Cbtn2: {
    marginTop: "10px",
    marginLeft: "26px",
    padding: "9px 32px",
    fontFamily: "Open sans",
    fontSize: "20px",
    backgroundColor: "#f44336",
    "&:hover": {
      backgroundColor: "#f44336",
    },
  },
  sylBtnStyle: {
    marginLeft: "32px",
    color: "blue",
    fontFamily: "Open sans",
  },
  clBtnStyle:{
    marginLeft:"48px",
    merginTop:"25px" ,
  }
};
class CourseDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bckDisply: true,
    };
    this.handleBckClose = this.handleBckClose.bind(this);
    this.handleBckOpen = this.handleBckOpen.bind(this);
  }
  handleBckClose(){
    this.setState({
      bckDisply:false
    })
  }
  handleBckOpen(){
    this.setState({
      bckDisply:true
    })
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Backdrop open={this.state.bckDisply} className={classes.bckStyle}> 
        <Container className={classes.contStyle} maxWidth="md">
          <Grid container spacing={0}>
            <Grid item xs={12} sm={7} className={classes.gr1Style}>
              <Typography
                variant="h4"
                // component="h3"
                className={classes.cdTitle}
              >
                Learn{" "}
                <span style={{ fontWeight: "bolder", color: "#795548" }}>
                  Blockchain
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} >
              <Button
                variant="outlined"
                color="primary"
                size="large"
                className={classes.faBtn}
              >
                Financial Aid Available
              </Button>
            </Grid>
            <Grid item xs={12} sm={1}>
            <IconButton className={classes.clBtnStyle} onClick={this.handleBckClose}>
            <CloseIcon color="secondary" />
            </IconButton>
            </Grid>
            <Grid item xs={12} sm={4}>
              {/* ##################### ------>   Coursera card Action   <------ #####################*/}
              <Card elevation={4} className={classes.cardStyle}>
                <CardMedia
                  image={require("./Images/coursera.png")}
                  className={classes.cimgStyle}
                />
                <CardContent>
                  <Typography
                    variant="h3"
                    className={classes.courTitleStyle}
                    style={{ color: "#0D47A1", fontWeight: "bolder" }}
                  >
                    Coursera
                  </Typography>
                  <Typography variant="h4" className={classes.costStyle}>
                    Rs.2,300
                  </Typography>
                  <Typography variant="body1" className={classes.capStyle}>
                    Included with some extra packages
                  </Typography>

                  <Button variant="contained" className={classes.Cbtn1}>
                    Buy
                  </Button>
                  <br />
                  <Button variant="outlined" className={classes.Cbtn2}>
                    Add To Cart
                  </Button>
                  <br />
                </CardContent>
                <Divider />
                <CardActions>
                  <Button className={classes.sylBtnStyle}>
                    View Syllabus on website
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              {/* ##################### ------>   Udemy card Action   <------ #####################*/}
              <Card elevation={4} className={classes.cardStyle}>
                <CardMedia
                  image={require("./Images/udemy.png")}
                  className={classes.cimgStyle}
                />
                <CardContent>
                  <Typography
                    variant="h3"
                    className={classes.courTitleStyle}
                    style={{ color: "#d50000", fontWeight: "bolder" }}
                  >
                    Udemy
                  </Typography>
                  <Typography variant="h4" className={classes.costStyle}>
                    Rs.3,570
                  </Typography>
                  <Typography variant="body1" className={classes.capStyle}>
                    Included with some extra packages
                  </Typography>

                  <Button variant="contained" className={classes.Cbtn1}>
                    Buy
                  </Button>
                  <br />
                  <Button variant="outlined" className={classes.Cbtn2}>
                    Add To Cart
                  </Button>
                  <br />
                </CardContent>
                <Divider />
                <CardActions>
                  <Button className={classes.sylBtnStyle}>
                    View Syllabus on website
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              {/* ##################### ------>   Skillshare card Action   <------ #####################*/}
              <Card elevation={4} className={classes.cardStyle}>
                <CardMedia
                  image={require("./Images/skillshare.png")}
                  className={classes.cimgStyle}
                />
                <CardContent>
                  <Typography
                    variant="h3"
                    className={classes.courTitleStyle}
                    style={{ color: "black", fontWeight: "bolder" }}
                  >
                    Skill Share
                  </Typography>
                  <Typography variant="h4" className={classes.costStyle}>
                    Rs.8,839
                  </Typography>
                  <Typography variant="body1" className={classes.capStyle}>
                    Included with some extra packages
                  </Typography>

                  <Button variant="contained" className={classes.Cbtn1}>
                    Buy
                  </Button>
                  <br />
                  <Button variant="outlined" className={classes.Cbtn2}>
                    Add To Cart
                  </Button>
                  <br />
                </CardContent>
                <Divider />
                <CardActions>
                  <Button className={classes.sylBtnStyle}>
                    View Syllabus on website
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Typography
                varinat="caption"
                style={{
                  textAlign: "center",
                  marginTop: "9px",
                  color: "#607D8B",
                }}
              >
                Copyright &copy; 2020 Coursemaina Rights reserved{" "}
              </Typography>
            </Grid>
          </Grid>
        </Container>

        </Backdrop>
      </div>
    );
  }
}

CourseDetails.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(cdStyles)(CourseDetails);
