import React from "react";
import propTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Button,
  FormControlLabel,
  Radio,
  Divider,
  RadioGroup,
} from "@material-ui/core";
import Q1 from "./LevelQuizJson/sdevQuiz.json";
import Q2 from "./LevelQuizJson/webQuiz.json";
import Q3 from "./LevelQuizJson/gamedevQuiz.json";
import Q4 from "./LevelQuizJson/uiQuiz.json";
import Q5 from "./LevelQuizJson/bigdataQuiz.json";
import Q6 from "./LevelQuizJson/swtestQuiz.json";
import Q7 from './LevelQuizJson/aiQuiz.json';

const lqStyles = {
  typoTitle: {
    fontFamily: "Open sans",
    textAlign: "center",
    padding: "20px 0px 20px 0px",
  },
  fGridStyle: {
    width: "100%",
  },
  mainBtn: {
    marginLeft: "15px",
    fontFamily: "Open sans",
    backgroundColor: "#536DFE",
    "&:hover": {
      backgroundColor: "#536DFE",
    },
  },
};

class LevelQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qType: "Q1",
    };
  }

  render() {
    const { classes } = this.props;

    const quizType = this.state.qType;
    let qTypeMap;
    if (quizType === "Q1") {
      qTypeMap = Q1;
    } else if (quizType === "Q2") {
      qTypeMap = Q2;
    } else if (quizType === "Q3") {
      qTypeMap = Q3;
    } else if (quizType === "Q4") {
      qTypeMap = Q4;
    } else if (quizType === "Q5") {
      qTypeMap = Q5;
    } else if (quizType === "Q6") {
      qTypeMap = Q6;
    } else if (quizType === "Q7") {
      qTypeMap = Q7;
    }

    return (
      <div>
        <Grid container spacing={1} className={classes.fGridStyle}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              component="h1"
              className={classes.typoTitle}
            >
              Select your field to kow your level
            </Typography>{" "}
            <Divider />
          </Grid>

          <Grid item xs={12} dividers>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.mainBtn}
              onClick={() => {
                this.setState({ qType: "Q1" });
              }}
            >
              Software Development
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.mainBtn}
              onClick={() => {
                this.setState({ qType: "Q2" });
              }}
            >
              Web Development
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.mainBtn}
              onClick={() => {
                this.setState({ qType: "Q3" });
              }}
            >
              Game Development
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.mainBtn}
              onClick={() => {
                this.setState({ qType: "Q4" });
              }}
            >
              UI/UX
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.mainBtn}
              onClick={() => {
                this.setState({ qType: "Q5" });
              }}
            >
              Big Data Analytics
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.mainBtn}
              onClick={() => {
                this.setState({ qType: "Q6" });
              }}
            >
              Software Testing
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.mainBtn}
              onClick={() => {
                this.setState({ qType: "Q7" });
              }}
            >
              AI/ML/NLP
            </Button>
          </Grid>

          <Grid item xs={12}></Grid>
          {qTypeMap.map((qdata, index) => {
            return (
              <Grid item xs={12} xs={3} style={{ marginLeft: "80px" }}>
                <Typography variant="h5">Q1.{qdata.question}</Typography>
                <RadioGroup
                  name={qdata.name}
                  value={this.state.q1}
                  onChange={(event) => {
                    this.setState({ q1: event.target.value });
                  }}
                >
                  <FormControlLabel
                    label={qdata.option1}
                    control={<Radio />}
                    value={qdata.option1}
                  />
                  <FormControlLabel
                    label={qdata.option2}
                    control={<Radio />}
                    value={qdata.option2}
                  />
                  <FormControlLabel
                    label={qdata.option3}
                    control={<Radio />}
                    value={qdata.option3}
                  />
                  <FormControlLabel
                    label={qdata.option4}
                    control={<Radio />}
                    value={qdata.option4}
                  />
                </RadioGroup>
                <Divider />
              </Grid>
            );
          })}
          <Grid item xs={12}>
            {" "}
          </Grid>
          <Grid item xs={12} sm={6}>
            {" "}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5">
              Click{" "}
              <Button variant="contained" color="secondary">
                here
              </Button>{" "}
              to know your level and take course accordingly
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

LevelQuiz.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(lqStyles)(LevelQuiz);
