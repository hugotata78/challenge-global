import React from "react";
import {  useSelector } from "react-redux";
import PokeDetails from "./PokeDetails";
import { makeStyles } from "@material-ui/core";
import Forms from "../forms/Forms";
import Loading from "./Loading";
import Errors from "./Errors";


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

const ContainerPokeDetails = () => {
  const classes = useStyles(); 
  const pokemon = useSelector((state) => state.pokemonReducer.poke_data);
  const loading = useSelector(state=>state.pokemonReducer.loading)
  const error = useSelector(state=>state.pokemonReducer.error)
  
  return (
    <div >
      <Forms/>
      <div>
        <div className={classes.toolbar}></div>
        {loading && <Loading/>}
        {pokemon && loading === false && <PokeDetails pokemon={pokemon} />}
        {error && loading === false && <Errors/>}
      </div>
    </div>
  )
};

export default ContainerPokeDetails;
