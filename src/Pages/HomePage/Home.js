import React from "react";
import Grid from "../../Components/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import SecurityIcon from "@material-ui/icons/Security";
import EventNoteIcon from "@material-ui/icons/EventNote";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center",
  },
  bigSpace: {
    marginTop: "5rem",
  },
  littleSpace: {
    marginTop: "2.5rem",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
});
const Home = () => {
  const classes = styles();
  return (
    <div>
      <div className={classes.wrapper}>
        <Typography variant="h4" className={classes.bigSpace} color="primary">
          Technology changes rapidly and transforms everything it touches
        </Typography>
        <Typography
          variant="h5"
          className={classes.littleSpace}
          color="primary"
        >
          At NashTech, we encourage every employee to think creatively, drive
          initiatives and take everything from good to great.
        </Typography>
      </div>
      <div className={`${classes.grid} ${classes.bigSpace}`}>
        <Grid
          icon={
            <SecurityIcon
              style={{ fill: "#4360A6", height: "125", width: "125" }}
            />
          }
          title="Secure"
          btnTitle="Show me More"
        />
        <Grid
          icon={
            <EventNoteIcon
              style={{ fill: "#449A76", height: "125", width: "125" }}
            />
          }
          title="Reliable"
          btnTitle="Show me More"
        />
        <Grid
          icon={
            <TrendingUpIcon
              style={{ fill: "#D05B2D", height: "125", width: "125" }}
            />
          }
          title="Performant"
          btnTitle="Show me More"
        />
      </div>
    </div>
  );
};
export default Home;
