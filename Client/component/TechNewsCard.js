import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Backdrop,
  Container,
  Grid,
  ButtonGroup,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import propTypes from "prop-types";
import WhatshotIcon from "@material-ui/icons/Whatshot";
const techNewsStyle = {
  cardStyle: {
    maxWidth: "450px",
    height: "160px",
    display: "flex",
    backgroundColor: "#E0F7FA",
    fontFamily: "Open sans",
  },
  imageStyle: {
    width: "70%",
    height: "100%",
  },
  cardContStyle: {
    width: "100%",
    heigth: "100%",
  },
  cardDivStyle: {
    display: "flex",
    flexDirection: "row",
    width: "60%",
  },
  btnStyle: {
    // postion: "absolute",
    marginLeft: "70px",
    marginTop: "40px",
  },
  backdropStyle: {
    zIndex: 1,
  },
  ifrStyle: {
    border: "0px",
    width: "100%",
    height: "100%",
  },
  gridStyle: {
    height: "600px",
  },
  btnGrpBtnStyle: {
    padding: "15px 40px",
    fontSize: "1.2rem",
  },
  btnGrpStyle: {
    marginTop: "100px",
  },
  cardTitleStyle: {
    textOverflow: "auto",
    fontFamily: "Open sans",
    marginTop: "10px",
    marginLeft: "20px",
  },
};
class TechNewsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backDrp: false,
      iframeUrl: this.props.tLink1,
    };
    this.backDrpOpen = this.backDrpOpen.bind(this);
    this.backDrpClose = this.backDrpClose.bind(this);
    this.clickArt2 = this.clickArt2.bind(this);
    this.clickArt3 = this.clickArt3.bind(this);
    this.clickArt4 = this.clickArt4.bind(this);
  }
  clickArt2() {
    this.setState({
      iframeUrl: this.props.tLink2,
    });
  }
  clickArt3() {
    this.setState({
      iframeUrl: this.props.tLink3,
    });
  }
  clickArt4() {
    this.setState({
      iframeUrl: this.props.tLink4,
    });
  }

  backDrpOpen() {
    this.setState({
      backDrp: true,
    });
  }

  backDrpClose() {
    this.setState({
      backDrp: false,
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Backdrop open={this.state.backDrp} className={classes.backdropStyle}>
          <Container maxWidth="lg">
            <Grid container spacing={6} className={classes.gridStyle}>
              <Grid item xs={12} sm={9}>
                <iframe
                  src={this.state.iframeUrl}
                  className={classes.ifrStyle}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <ButtonGroup
                  variant="contained"
                  orientation="vertical"
                  color="primary"
                  className={classes.btnGrpStyle}
                >
                  <Button
                    className={classes.btnGrpBtnStyle}
                    onClick={this.clickArt2}
                  >
                    Article 2
                  </Button>
                  <Button
                    className={classes.btnGrpBtnStyle}
                    onClick={this.clickArt3}
                  >
                    Article 3
                  </Button>
                  <Button
                    className={classes.btnGrpBtnStyle}
                    onClick={this.clickArt4}
                  >
                    Article 4
                  </Button>
                  <Button
                    className={classes.btnGrpBtnStyle}
                    href={this.props.tLinkMore}
                    target="_blank"
                  >
                    More...
                  </Button>
                  <Button
                    className={classes.btnGrpBtnStyle}
                    color="secondary"
                    onClick={this.backDrpClose}
                  >
                    Close
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Container>
        </Backdrop>

        <Card className={classes.cardStyle}>
          <CardMedia
            image={require(`${this.props.tcardImg}`)}
            className={classes.imageStyle}
          />{" "}
          <CardContent className={classes.cardContStyle}>
            <Grid container spacing={0}>
              <Grid item xs={12} className={classes.cardDivStyle}>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.cardTitleStyle}
                >
                  {this.props.tcardName}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btnStyle}
                  size="large"
                  onClick={this.backDrpOpen}
                  endIcon={<WhatshotIcon color="secondary" />}
                >
                  Article
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}

TechNewsCard.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(techNewsStyle)(TechNewsCard);
