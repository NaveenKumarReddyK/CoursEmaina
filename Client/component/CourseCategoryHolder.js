import React from "react";
import { Typography, Grid, Container } from "@material-ui/core";
import CourseCategoryCard from "./CourseCategoryCard";

class CourseCategoryHolder extends React.Component {
  render() {
    return (
      <div>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12} style={{ height: "50px" }}>
              {" "}
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h3"
                style={{
                  fontFamily: "Open sans",
                  textAlign: "center",
                  color: "#795548",
                }}
              >
                Course Categories{" "}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <CourseCategoryCard
                ObjbckColor="#ef5350"
                ObjcTitle="Web Development"
                ObjLink="/coursemaina/webdev"
              />{" "}
            </Grid>
            <Grid item xs={12} sm={4}>
              <CourseCategoryCard
                ObjbckColor="#AB47BC"
                ObjcTitle="Software Development"
                ObjLink="/coursemaina/swdev"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CourseCategoryCard
                ObjbckColor="#5C6BC0"
                ObjcTitle="Game Development"
                ObjLink="/coursemaina/gamedev"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CourseCategoryCard
                ObjbckColor="#29B6F6"
                ObjcTitle="UI/UX"
                ObjLink="/coursemaina/ui-ux"
              />{" "}
            </Grid>
            <Grid item xs={12} sm={4}>
              <CourseCategoryCard
                ObjbckColor="#26A69A"
                ObjcTitle="Big Data Analytics"
                ObjLink="/coursemaina/bigdata"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CourseCategoryCard
                ObjbckColor="#9CCC65"
                ObjcTitle="AI/ML/NLP"
                ObjLink="/coursemaina/ai"
              />
            </Grid>
            <Grid item xs={12} style={{ height: "50px" }}>
              {" "}
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default CourseCategoryHolder;
