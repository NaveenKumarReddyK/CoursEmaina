import React from "react";
import axios from "axios";
import { Button, TableRow, TableCell } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

class BookmarkTable extends React.Component {
  constructor(props) {
    super(props);
    this.unsave = this.unsave.bind(this);
  }
  //##########################################################################################

  unsave() {
    const unsaveBody = {
      item_Id: this.props.CourseId,
    };
    axios
      .post(
        "http://localhost:4000/coursemaina/bookmark/delbookmark",
        unsaveBody,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        }
      )
      .then((resUnsavedata) => {
        console.log(resUnsavedata);
        // window.location.reload();
      })
      .catch((UnsaveErr) => {
        console.log(UnsaveErr);
      });
  }
  //##########################################################################################
  render() {
    return (
      <TableRow>
        <TableCell style={{ fontFamily: "Open sans", fontSize: "15pt" }}>
          {this.props.sno}
        </TableCell>
        <TableCell style={{ fontFamily: "Open sans", fontSize: "15pt" }}>
          {this.props.CourseName}
        </TableCell>
        <TableCell style={{ fontFamily: "Open sans", fontSize: "15pt" }}>
          {this.props.CourseCategory}
        </TableCell>
        <TableCell style={{ fontFamily: "Open sans", fontSize: "15pt" }}>
          <Button color="secondary" endIcon={<ShoppingCartIcon />}>
            Add to Cart
          </Button>
        </TableCell>
        <TableCell style={{ fontFamily: "Open sans", fontSize: "15pt" }}>
          <Button
            color="secondary"
            endIcon={<DeleteForeverIcon />}
            onClick={this.unsave}
          >
            Remove
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}

export default BookmarkTable;
