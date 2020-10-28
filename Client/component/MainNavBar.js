import React from "react";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import {
  Grid,
  AppBar,
  Button,
  Select,
  Typography,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  MenuItem,
  IconButton,
  InputLabel,
} from "@material-ui/core";
import propTypes from "prop-types";
import SendIcon from "@material-ui/icons/Send";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const MNBStyles = {
  root: {
    height: "80px",
    position: "relative",
  },
  logoStyle: {
    width: "100%",
    height: "100%",
  },
  linkStyle: {
    color: "#FBE9E7",
    fontFamily: "Open sans",
  },
  linkBtnStyle: {
    fontSize: "20px",
  },
  ulStyle: {
    listStyleType: "none",
  },

  liStyle: {
    float: "left",
    marginLeft: "40px",
    marginTop: "4px",
  },
  sendIconStyle: {
    position: "absolute",
    left: "80%",
  },
  selectLength: {
    width: "60%",
  },
  sgnBtn: {
    marginTop: "23px",
    backgroundColor: "#4CAF50",
    color: "white",
    "&:hover": {
      backgroundColor: "#4CAF50",
    },
  },
  gtsBtn: {
    marginTop: "23px",
    marginLeft: "20px",
    backgroundColor: "#FF5722",
    "&:hover": {
      backgroundColor: "#FF5722",
    },
  },
};

class MainNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dOpen: false,
      cOption: "",
      logBtn: "",
    };
    this.handledOpen = this.handledOpen.bind(this);
    this.handledClose = this.handledClose.bind(this);
    this.handlecOption = this.handlecOption.bind(this);
    this.logoutAction = this.logoutAction.bind(this);
  }
  handlecOption(event) {
    this.setState({
      cOption: event.target.value,
    });
  }
  handledOpen() {
    this.setState({
      dOpen: true,
    });
  }
  handledClose() {
    this.setState({
      dOpen: false,
    });
  }

  //#########################################################################################
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
        console.log(resLogData);
        if (msg === "User LoggedIN") {
          this.setState({ logBtn: "Logout" });
          console.log(msg);
        } else if (msg === "User not LoggedIn") {
          this.setState({ logBtn: "Login" });
          console.log(msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
    const logType = this.state.logBtn;
    let logRenderComponent;
    if (logType === "Login") {
      logRenderComponent = (
        <Button
          variant="contained"
          className={classes.sgnBtn}
          size="large"
          href="/coursemaina/login"
          target="_self"
          endIcon={<LockOpenIcon />}
        >
          Login
        </Button>
      );
    } else if (logType === "Logout") {
      logRenderComponent = (
        <Button
          variant="contained"
          className={classes.sgnBtn}
          size="large"
          onClick={this.logoutAction}
          endIcon={<ExitToAppIcon />}
        >
          Logout
        </Button>
      );
    }
    //#########################################################################################
    return (
      <div>
        {/* Dialog to selecet the type of are to learn from  */}

        <Dialog
          maxWidth="sm"
          open={this.state.dOpen}
          onClose={this.handledClose}
        >
          <DialogTitle>Selet the category you want ot learn</DialogTitle>
          <DialogContent dividers>
            <InputLabel>Choose your are of interest</InputLabel>
            <Select
              fullWidth
              className={classes.selectLength}
              value={this.state.cOption}
              onChange={this.handlecOption}
            >
              <MenuItem value="WebDev">Web Development</MenuItem>
              <MenuItem value="SofDev">Software Dev</MenuItem>
              <MenuItem value="GameDev">Game Development</MenuItem>
              <MenuItem value="UI">UI/UX Courses</MenuItem>
              <MenuItem value="BigData">Big Data Analytics</MenuItem>
              <MenuItem value="Testing">Testing</MenuItem>
              <MenuItem value="Ai">AI/ML/NLP</MenuItem>
            </Select>{" "}
            <IconButton
              className={classes.sendIconStyle}
              size="large"
              color="secondary"
            >
              <SendIcon />
            </IconButton>
          </DialogContent>
        </Dialog>

        <AppBar className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={2} style={{ height: "80px" }}>
              <img
                src={require("./Images/clogo.jpg")}
                className={classes.logoStyle}
              />
            </Grid>
            <Grid item xs={7}>
              <ul className={classes.ulStyle}>
                <li className={classes.liStyle}>
                  {" "}
                  <Typography variant="h4" component="h1">
                    <Link
                      href="javascript:void(0)"
                      onClick={this.preventDefault}
                      className={classes.linkStyle}
                      underline="none"
                    >
                      Home
                    </Link>
                  </Typography>
                </li>
                <li className={classes.liStyle}>
                  {" "}
                  <Typography variant="h4" component="h1">
                    <Link
                      href="javascript:void(0)"
                      onClick={this.preventDefault}
                      className={classes.linkStyle}
                      underline="none"
                      onClick={this.handledOpen}
                    >
                      Categories
                    </Link>
                  </Typography>
                </li>
                <li className={classes.liStyle}>
                  {" "}
                  <Typography variant="h4" component="h1">
                    <Link
                      href="javascript:void(0)"
                      onClick={this.preventDefault}
                      className={classes.linkStyle}
                      underline="none"
                    >
                      Tech News
                    </Link>
                  </Typography>
                </li>
                <li className={classes.liStyle}>
                  {" "}
                  <Typography variant="h4" component="h1">
                    <Link
                      href="javascript:void(0)"
                      onClick={this.preventDefault}
                      className={classes.linkStyle}
                      underline="none"
                    >
                      Trending
                    </Link>
                  </Typography>
                </li>
              </ul>
            </Grid>

            <Grid item xs={3}>
              {" "}
              {logRenderComponent}
              <Button
                variant="contained"
                className={classes.gtsBtn}
                size="large"
              >
                Getting Started
              </Button>
            </Grid>
          </Grid>
        </AppBar>
      </div>
    );
  }
}

MainNavBar.propTypes = {
  classes: propTypes.object.isRequired,
};
export default withStyles(MNBStyles)(MainNavBar);
