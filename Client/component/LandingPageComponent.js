import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Container,
  Button,
  Grid,
  Typography,
  Dialog,
  DialogContent,
} from "@material-ui/core";
import propTypes from "prop-types";

const lpcStyles = {
  gridStyle: {
    height: "350px",
    backgroundColor: "#B9F6CA",
  },
  imgStyle: {
    height: "100%",
    width: "100%",
  },
  mainTitleStyle: {
    fontFamily: "Open sans",
    marginTop: "20px",
    marginLeft: "20px",
  },
  subHeadStyle: {
    fontFamily: "Open sans",
    marginTop: "10px",
    marginLeft: "40px",
    color: "#5D4037",
  },
  learnbtnStyle: {
    fontFamily: "Open sans",
    padding: "10px 30px",
    fontSize: "30px",
    backgroundColor: "#ef5350",
    "&:hover": {
      backgroundColor: "#ef5350",
    },
  },
  tPart1: {
    color: "#009688",
  },
  tPart2: {
    color: "#FF5722",
    fontSize: "135px",
    padding: "0px",
  },
  tPart3: {
    color: "#5C6BC0",
  },
};

class LandingPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dOpen: false,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          open={this.state.dOpen}
          maxWidth="sm"
          onClose={() => {
            this.setState({ dOpen: false });
          }}
        >
          <DialogContent>
            <Typography
              variant="h1"
              component="h3"
              style={{ textAlign: "center" }}
            >
              <span className={classes.tPart2}>E</span> for EVERYTHING
            </Typography>
          </DialogContent>
        </Dialog>
        <Container maxWidth="xl" className={classes.gridStyle}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={7}>
              <Typography
                variant="h1"
                component="h3"
                className={classes.mainTitleStyle}
              >
                <span className={classes.tPart1}>COURS</span>

                <Button
                  variant="contained"
                  color="primary"
                  className={classes.tPart2}
                  onClick={() => {
                    this.setState({ dOpen: true });
                  }}
                >
                  E
                </Button>
                <span className={classes.tPart3}>MAINA</span>
              </Typography>
            </Grid>{" "}
            <Grid item xs={12} sm={5}></Grid>
            <Grid item xs={12} sm={7}>
              <Typography variant="h3" className={classes.subHeadStyle}>
                One stop to all you courses ...
              </Typography>
            </Grid>{" "}
            <Grid item xs={12} sm={5}>
              {" "}
              <Button variant="contained" className={classes.learnbtnStyle}>
                Start learning Now
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

LandingPageComponent.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(lpcStyles)(LandingPageComponent);
