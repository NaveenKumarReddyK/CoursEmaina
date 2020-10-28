import React from "react";
import { withStyles } from "@material-ui/core/styles";
import propTypes from "prop-types";
import { Grid, Button, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const ErStyles = {
  gridContStyle: {
    backgroundColor: "#EEEEEE",
    width: "100%",
    height: "100vh",
  },
  mainTypo: {
    fontSize: "200px",
    fontWeight: "bolder",
    marginLeft: "500px",
    fontFamily: "Open sans",
  },
  sTypo: {
    fontSize: "60px",
    fontWeight: "bold",
    marginLeft: "450px",
    fontFamily: "Open sans",
  },
  btnStyle: {
    padding: "10px 20px ",
    fontSize: "20px",
    marginLeft: "580px",
    marginTop: "60px",
    fontFamily: "Open sans",
  },
};

class ErrorPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={0} className={classes.gridContStyle}>
          <Grid item xs={12}>
            <Typography className={classes.mainTypo}>404</Typography>
            <Typography className={classes.sTypo}>
              Page not found <span style={{ color: "red" }}>:(</span>{" "}
            </Typography>

            <Button
              variant="outlined"
              color="primary"
              startIcon={<ArrowBackIcon size="large" />}
              className={classes.btnStyle}
              href="/coursemaina/home"
            >
              Back to home
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

ErrorPage.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(ErStyles)(ErrorPage);
