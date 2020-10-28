import React from "react";
import propTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import {
  Grid,
  Button,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import BookmarkTable from "./bookmarkTable/bookmarkTable";

class SavedDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedJson: [],
    };
    this.displaySavedData = this.displaySavedData.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/coursemaina/bookmark/getbookmarkeditem", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then((resBMdata) => {
        this.setState({
          savedJson: resBMdata.data.BookmarkData,
        });
        console.log(this.state.savedJson);
      })
      .catch((BMerr) => {
        console.log(BMerr);
      });
  }

  displaySavedData() {
    return this.state.savedJson.map((data, index) => {
      return (
        <BookmarkTable
          key={index}
          sno={index + 1}
          CourseId={data.itemId}
          CourseName={data.CourseName}
          CourseCategory={data.CourseCategory}
        />
      );
    });
  }

  render() {
    return (
      <div>
        {" "}
        <Grid item xs={12}>
          <Typography
            variant="h4"
            component="h2"
            style={{
              textAlign: "center",
              fontFamily: "Open sans",
              marginBottom: "20px",
              marginTop: "10px",
            }}
          >
            Saved Courses{" "}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Table size="small" component={Paper}>
            <TableHead style={{ backgroundColor: "#C8E6C9" }}>
              <TableRow>
                <TableCell
                  style={{ fontFamily: "Open sans", fontSize: "15pt" }}
                >
                  S.No
                </TableCell>
                <TableCell
                  style={{ fontFamily: "Open sans", fontSize: "15pt" }}
                >
                  Name
                </TableCell>
                <TableCell
                  style={{ fontFamily: "Open sans", fontSize: "15pt" }}
                >
                  Category
                </TableCell>

                <TableCell
                  style={{ fontFamily: "Open sans", fontSize: "15pt" }}
                  colSpan={2}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{this.displaySavedData()}</TableBody>
          </Table>
        </Grid>
      </div>
    );
  }
}

export default SavedDiv;
