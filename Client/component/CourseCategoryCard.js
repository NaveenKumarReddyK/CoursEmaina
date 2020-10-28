import React from "react";
import propTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Button, Typography, Grid, IconButton, Paper } from "@material-ui/core";

const CrCardStyles = {
  mainCardStyle: {
    width: "410px",
    height: "170px",
    backgroundColor: "#E0F7FA",
  },

  cActStyle: {
    width: "100%",
    height: "100%",
  },
  cBtnStyle: {
    width: "100%",
    height: "100%",
    fontFamily: "Open sans",
    fontSize: "40px",
    backgroundColor: (props) => props.ObjbckColor,
    "&:hover": {
      backgroundColor: (props) => props.ObjbckColor,
    },
  },
};

class CourseCategoryCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        {" "}
        <Paper className={classes.mainCardStyle} elevation={4}>
          <Grid container spacing={0} className={classes.mainCardStyle}>
            <Grid item xs={12} className={classes.cActStyle}>
              <Button
                variant="contained"
                color="primary"
                className={classes.cBtnStyle}
                size="large"
                href={this.props.ObjLink}
              >
                {this.props.ObjcTitle}
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

CourseCategoryCard.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(CrCardStyles)(CourseCategoryCard);
