import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPokemon } from "../../redux/actions/actionPokemon";
import PokeDetails from "./PokeDetails";
import { makeStyles } from "@material-ui/core";
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

const ContainerDetails = () => {
  const classes = useStyles();
  const { name } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemonReducer.pokemon);
  

  
  
  useEffect(() => {
    dispatch(getPokemon(name));
  }, [dispatch, name]);
  return (
    <div >
      <Forms/>
      <div>
        <div className={classes.toolbar}></div>
        <PokeDetails pokemon={pokemon} />
      </div>
    </div>
  )
};

export default ContainerDetails;
