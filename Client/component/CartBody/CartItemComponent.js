import React from "react";
import propTypes from "prop-types";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Button,
  Typography,
  ListItem,
  List,
  Snackbar,
} from "@material-ui/core";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import DeleteIcon from "@material-ui/icons/Delete";
import BookmarkIcon from "@material-ui/icons/Bookmark";

const cItemComStyles = {
  typoFont: {
    fontFamily: "Open sans",
  },
  fgridS: {
    border: "1px solid #78909C",

    marginTop: "20px",
    marginLeft: "20px",
  },
  sGridS: {
    border: "1px solid #78909C",
    marginTop: "20px",
  },
};

class CartItemComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SnackOpen: false,
      SnackMessage: "",
    };
    this.removeCartItem = this.removeCartItem.bind(this);
    this.bookmarkItem = this.bookmarkItem.bind(this);
  }
  removeCartItem() {
    const body = { item_Id: this.props.CourseId };
    axios
      .post(
        "http://localhost:4000/coursemaina/cartactions/deletecartitem",
        body,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        }
      )
      .then((resData) => {
        if ((resData.data.Success = "Item deleted successfuly")) {
          this.setState({
            SnackOpen: true,
            SnackMessage: "Item deleted successfuly",
          });
          window.location.reload();
        }
      })
      .catch((resDataErr) => {
        this.setState({
          SnackOpen: true,
          SnackMessage: "Error Occured While deleting the Course",
        });
        console.log(resDataErr);
      });
  }

  bookmarkItem() {
    const BMbody = {
      item_Id: this.props.CourseId,
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
            SnackOpen: true,
            SnackMessage: "You already saved this item",
          });
        } else if (resBM.data.Confirm === "Item saved successfuly ") {
          this.setState({
            SnackOpen: true,
            SnackMessage: "Course Bookmarked Succesfuly",
          });
        }
      })
      .catch((BMerr) => {
        this.setState({
          SnackOpen: true,
          SnackMessage: "Error while bookmarking",
        });
      });
  }
  render() {
    const { classes } = this.props;
    return (
      <div style={{ width: "100%" }}>
        <Snackbar
          open={this.state.SnackOpen}
          onClose={() => {
            this.setState({ SnackOpen: false });
          }}
          message={this.state.SnackMessage}
          autoHideDuration={3000}
        />
        <Grid container>
          <Grid item xs={12} sm={8} className={classes.fgridS}>
            <List>
              <ListItem style={{ backgroundColor: "#F1F8E9" }}>
                <Typography className={classes.typoFont} variant="h4">
                  {this.props.CourseName}
                </Typography>
              </ListItem>
              <ListItem style={{ backgroundColor: "#E3F2FD" }}>
                {" "}
                <Typography className={classes.typoFont} variant="h5">
                  {this.props.CourseCategory}
                </Typography>
              </ListItem>
              <ListItem style={{ backgroundColor: "#FFF8E1" }}>
                {" "}
                <Typography className={classes.typoFont} variant="h5">
                  {this.props.CourseLevel}
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={3} className={classes.sGridS}>
            <List>
              <ListItem>
                {" "}
                <Typography
                  className={classes.typoFont}
                  variant="h4"
                  style={{ color: "red" }}
                >
                  {this.props.CoursePrice} <LocalOfferIcon />{" "}
                </Typography>
              </ListItem>
              <ListItem>
                <Button
                  color="primary"
                  variant="outlined"
                  endIcon={<DeleteIcon />}
                  onClick={this.removeCartItem}
                >
                  Remove
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  color="primary"
                  variant="outlined"
                  endIcon={<BookmarkIcon />}
                  onClick={this.bookmarkItem}
                >
                  Save for later
                </Button>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </div>
    );
  }
}

CartItemComponent.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(cItemComStyles)(CartItemComponent);
