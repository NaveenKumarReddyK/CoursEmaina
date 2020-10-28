import React from "react";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import propTypes from "prop-types";
import {
  Container,
  Grid,
  Button,
  Typography,
  TextField,
  Link,
  Snackbar,
} from "@material-ui/core";

const loginStyles = {
  gridWd: {
    width: "410px",
    border: "1px solid black",
    marginTop: "30px",
    borderRadius: "6px",
    marginLeft: "100px",
    backgroundColor: "#FFFDE7",
  },
};

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      snackOpen: false,
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePwd = this.handlePwd.bind(this);
    this.submitLoginData = this.submitLoginData.bind(this);
    this.snackbarClose = this.snackbarClose.bind(this);
  }

  snackbarClose() {
    this.setState({
      snackOpen: false,
    });
  }
  handleEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  handlePwd(event) {
    this.setState({
      password: event.target.value,
    });
  }
  //############################################################################
  componentWillMount() {
    axios
      .get("http://localhost:4000/coursemaina/checking/isloggedin", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then((resLogData) => {
        const msg = resLogData.data.Login_Msg;
        console.log(resLogData); //
        console.log("hi");
        if (msg === "User LoggedIN") {
          window.location.href = "http://localhost:3000/coursemaina/home";
        }
      })
      .catch((err) => {
        console.log("Error" + err);
      });
  }

  //############################################################################

  submitLoginData(event) {
    event.preventDefault();
    const loginUserData = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("http://localhost:4000/coursemaina/auth/login", loginUserData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then((loginRes) => {
        console.log(loginRes);
        console.log(loginUserData);
        const resMsg = loginRes.data.Login_Message;
        console.log(resMsg);
        if (resMsg === "Successfuly logged in ") {
          this.setState({
            snackOpen: true,
            snackbarMessage: "SUCCESSFULY LOGGED-IN ",
            email: "",
            password: "",
          });
          window.location.href = "http://localhost:3000/coursemaina/home";
        }
      })
      .catch((err) => {
        console.log("Error === " + err);
        this.setState({
          snackOpen: true,
          snackbarMessage: "INVALID CREDENTIALS ",
        });
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Snackbar
          open={this.state.snackOpen}
          autoHideDuration={3000}
          onClose={this.snackbarClose}
          message={this.state.snackbarMessage}
        />
        <form onSubmit={this.submitLoginData}>
          <Container maxWidth="sm">
            <Grid container spacing={0} className={classes.gridWd} spacing={4}>
              <Grid item xs={12} sm={4}></Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h4" style={{ fontFamly: "Open sans" }}>
                  Login
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}></Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="email"
                  label="Email"
                  name="email"
                  onChange={this.handleEmail}
                  value={this.state.email}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="password"
                  label="Password"
                  name="password"
                  onChange={this.handlePwd}
                  value={this.state.password}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                {""}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  type="submit"
                >
                  {" "}
                  Login
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Link href="/coursemaina/signup">
                  <Typography variant="button">
                    {" "}
                    Don't have account? signup
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </form>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(loginStyles)(LoginPage);
