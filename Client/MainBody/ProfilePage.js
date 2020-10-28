import React from "react";
import propTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import {
  AppBar,
  Grid,
  Button,
  Typography,
  ListItem,
  List,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ProfileDiv from "../component/profileDivs/profileDiv";
import SavedDiv from "../component/profileDivs/savedDiv";
import PurchasedCourseDetails from "../component/profileDivs/purchasedCourses";
const prPgStyles = {
  appBarStyle: {
    height: "80px",
    width: "100%",
    position: "relative",
    backgroundColor: "#7C4DFF",
  },
  mainGrid: {
    width: "100%",
    height: "100%",
  },
  imgStyle: {
    width: "100%",
    height: "100%",
  },
  pTitleStyle: {
    fontFamily: "Open sans",
    marginTop: "14px",
    marginLeft: "60px",
  },
  hBtn: {
    marginTop: "20px",
    backgroundColor: "#4caf50",
    color: "white",
    fontFamily: "Open sans",
    "&:hover": {
      backgroundColor: "#4caf50",
    },
  },
  cBtn: {
    marginTop: "20px",
    marginLeft: "30px",
    backgroundColor: "#1E88E5",
    color: "white",
    fontFamily: "Open sans",
    "&:hover": {
      backgroundColor: "#1E88E5",
    },
  },
  lBtn: {
    marginTop: "20px",
    marginLeft: "30px",
    backgroundColor: "#F57C00",
    color: "white",
    fontFamily: "Open sans",
    "&:hover": {
      backgroundColor: "#FF5722",
    },
  },
  cont1: {
    width: "30%",
    height: "100px",
    display: "flex",
    flexDirection: "column",
  },
  cont2: {
    width: "70%",
    height: "100px",
    display: "flex",
    flexDirection: "column",
  },
};

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      componenetName: "ProfileDiv",
      profileName: "",
      profileEmail: "",
    };
    this.logoutAction = this.logoutAction.bind(this);
  }

  // ###################################################
  componentDidMount() {
    axios
      .get("http://localhost:4000/coursemaina/checking/isloggedin", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then((resLogData) => {
        const msg = resLogData.data.Login_Msg;
        if (msg === "User not LoggedIn") {
          window.location.href = "http://localhost:3000/coursemaina/login";
        }
        axios
          .get("http://localhost:4000/coursemaina/auth/getuserdata", {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
          })
          .then((resUserData) => {
            const userName = resUserData.data.UserData.name;
            const userEmail = resUserData.data.UserData.email;
            this.setState({
              profileName: userName,
              profileEmail: userEmail,
            });
          })
          .catch((err) => {
            console.log(err);
          });
        console.log(msg);
      })
      .catch((err) => {
        console.log("Error" + err);
      });
  }
  //####################################################

  //#########################################################################################

  logoutAction() {
    axios
      .get("http://localhost:4000/coursemaina/auth/logout", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then((resData) => {
        const logoutResponse = resData.data.LogoutMsg;
        console.log(resData);
        if (logoutResponse === "Successfuly logged out") {
          window.location.href = "http://localhost:3000/coursemaina/home";
        }
      });
  }

  //#########################################################################################

  render() {
    const { classes } = this.props;

    //conditional rendering ######################################
    const cTypes = this.state.componenetName;
    let renderComponent;
    if (cTypes === "ProfileDiv") {
      renderComponent = (
        <ProfileDiv
          name={this.state.profileName}
          email={this.state.profileEmail}
        />
      );
    } else if (cTypes === "SavedDiv") {
      renderComponent = <SavedDiv />;
    } else if (cTypes === "PurchasedCourseDetails") {
      renderComponent = <PurchasedCourseDetails />;
    }
    // ##############################################################

    return (
      <div>
        <AppBar className={classes.appBarStyle}>
          <Grid container spacing={0} className={classes.mainGrid}>
            <Grid item xs={2} className={classes.mainGrid}>
              <img
                src={require("../component/Images/clogo.jpg")}
                className={classes.imgStyle}
                alt="Logo Image"
              />
            </Grid>
            <Grid item xs={5}>
              <Typography variant="h3" className={classes.pTitleStyle}>
                User Profile
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Button
                variant="contained"
                className={classes.hBtn}
                size="large"
                endIcon={<HomeIcon />}
                href="/coursemaina/home"
              >
                Home
              </Button>
              <Button
                variant="contained"
                className={classes.cBtn}
                size="large"
                endIcon={<ShoppingCartIcon />}
                href="/coursemaina/cart"
              >
                Cart
              </Button>
              <Button
                variant="contained"
                className={classes.lBtn}
                size="large"
                endIcon={<ExitToAppIcon />}
                onClick={this.logoutAction}
              >
                Logout
              </Button>
            </Grid>
          </Grid>
        </AppBar>
        <Grid container spacing={0}>
          <Grid item xs={3} style={{ backgroundColor: "#FFFDE7" }}>
            <Grid item xs={12}>
              <List>
                <ListItem>
                  <Typography
                    variant="h3"
                    style={{ fontFamily: "Open sans", color: "#4DB6AC" }}
                  >
                    Actions
                  </Typography>
                </ListItem>
                <ListItem>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    onClick={() => {
                      this.setState({ componenetName: "ProfileDiv" });
                    }}
                  >
                    Profile Data
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    onClick={() => {
                      this.setState({ componenetName: "SavedDiv" });
                    }}
                  >
                    Saved for Later
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                    Liked Courses
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    onClick={() => {
                      this.setState({
                        componenetName: "PurchasedCourseDetails",
                      });
                    }}
                  >
                    Purchased
                  </Button>
                </ListItem>
                <ListItem> </ListItem>
                <ListItem> </ListItem>
                <ListItem> </ListItem>
                <ListItem>
                  <Typography variant="h5" style={{ fontFamily: "Open sans" }}>
                    <Button variant="outlined" color="secondary">
                      Subscribe
                    </Button>{" "}
                    to our news Letter
                  </Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Grid item xs={9} style={{ backgroundColor: "#E1F5FE" }}>
            {renderComponent}
          </Grid>
        </Grid>
      </div>
    );
  }
}

ProfilePage.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(prPgStyles)(ProfilePage);
