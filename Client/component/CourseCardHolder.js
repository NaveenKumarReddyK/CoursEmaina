import React from "react";
import { Grid, Container } from "@material-ui/core";
import CourseCard from "./CourseCard";
import WintJson from "./WebDevJson/WebDevIn.json";
import WbgJson from "./WebDevJson/WebDevBg.json";
import WadvJson from "./WebDevJson/WebDevAd.json";

class CourseCardHolder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const lsprops = this.props.cLevelProps;
    let webMapData;

    if (lsprops === "Beginner") {
      webMapData = WbgJson;
    } else if (lsprops === "Intermediate") {
      webMapData = WintJson;
    } else if (lsprops === "Advanced") {
      webMapData = WadvJson;
    }

    return (
      <div>
        <Container maxWidth="xl">
          <Grid container justify="center" spacing={3}>
            <Grid item xs={12} style={{ height: "10px" }}>
              {" "}
            </Grid>

            {webMapData.map((data, i) => {
              return (
                <Grid item xs={12} sm={3} key={i}>
                  <CourseCard
                    courseId={data.course_id}
                    name={data.name}
                    level={data.level}
                    price={data.price}
                    cardImg={data.prodImg}
                    courseraPrice={data.courseraPrice}
                    udemyPrice={data.udemyPrice}
                    skillsharePrice={data.skillsharePrice}
                    uSyllabus={data.uSyllabus}
                  />{" "}
                </Grid>
              );
            })}

            <Grid item xs={12} style={{ height: "10px" }}>
              {" "}
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default CourseCardHolder;
