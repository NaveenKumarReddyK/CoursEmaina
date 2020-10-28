import React from "react";
import { Container, Grid, Paper, Typography, Button ,Backdrop,CircularProgress} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles'
import propTypes from 'prop-types'
import zIndex from "@material-ui/core/styles/zIndex";
const compilerStyles = {
    paper:{
        backgroundColor:"#FFF3E0",

    },
    button:{
        backgroundColor:"#4CAF50",
        color:"black",
        fontFamily:"Open sans",
        marginBottom:"4px",
        '&:hover':{
            backgroundColor:"#4CAF50",
        }
    },
    typo:{
        marginLeft:"18%",fontFamily:"Open sans",
    },
    progress:{
        position:"absolute",
        left:"48%",
        top:"40%"
    },
    backDrop:{
        zIndex:"2"
    }
}
class CompilerGrid extends React.Component {
  render() {
      const {classes} = this.props
    return (
      <div>
        <Container maxWidth="xl">
          <Grid container>
          <Grid item xs={12} sm={4}></Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h4" component="h1" className={classes.typo}>
                  Take me to{" "}
                  <Button variant="contained" className={classes.button}
                  href="https://www.onlinegdb.com/online_html_compiler"
                  target="_blank"
                  >
                    Compiler
                  </Button>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}></Grid>
          </Grid>
        </Container>

        <Backdrop open={false} className={classes.backDrop} >
        <CircularProgress className={classes.progress} />
        </Backdrop>
      </div>
    );
  }
}

CompilerGrid.propTypes = {
    classes:propTypes.object.isRequired
}
export default withStyles(compilerStyles)(CompilerGrid);
