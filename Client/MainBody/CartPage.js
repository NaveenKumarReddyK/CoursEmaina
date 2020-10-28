import React from "react";
import propTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import {
  AppBar,
  Grid,
  Button,
  Typography,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  ListItem,
  List,
  Paper,
  Icon,
  Card,
  CardContent,
  CardActions,
  Divider,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import DeleteIcon from "@material-ui/icons/Delete";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import CartItemComponent from "../component/CartBody/CartItemComponent";
const cpgStyles = {
  appBarStyle: {
    height: "80px",
    width: "100%",
    position: "relative",
    backgroundColor: "#42a5f5",
  },
  mainGrid: {
    width: "100%",
    height: "100%",
  },
  imgStyle: {
    width: "100%",
    height: "100%",
  },
  pTitleStyle: {
    fontFamily: "Open sans",
    marginTop: "14px",
    marginLeft: "60px",
  },
  hBtn: {
    marginTop: "20px",
    backgroundColor: "#009688",
    color: "white",
    fontFamily: "Open sans",
    "&:hover": {
      backgroundColor: "#009688",
    },
  },
  cBtn: {
    marginTop: "20px",
    marginLeft: "30px",
    backgroundColor: "#7E57C2",
    color: "white",
    fontFamily: "Open sans",
    "&:hover": {
      backgroundColor: "#7E57C2",
    },
  },
  lBtn: {
    marginTop: "20px",
    marginLeft: "30px",
    backgroundColor: "#f44336",
    color: "white",
    fontFamily: "Open sans",
    "&:hover": {
      backgroundColor: "#f44336",
    },
  },
  typoFont: {
    fontFamily: "Open sans",
  },
  ckOutBtn: {
    padding: "10px 50px",
    fontSize: "20px",
    fontFamily: "Open sans",
    marginLeft: "23px",
    backgroundColor: "#ef5350",
    "&:hover": {
      backgroundColor: "#ef5350",
      color: "black",
    },
  },
  totalTitle: {
    fontFamily: "Open sans",
    marginTop: "10px",
    marginLeft: "30px",
  },
  cardStyle: {
    marginTop: "30px",
    width: "300px",
    backgroundColor: "#F5F5F5",
    marginLeft: "30px",
  },
  priceStyle: {
    fontWeight: "bolder",
    fontFamily: "Open sans",
    color: "orange",
    marginTop: "20px",
    marginLeft: "20px",
    marginBottom: "40px",
  },
};

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      totalcount: 0,
    };
    this.logoutAction = this.logoutAction.bind(this);
    this.propsSender = this.propsSender.bind(this);
  }

  // ###################################################
  componentWillMount() {
    axios
      .get("http://localhost:4000/coursemaina/checking/isloggedin", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then((resLogData) => {
        const msg = resLogData.data.Login_Msg;
        if (msg === "User not LoggedIn") {
          window.location.href = "http://localhost:3000/coursemaina/login";
        }
        axios
          .get("http://localhost:4000/coursemaina/cartactions/cart", {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
          })
          .then((resCartData) => {
            let TotalCount = 0;
            resCartData.data.CartItemData.map((data) => {
              TotalCount = parseInt(TotalCount) + parseInt(data.CoursePrice);
            });
            this.setState({
              totalcount: TotalCount,
              cartItems: resCartData.data.CartItemData,
            });
          })
          .catch((carEtErr) => {
            console.log(carEtErr);
          });
      })
      .catch((err) => {
        console.log("Error" + err);
      });
  }
  //####################################################
  propsSender() {
    return this.state.cartItems.map((data, index) => {
      return (
        <CartItemComponent
          key={index}
          CourseId={data.itemId}
          CourseName={data.CourseName}
          CourseCategory={data.CourseCategory}
          CourseLevel={data.CourseLevel}
          CoursePrice={data.CoursePrice}
        />
      );
    });
  }
  //#########################################################################################

  logoutAction() {
    axios
      .get("http://localhost:4000/coursemaina/auth/logout", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then((resData) => {
        const logoutResponse = resData.data.LogoutMsg;
        console.log(resData);
        if (logoutResponse === "Successfuly logged out") {
          window.location.href = "http://localhost:3000/coursemaina/home";
        }
      });
  }
  //#########################################################################################

  //#########################################################################################

  render() {
    const { classes } = this.props;
    const mapData = this.state.cartItems;
    return (
      <div>
        <AppBar className={classes.appBarStyle}>
          <Grid container spacing={0} className={classes.mainGrid}>
            <Grid item xs={2} className={classes.mainGrid}>
              <img
                src={require("../component/Images/clogo.jpg")}
                className={classes.imgStyle}
              />
            </Grid>
            <Grid item xs={5}>
              <Typography variant="h3" className={classes.pTitleStyle}>
                Cart{" "}
                <Icon>
                  <ShoppingCartIcon
                    fontSize="large"
                    style={{ color: "#FFEB3B" }}
                  />
                </Icon>
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Button
                variant="contained"
                className={classes.hBtn}
                size="large"
                endIcon={<HomeIcon />}
                href="/coursemaina/home"
              >
                Home
              </Button>
              <Button
                variant="contained"
                className={classes.cBtn}
                size="large"
                endIcon={<PersonIcon />}
                href="/coursemaina/profile"
              >
                Profile
              </Button>
              <Button
                variant="contained"
                className={classes.lBtn}
                size="large"
                endIcon={<ExitToAppIcon />}
                onClick={this.logoutAction}
              >
                Logout
              </Button>
            </Grid>
          </Grid>
        </AppBar>

        <div style={{ position: "relative", width: "100%" }}>
          <div style={{ position: "relative", width: "70%", float: "left" }}>
            <Grid container spacing={0}>
              {
                //############## Mapping Data #################################
                this.propsSender()
              }
            </Grid>
          </div>
          <div style={{ position: "relative", width: "30%", float: "left" }}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Card elevation={4} className={classes.cardStyle}>
                  <CardContent>
                    <Typography className={classes.totalTitle} variant="h4">
                      Total
                    </Typography>
                    <Typography className={classes.priceStyle} variant="h2">
                      {this.state.totalcount}
                    </Typography>
                  </CardContent>
                  <Divider />
                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      className={classes.ckOutBtn}
                      endIcon={<DoneAllIcon />}
                    >
                      checkout
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

CartPage.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(cpgStyles)(CartPage);
