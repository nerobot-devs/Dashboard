import React from "react";
import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";
import { SettingsForm } from "../components/Settings/SettingsForm";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      width: "70%",
      marginLeft: "15%"
    }
  })
);

export const SettingsPage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <SettingsForm />
      </Paper>
    </React.Fragment>
  );
};
