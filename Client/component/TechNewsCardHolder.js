import React from "react";
import propTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import TechNewsCard from "./TechNewsCard";
import tcnJson from "./TechNewsJson/TechNewsJsonFile.json";

const tnchStyles = {
  root: {
    backgroundColor: "#FFCCBC",
  },
  typoStyle: {
    textAlign: "center",
    color: "#673AB7",
    fontFamily: "Open sans",
  },
};
class TechNewsCardHolder extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Container maxWidth="xl" className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {" "}
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                component="h3"
                className={classes.typoStyle}
              >
                Tech News That Matters
              </Typography>
            </Grid>

            {tcnJson.map((tData, tIndex) => {
              return (
                <Grid item xs={12} sm={4} key={tIndex}>
                  <TechNewsCard
                    tcardName={tData.name}
                    tcardImg={tData.tImg}
                    tLink1={tData.article1}
                    tLink2={tData.article2}
                    tLink3={tData.article3}
                    tLink4={tData.article4}
                    tLinkMore={tData.moreLink}
                  />
                </Grid>
              );
            })}

            <Grid item xs={12}>
              {" "}
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

TechNewsCardHolder.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(tnchStyles)(TechNewsCardHolder);
