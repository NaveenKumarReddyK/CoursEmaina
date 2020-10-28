
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Container,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import propTypes from "prop-types";

const tcrdSyles = {

}

class TrendingCard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {classes} = this.props
        return(
            <div></div>
        )
    }

}

TrendingCard.propTypes = {
    classes: propTypes.object.isRequired,
  };
  
  export default withStyles(tcrdSyles)(TrendingCard);