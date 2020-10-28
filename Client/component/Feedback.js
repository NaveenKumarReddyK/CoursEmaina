import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  Snackbar,
  Paper,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import propTypes from "prop-types";

const feedbackStyles = {
  gridMargin: {
    marginBottom: "30px",
    marginLeft: "20px",
  },
  inputSize: {
    fontSize: "39px",
  },
  btnGrid: {
    marginTop: "30px",
  },
  btnCss: {
    padding: "10px 30px",
    fontSize: "15px",
  },
  cmntStyle: {
    width: "410px",
  },
};
class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sopen: false,
      name: "",
      email: "",
      cmnt: "",
      ckdValue: "",
    };
    this.feedSubmit = this.feedSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleCmnt = this.handleCmnt.bind(this);
    this.handleCkd = this.handleCkd.bind(this);
    
  }

  handleName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handleCmnt(event) {
    this.setState({
      cmnt: event.target.value,
    });
  }
  handleCkd(event) {
    this.setState({
      ckdValue: event.target.value,
    });
  }

  feedSubmit(event) {
    event.preventDefault();
    this.setState({
      sopen: true,
    });
    const feedData = {
      name: this.state.name,
      email: this.state.email,
      rating: this.state.ckdValue,
      comment: this.state.cmnt,
    };

    console.log(feedData);
    this.setState({
      name: "",
      email: "",
      cmnt: "",
      ckdValue: "",
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div style={{width:"100%"}}>
        <Snackbar
          open={this.state.sopen}
          message="Thank you for you valuable feedback"
          autoHideDuration={3000}
          onClose={() => {
            this.setState({ sopen: false });
          }}
        />
     
          <Container maxWidth="md">
            <Paper elevation={5} style={{ backgroundColor: "#B9F6CA" }}>
              <Grid container>
               
                <Grid item xs={8}>
                  <Typography
                    variant="h3"
                    component="h2"
                    style={{ marginLeft: "20px", marginTop: "10px" }}
                  >
                    Feedback
                  </Typography>

                  <Grid item xs={8} className={classes.gridMargin}>
                    {" "}
                    <TextField
                      label="Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleName}
                      fullWidth
                      placeholder="Enter your Name"
                      className={classes.inputSize}
                    />
                  </Grid>
                  <Grid item xs={8} className={classes.gridMargin}>
                    <TextField
                      label="Email"
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleEmail}
                      placeholder="Enter your Email"
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={4} className={classes.gridMargin}>
                    <TextField
                      label="Comment here"
                      multiline
                      rows={10}
                      variant="outlined"
                      fullWidth
                      className={classes.cmntStyle}
                      name="cmnt"
                      onChange={this.handleCmnt}
                      value={this.state.cmnt}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={3} >
                  <FormControl>
                    <Typography variant="h4" style={{ marginTop: "10px" }}>
                      Rate our service
                    </Typography>
                    <RadioGroup name="ckdValue" onChange={this.handleCkd}>
                      <FormControlLabel
                        value="Excellent"
                        checked={this.state.ckdValue === "Excellent"}
                        control={<Radio color="secondary" />}
                        label="Excellent"
                      />
                      <FormControlLabel
                        value="Very Good"
                        checked={this.state.ckdValue === "Very Good"}
                        control={<Radio color="secondary" />}
                        label="Very Good"
                      />
                      <FormControlLabel
                        value="Good"
                        checked={this.state.ckdValue === "Good"}
                        control={<Radio color="secondary" />}
                        label="Good"
                      />
                      <FormControlLabel
                        value="Ok"
                        checked={this.state.ckdValue === "Ok"}
                        control={<Radio color="secondary" />}
                        label="Ok"
                      />
                      <FormControlLabel
                        value="Not to the expectations"
                        checked={
                          this.state.ckdValue === "Not to the expectations"
                        }
                        control={<Radio color="secondary" />}
                        label="Not to the expectations"
                      />
                      <FormControlLabel
                        value="Bad"
                        checked={this.state.ckdValue === "Bad"}
                        control={<Radio color="secondary" />}
                        label="Bad"
                      />
                    </RadioGroup>
                  </FormControl>
                  <Grid xs={6} className={classes.btnGrid}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.btnCss}
                      onClick={this.feedSubmit}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Container>

      </div>
    );
  }
}

Feedback.propTypes = {
  classes: propTypes.object.isRequired,
};
export default withStyles(feedbackStyles)(Feedback);
