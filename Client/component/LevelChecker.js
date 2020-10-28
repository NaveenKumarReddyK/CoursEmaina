import React from "react";
import propTypes from "prop-types";
import { Grid, Button, Typography, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CourseCardHolder from "../component/CourseCardHolder";

const lvlChkrStyle = {
  girdStyle: {
    backgroundColor: "#E0F2F1",
    marginTop: "10px",
  },
  btnAdv: {
    backgroundColor: "#009688",
    color: "white",
    fontFamily: "Open sans",
    "&:hover": {
      backgroundColor: "#009688",
    },
  },
  btnDnt: {
    backgroundColor: "#689F38",
    fontFamily: "Open sans",
    "&:hover": {
      backgroundColor: "#689F38",
    },
  },
  typoCol1: {
    color: "#3F51B5",
    fontFamily: "Open sans",
  },
  typoCol2: {
    color: "#f44336",
    fontFamily: "Open sans",
  },
  typoCol3: {
    color: "#00796B",
    marginLeft: "-40px",
    fontFamily: "Open sans",
  },
  typoCol4: {
    color: "#388E3C",
    fontFamily: "Open sans",
  },
  typoCol0: {
    marginTop: "5px",
    fontFamily: "Open sans",
  },
};
class LevelChecker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lvlName: "Beginner",
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Container maxWidth="xl" fullWidth="xl" className={classes.girdStyle}>
          <Grid container spacing={3}>
            <Grid item xs={12} className={classes.typoCol0}>
              {" "}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h5"
                component="h2"
                className={classes.typoCol1}
              >
                I don't know any basics{" "}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    this.setState({ lvlName: "Beginner" });
                  }}
                >
                  Beginner
                </Button>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h5"
                component="h2"
                className={classes.typoCol2}
              >
                I am good at basics{" "}
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    this.setState({ lvlName: "Intermediate" });
                  }}
                >
                  Intermediate
                </Button>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h5"
                component="h2"
                className={classes.typoCol3}
              >
                I want to learn Advanced topics{" "}
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btnAdv}
                  onClick={() => {
                    this.setState({ lvlName: "Advanced" });
                  }}
                >
                  Advanced
                </Button>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              {" "}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h5"
                component="h2"
                className={classes.typoCol4}
              >
                Don't know which level you are.
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btnDnt}
                  href="/coursemaina/quiz"
                  target="_blank"
                >
                  Take this test
                </Button>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              {" "}
            </Grid>
          </Grid>
        </Container>

        <CourseCardHolder cLevelProps={this.state.lvlName} />
      </div>
    );
  }
}

LevelChecker.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(lvlChkrStyle)(LevelChecker);
