import React from "react";
import Grid from "@material-ui/core/Grid";
import LocationCard from "./LocationCard";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    padding: "0 85px", // side-padding
    marginTop: 20,
    justifyContent: "flex-start"
  }
});
class LocationsGrid extends React.Component {
  render() {
    const { locations, classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid
          Container
          justify="flex-start"
          spacing={16}
        >
          {locations.map((
            location,
            index
          ) => (
            <Grid key={index} item>
              {" "}
              <LocationCard location={location} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}


export default withStyles(styles)(LocationsGrid);