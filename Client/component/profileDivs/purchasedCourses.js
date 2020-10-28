import React from "react";
import propTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
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

class PurchasedCourseDetails extends React.Component {
  render() {
    return (
      <div>
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
            Purchased Courses{" "}
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
                >
                  Type
                </TableCell>
                <TableCell> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  style={{ fontFamily: "Open sans", fontSize: "15pt" }}
                >
                  1
                </TableCell>
                <TableCell
                  style={{ fontFamily: "Open sans", fontSize: "15pt" }}
                >
                  Blockchain
                </TableCell>
                <TableCell
                  style={{ fontFamily: "Open sans", fontSize: "15pt" }}
                >
                  Game Development
                </TableCell>
                <TableCell
                  style={{ fontFamily: "Open sans", fontSize: "15pt" }}
                >
                  Intermediate
                </TableCell>
                <TableCell
                  style={{ fontFamily: "Open sans", fontSize: "15pt" }}
                >
                  <Button color="secondary">Go To course</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{ fontFamily: "Open sans", fontSize: "15pt" }}
                >
                  2
                </TableCell>
                <TableCell
                  style={{ fontFamily: "Open sans", fontSize: "15pt" }}
                >
                  Some Course
                </TableCell>
                <TableCell
                  style={{ fontFamily: "Open sans", fontSize: "15pt" }}
                >
                  UI/UX
                </TableCell>
                <TableCell
                  style={{ fontFamily: "Open sans", fontSize: "15pt" }}
                >
                  Intermediate
                </TableCell>
                <TableCell
                  style={{ fontFamily: "Open sans", fontSize: "15pt" }}
                >
                  <Button color="secondary">Go To course</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </div>
    );
  }
}

export default PurchasedCourseDetails;
