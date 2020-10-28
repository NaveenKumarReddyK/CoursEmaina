import React from "react";
import { withStyles } from "@material-ui/core/styles";
import propTypes from "prop-types";
import axios from "axios";
import {
  Container,
  Grid,
  Button,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Snackbar,
} from "@material-ui/core";

const signUpStyles = {
  gridWd: {
    width: "410px",
    border: "1px solid black",
    marginTop: "30px",
    borderRadius: "3px",
    marginLeft: "100px",
    backgroundColor: "#ECEFF1",
  },
};

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      isChecked: true,
      snackOpen: false,
      snackMsg: "",
    };
    this.nameChange = this.nameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.pwdChange = this.pwdChange.bind(this);
    this.cpwdChange = this.cpwdChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.submitSignupForm = this.submitSignupForm.bind(this);
  }

  nameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  emailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }
  pwdChange(event) {
    this.setState({
      password: event.target.value,
    });
  }
  cpwdChange(event) {
    this.setState({
      confirmPassword: event.target.value,
    });
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      isChecked: true,
      snackOpen: false,
      snackMsg: "Form reset called",
    });
  }

  submitSignupForm(event) {
    event.preventDefault();
    if (!this.state.isChecked) {
      this.setState({
        snackOpen: true,
        snackMsg: "Accept terms and conditions",
      });
    } else {
      const signupData = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
      };

      axios
        .post(" http://localhost:4000/coursemaina/auth/signup", signupData, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        })
        .then((resData) => {
          console.log(resData);
          const sgRes = resData.data.Message;
          if (sgRes === "Sucessfuly signed up") {
            this.setState({
              snackOpen: true,
              snackMsg: "Sucessfuly Signed Up,Please login to access te site",
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
              isChecked: true,
            });
            window.location.href = "http://localhost:3000/coursemaina/login";
          }
        })
        .catch((err) => {
          this.setState({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            isChecked: true,
            snackOpen: true,
            snackMsg: "Please enter data in the valid data format",
          });
        });
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Snackbar
          open={this.state.snackOpen}
          message={this.state.snackMsg}
          autoHideDuration={3000}
          onClose={() => {
            this.setState({ snackOpen: false });
          }}
        />
        <form onSubmit={this.submitSignupForm}>
          <Container maxWidth="sm">
            <Grid container spacing={0} className={classes.gridWd} spacing={4}>
              <Grid item xs={12} sm={4}></Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h4" style={{ fontFamly: "Open sans" }}>
                  SignUp
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}></Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="text"
                  label="FullName"
                  name="name"
                  value={this.state.name}
                  onChange={this.nameChange}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="email"
                  label="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.emailChange}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="password"
                  label="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.pwdChange}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="password"
                  label="Confirm Password"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.cpwdChange}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      checked={this.state.isChecked}
                      onChange={(event) => {
                        this.setState({ isChecked: event.target.checked });
                      }}
                    />
                  }
                  label="Accept terms and conditions"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  fullWidth
                  onClick={this.resetForm}
                >
                  {" "}
                  Reset
                </Button>
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
                  SignUp
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Link href="/coursemaina/login">
                  <Typography variant="button">
                    Already have account? Login
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

SignUpPage.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(signUpStyles)(SignUpPage);
