import React from "react";
import ListPokemons from "./ListPokemons";
import { Grid, makeStyles } from "@material-ui/core";
import Forms from "../forms/Forms";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const Pokedex = () => {
  const classes = useStyles();
  
  return (
    <Grid containrer justifyContent='center'>
      <Forms />
      <div>
        <div className={classes.toolbar}></div>
        <ListPokemons />
      </div>
    </Grid >
  );
};

export default Pokedex;
