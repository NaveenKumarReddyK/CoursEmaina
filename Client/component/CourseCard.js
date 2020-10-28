import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  Snackbar,
  Link,
  Divider,
  IconButton,
  Backdrop,
  Container,
  Grid,
} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LinkIcon from "@material-ui/icons/Link";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BookmarkIcon from "@material-ui/icons/Bookmark";

const cardStyles = {
  root: {
    maxWidth: "290px",
    // marginTop: "10px",
    // marginLeft: "10px",
  },
  media: {
    height: "190px",
  },
  buttonPadding: {
    backgroundColor: "#4CAF50",
    color: "white",
    "&:hover": {
      backgroundColor: "#4CAF50",
    },
  },
  courseTitleStyle: {
    textOverflow: "hidden",
    fontFamily: "Open sans",
  },
  typeStyle: {
    color: "#3F51B5",
  },
  syllStyle: {
    marginLeft: "30%",
  },
  priceStyle: {
    color: "#FF3D00",
  },
  likeIconStyle: {
    color: "red",
  },
  bookmarkStyle: {
    color: "#9C27B0",
  },
  bckStyle: {
    zIndex: "2",
  },
  contStyle: {
    marginTop: "2px",
    backgroundColor: "#E3F2FD",
    borderRadius: "3px",
  },
  cdTitle: {
    padding: "20px 30px",
    fontFamily: "Open sans",
    fontWeigth: "bolder",
  },
  faBtn: {
    marginTop: "20px",
  },
  gr1Style: {
    height: "80px",
  },
  cardStyle: {
    maxWidth: "290px",
    marginTop: "10px",
  },
  cimgStyle: {
    width: "100%",
    height: "120px",
  },
  courTitleStyle: {
    textAlign: "center",
    fontFamily: "Open sans",
  },
  costStyle: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "Open sans",
  },
  capStyle: {
    color: "brown",
    textAlign: "center",
    fontFamily: "Open sans",
  },
  Cbtn1: {
    marginLeft: "26px",
    marginTop: "20px",
    padding: "9px 80px",
    fontFamily: "Open sans",
    fontSize: "20px",
    backgroundColor: "#43A047",
    "&:hover": {
      backgroundColor: "#43A047",
    },
  },
  Cbtn2: {
    marginTop: "10px",
    marginLeft: "26px",
    padding: "9px 32px",
    fontFamily: "Open sans",
    fontSize: "20px",
    backgroundColor: "#f44336",
    "&:hover": {
      backgroundColor: "#f44336",
    },
  },
  sylBtnStyle: {
    marginLeft: "32px",
    color: "blue",
    fontFamily: "Open sans",
  },
  clBtnStyle: {
    marginLeft: "48px",
    merginTop: "25px",
  },
};

class CourseCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      d_open: false,
      isLiked: false,
      isBookMarked: false,
      sopen: false,
      bckDisply: false,
      snackMsg: "",
    };
    this.dialogClose = this.dialogClose.bind(this);
    this.dialogOpen = this.dialogOpen.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
    this.handleBookMarkOpen = this.handleBookMarkOpen.bind(this);
    this.snackClose = this.snackClose.bind(this);
    this.handleBckClose = this.handleBckClose.bind(this);
    this.handleBckOpen = this.handleBckOpen.bind(this);
    this.addToCart_Coursera = this.addToCart_Coursera.bind(this);
    this.addToCart_Udemy = this.addToCart_Udemy.bind(this);
    this.addToCart_SkillShare = this.addToCart_SkillShare.bind(this);
    this.bookmarkItem = this.bookmarkItem.bind(this);
  }
  handleBckClose() {
    this.setState({
      bckDisply: false,
    });
  }
  handleBckOpen() {
    this.setState({
      bckDisply: true,
    });
  }

  handleBookMarkOpen() {
    this.setState({
      isBookMarked: false,
    });
  }

  handleDislike() {
    this.setState({
      isLiked: false,
    });
  }
  handleLike() {
    this.setState({
      isLiked: true,
    });
  }
  dialogOpen() {
    this.setState({
      d_open: true,
    });
  }
  dialogClose() {
    this.setState({
      d_open: false,
    });
  }
  snackClose() {
    this.setState({
      sopen: false,
    });
  }

  //######################--------ADD TO CART COURSERA ITEM ----------#############################
  addToCart_Coursera() {
    const adcBody = {
      item_Id: this.props.courseId,
      c_Provider: "Coursera",
    };
    console.log(adcBody);
    axios
      .post(
        "http://localhost:4000/coursemaina/cartactions/addtocart",
        adcBody,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        }
      )
      .then((resData) => {
        console.log(resData);
        const confirmMsg = resData.data.CartMessage;
        if (confirmMsg === "Item added successfuly to the cart") {
          this.setState({
            sopen: true,
            snackMsg: "Succesfuly added to Cart",
          });
        } else if (confirmMsg === "Item already exists in the Cart") {
          this.setState({
            sopen: true,
            snackMsg: "Course already exists in Cart",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //#################################################################################

  //######################--------ADD TO CART UDEMY ITEM ----------#############################
  addToCart_Udemy() {
    const adcBody = {
      item_Id: this.props.courseId,
      c_Provider: "Udemy",
    };
    axios
      .post(
        "http://localhost:4000/coursemaina/cartactions/addtocart",
        adcBody,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        }
      )
      .then((resData) => {
        console.log(resData);
        const confirmMsg = resData.data.CartMessage;
        if (confirmMsg === "Item added successfuly to the cart") {
          this.setState({
            sopen: true,
            snackMsg: "Succesfuly added to Cart",
          });
        } else if (confirmMsg === "Item already exists in the Cart") {
          this.setState({
            sopen: true,
            snackMsg: "Course already exists in Cart",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //#################################################################################

  //######################--------ADD TO CART SKILL SHARE ITEM ----------#############################
  addToCart_SkillShare() {
    const adcBody = {
      item_Id: this.props.courseId,
      c_Provider: "SkillShare",
    };
    console.log(adcBody);
    axios
      .post(
        "http://localhost:4000/coursemaina/cartactions/addtocart",
        adcBody,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        }
      )
      .then((resData) => {
        console.log(resData);
        const confirmMsg = resData.data.CartMessage;
        if (confirmMsg === "Item added successfuly to the cart") {
          this.setState({
            sopen: true,
            snackMsg: "Succesfuly added to Cart",
          });
        } else if (confirmMsg === "Item already exists in the Cart") {
          this.setState({
            sopen: true,
            snackMsg: "Course already exists in Cart",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //####################################################
  bookmarkItem() {
    const BMbody = {
      item_Id: this.props.courseId,
    };
    axios
      .post("http://localhost:4000/coursemaina/bookmark/bookmarkitem", BMbody, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then((resBM) => {
        if (resBM.data.AddItemError === "You already saved this item") {
          this.setState({
            isBookMarked: true,
            sopen: true,

            snackMsg: "You already saved this item",
          });
        } else if (resBM.data.Confirm === "Item saved successfuly ") {
          this.setState({
            isBookMarked: true,
            sopen: true,
            snackMsg: "Course Bookmarked Succesfuly",
          });
        }
      })
      .catch((BMerr) => {
        this.setState({
          isBookMarked: false,
          sopen: true,
          snackMsg: "Error while bookmarking",
        });
      });
  }
  //#################################################################################

  render() {
    const { classes } = this.props;
    return (
      <div style={{ marginTop: "10px" }}>
        <Snackbar
          open={this.state.sopen}
          autoHideDuration={3000}
          onClose={this.snackClose}
          message={this.state.snackMsg}
        />
        <Dialog
          maxWidth="sm"
          fullWidth="sm"
          open={this.state.d_open}
          onClose={this.dialogClose}
        >
          <DialogTitle>
            <Typography variant="h5" component="h2">
              Share
              <IconButton
                style={{ position: "absolute", right: "5px", top: "4px" }}
                onClick={this.dialogClose}
              >
                <CloseIcon />
              </IconButton>
            </Typography>
          </DialogTitle>
          <DialogContent dividers>
            <IconButton
              href="https://www.facebook.com/https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/coursemaina/webdev"
              target="_blank"
              // rel="noreferer noopener"
            >
              <FacebookIcon style={{ fontSize: "60", color: "#3F51B5" }} />
            </IconButton>
            <IconButton
              href="whatsapp://send?text=http://localhost:3000/coursemaina/webdev"
              target="_blank"
            >
              <WhatsAppIcon style={{ fontSize: "60", color: "#2E7D32" }} />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/?url=http://localhost:3000/coursemaina/webdev"
              target="_blank"
            >
              <InstagramIcon style={{ fontSize: "60", color: "#6D4C41" }} />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/shareArticle?mini=true&url=http://localhost:3000/coursemaina/webdev"
              target="_blank"
            >
              <LinkedInIcon style={{ fontSize: "60", color: "#1565C0" }} />
            </IconButton>

            <IconButton
              href="https://twitter.com/home?status=http://localhost:3000/coursemaina/webdev"
              target="_blank"
            >
              <TwitterIcon style={{ fontSize: "60", color: "#4FC3F7" }} />
            </IconButton>
            <IconButton>
              <LinkIcon style={{ fontSize: "60", color: "#212121" }} />
            </IconButton>
          </DialogContent>
        </Dialog>
        <Card className={classes.root} elevation={4}>
          <CardMedia
            className={classes.media}
            image={require(`${this.props.cardImg}`)}
            title={this.props.cardImg}
          />
          <CardContent style={{ backgroundColor: "#E1F5FE" }}>
            <Typography
              variant="h5"
              component="h4"
              gutterBottom
              className={classes.courseTitleStyle}
            >
              {this.props.name}
            </Typography>
            <Typography
              variant="body1"
              component="h2"
              className={classes.typeStyle}
              gutterBottom
            >
              {this.props.level}
            </Typography>
            <Typography variant="h6" component="h2">
              <span className={classes.priceStyle}> Rs.{this.props.price}</span>
              <Button
                variant="contained"
                color="primary"
                className={classes.syllStyle}
                href={this.props.uSyllabus}
                target="_blank"
              >
                Syllabus
              </Button>
            </Typography>
          </CardContent>
          <CardActions style={{ backgroundColor: "#E1F5FE" }}>
            <Button
              variant="contained"
              onClick={this.handleBckOpen}
              className={classes.buttonPadding}
            >
              Details
            </Button>

            {this.state.isBookMarked ? (
              <IconButton onClick={this.handleBookMarkOpen}>
                <BookmarkIcon className={classes.bookmarkStyle} />
              </IconButton>
            ) : (
              <IconButton onClick={this.bookmarkItem}>
                <BookmarkBorderIcon className={classes.bookmarkStyle} />
              </IconButton>
            )}

            {this.state.isLiked ? (
              <IconButton onClick={this.handleDislike}>
                <FavoriteIcon className={classes.likeIconStyle} />
              </IconButton>
            ) : (
              <IconButton onClick={this.handleLike}>
                <FavoriteBorderIcon className={classes.likeIconStyle} />
              </IconButton>
            )}

            <IconButton onClick={this.dialogOpen}>
              <ShareIcon style={{ color: "black" }} />
            </IconButton>
          </CardActions>
        </Card>

        <Backdrop open={this.state.bckDisply} className={classes.bckStyle}>
          <Container className={classes.contStyle} maxWidth="md">
            <Grid container spacing={0}>
              <Grid item xs={12} sm={7} className={classes.gr1Style}>
                <Typography
                  variant="h4"
                  // component="h3"
                  className={classes.cdTitle}
                >
                  Learn{" "}
                  <span style={{ fontWeight: "bolder", color: "#795548" }}>
                    {this.props.name}
                  </span>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  className={classes.faBtn}
                >
                  Financial Aid Available
                </Button>
              </Grid>
              <Grid item xs={12} sm={1}>
                <IconButton
                  className={classes.clBtnStyle}
                  onClick={this.handleBckClose}
                >
                  <CloseIcon color="secondary" />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={4}>
                {/* ##################### ------>   Coursera card Action   <------ #####################*/}
                <Card elevation={6} className={classes.cardStyle}>
                  <CardMedia
                    image={require("./Images/coursera.png")}
                    className={classes.cimgStyle}
                  />
                  <CardContent>
                    <Typography
                      variant="h3"
                      className={classes.courTitleStyle}
                      style={{ color: "#0D47A1", fontWeight: "bolder" }}
                    >
                      Coursera
                    </Typography>
                    <Typography variant="h4" className={classes.costStyle}>
                      Rs.{this.props.courseraPrice}
                    </Typography>
                    <Typography variant="body1" className={classes.capStyle}>
                      Included with some extra packages
                    </Typography>

                    <Button variant="contained" className={classes.Cbtn1}>
                      Buy
                    </Button>
                    <br />
                    <Button
                      variant="outlined"
                      className={classes.Cbtn2}
                      onClick={this.addToCart_Coursera}
                    >
                      Add To Cart
                    </Button>
                    <br />
                  </CardContent>
                  <Divider />
                  <CardActions>
                    <Button className={classes.sylBtnStyle}>
                      View Syllabus on website
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                {/* ##################### ------>   Udemy card Action   <------ #####################*/}
                <Card elevation={6} className={classes.cardStyle}>
                  <CardMedia
                    image={require("./Images/udemy.png")}
                    className={classes.cimgStyle}
                  />
                  <CardContent>
                    <Typography
                      variant="h3"
                      className={classes.courTitleStyle}
                      style={{ color: "#d50000", fontWeight: "bolder" }}
                    >
                      Udemy
                    </Typography>
                    <Typography variant="h4" className={classes.costStyle}>
                      Rs.{this.props.udemyPrice}
                    </Typography>
                    <Typography variant="body1" className={classes.capStyle}>
                      Included with some extra packages
                    </Typography>

                    <Button variant="contained" className={classes.Cbtn1}>
                      Buy
                    </Button>
                    <br />
                    <Button
                      variant="outlined"
                      className={classes.Cbtn2}
                      onClick={this.addToCart_Udemy}
                    >
                      Add To Cart
                    </Button>
                    <br />
                  </CardContent>
                  <Divider />
                  <CardActions>
                    <Button className={classes.sylBtnStyle}>
                      View Syllabus on website
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                {/* ##################### ------>   Skillshare card Action   <------ #####################*/}
                <Card elevation={6} className={classes.cardStyle}>
                  <CardMedia
                    image={require("./Images/skillshare.png")}
                    className={classes.cimgStyle}
                  />
                  <CardContent>
                    <Typography
                      variant="h3"
                      className={classes.courTitleStyle}
                      style={{ color: "black", fontWeight: "bolder" }}
                    >
                      Skill Share
                    </Typography>
                    <Typography variant="h4" className={classes.costStyle}>
                      Rs.{this.props.skillsharePrice}
                    </Typography>
                    <Typography variant="body1" className={classes.capStyle}>
                      Included with some extra packages
                    </Typography>

                    <Button variant="contained" className={classes.Cbtn1}>
                      Buy
                    </Button>
                    <br />
                    <Button
                      variant="outlined"
                      className={classes.Cbtn2}
                      onClick={this.addToCart_SkillShare}
                    >
                      Add To Cart
                    </Button>
                    <br />
                  </CardContent>
                  <Divider />
                  <CardActions>
                    <Button className={classes.sylBtnStyle}>
                      View Syllabus on website
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  varinat="caption"
                  style={{
                    textAlign: "center",
                    marginTop: "9px",
                    color: "#607D8B",
                  }}
                >
                  Copyright &copy; 2020 Coursemaina Rights reserved{" "}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Backdrop>
      </div>
    );
  }
}

CourseCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(cardStyles)(CourseCard);
