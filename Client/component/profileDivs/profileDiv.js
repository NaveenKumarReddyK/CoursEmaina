import React from "react";
import { Grid, Button, Typography, ListItem, List } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

class ProfileDiv extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <Grid item xs={12}>
          <Typography
            variant="h4"
            style={{
              textAlign: "center",
              fontFamily: "Open sans",
              marginBottom: "50px",
            }}
          >
            User Data
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <List>
            <ListItem>
              <Typography
                variant="h5"
                style={{ fontFamily: "Open sans", marginBottom: "20px" }}
              >
                User Name:
                <span style={{ backgroundColor: "#FFE082" }}>
                  {this.props.name}
                </span>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                variant="h5"
                style={{ fontFamily: "Open sans", marginBottom: "20px" }}
              >
                Email:
                <span style={{ backgroundColor: "#FFE082" }}>
                  {this.props.email}
                </span>
              </Typography>
            </ListItem>
          </List>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ marginLeft: "20px" }}
            endIcon={<VisibilityOffIcon />}
          >
            Change Password
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ marginLeft: "20px" }}
            endIcon={<MailIcon />}
          >
            Complaint Box
          </Button>
        </Grid>
      </div>
    );
  }
}

export default ProfileDiv;
