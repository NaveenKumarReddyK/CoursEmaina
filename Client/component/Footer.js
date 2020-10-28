import React from "react";
import {
  Container,
  Grid,
  IconButton,
  Typography,
  Link,
  List,
  ListItem,
 
  Backdrop,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import propTypes from "prop-types";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Feedback from "./Feedback";
import CloseIcon from "@material-ui/icons/Close";

const footerStyles = {
  contBG: {
    backgroundColor: "#CFD8DC",
  },
  typoFont: {
    fontFamily: "Open sans",
    fontWeight:"bold",
  },
  linkStyle: {
    color: "black",
  },
  copyRtStyle: {
    textAlign: "center",
  },
  iconPos: {
    position: "absolute",
    left: "79.5%",
    top: "15%",
    color: "black",
  },
  clIconStyle: {
    fontSize: "30px",
  },
};
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bckOpen: false,
    };
    this.handleFeedOpen = this.handleFeedOpen.bind(this);
    this.bckClose = this.bckClose.bind(this);
  }
  handleFeedOpen() {
    this.setState({
      bckOpen: true,
    });
  }
  bckClose(){
    this.setState({
      bckOpen: false,
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Backdrop
          open={this.state.bckOpen}
          style={{ zIndex: "1", width: "100%", height: "100%" }}
        >
          <IconButton className={classes.iconPos} onClick={this.bckClose}>
            <CloseIcon className={classes.clIconStyle} />
          </IconButton>
          <Feedback />
        </Backdrop>
        <Container maxWidth="xl" className={classes.contBG}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography
                className={classes.typoFont}
                component="h1"
                variant="h4"
              >
                Coursemaina
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <List>
                <ListItem>
                  <Typography
                    className={classes.typoFont}
                    variant="h6"
                    
                  >
                    About Us
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    className={classes.typoFont}
                    variant="h6"
                    component="h2"
                  >
                    Contact Us
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    className={classes.typoFont}
                    variant="h6"
                    component="h2"
                  >
                    <Link
                      underline="none"
                      href="javascript:void(0)"
                      className={classes.linkStyle}
                      onClick={this.handleFeedOpen}
                    >
                      Feedback
                    </Link>
                  </Typography>
                </ListItem>
                <ListItem></ListItem>
              </List>
            </Grid>
            <Grid item xs={3}>
              <List>
                <ListItem>
                  <Typography
                    className={classes.typoFont}
                    variant="h6"
                    component="h2"
                  >
                    Updates
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    className={classes.typoFont}
                    variant="h6"
                    component="h2"
                  >
                    Versions
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    className={classes.typoFont}
                    variant="h6"
                    component="h2"
                  >
                    FAQ's
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={2}>
              <List>
                <ListItem>
                  <Typography
                    className={classes.typoFont}
                    variant="h6"
                    component="h2"
                  >
                    Company
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    className={classes.typoFont}
                    variant="h6"
                    component="h2"
                  >
                    Learning
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    className={classes.typoFont}
                    variant="h6"
                    component="h2"
                  >
                    Sponsers
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={4}>
              <List>
                <ListItem>
                  <Typography
                    className={classes.typoFont}
                    variant="h6"
                    component="h1"
                  >
                    Follow us on{" "}
                  </Typography>
                </ListItem>
                <ListItem>
                  <IconButton>
                    <Link
                      href="https://www.facebook.com/"
                      target="_blank"
                      // rel="noreferer noopener"
                    >
                      {" "}
                      <FacebookIcon
                        style={{ fontSize: "50", color: "#3F51B5" }}
                      />
                    </Link>
                  </IconButton>
                  <IconButton>
                    <Link
                      href="https://www.linkedin.com/"
                      target="_blank"
                      // rel="noreferer noopener"
                    >
                      <LinkedInIcon
                        style={{ fontSize: "50", color: "#1565C0" }}
                      />
                    </Link>
                  </IconButton>
                  <IconButton>
                    <Link
                      href="https://www.github.com/"
                      target="_blank"
                      // rel="noreferer noopener"
                    >
                      <GitHubIcon
                        style={{ fontSize: "45", color: "#212121" }}
                      />
                    </Link>
                  </IconButton>
                  <IconButton>
                    <Link
                      href="https://www.twitter.com/"
                      target="_blank"
                      // rel="noreferer noopener"
                    >
                      <TwitterIcon
                        style={{ fontSize: "50", color: "#4FC3F7" }}
                      />
                    </Link>
                  </IconButton>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" className={classes.copyRtStyle}>
                Copyright &copy; Coursemaina 2020 all rights reserved
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: propTypes.object.isRequired,
};
export default withStyles(footerStyles)(Footer);
