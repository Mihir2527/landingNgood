import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import places from "../static/places";
import useWindowPosition from "../hook/useWindowPosition";
import "./Places.css";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
        },
    },
}));
export default function () {
    const classes = useStyles();
    const checked = useWindowPosition("header");
    return (
        <div className={classes.root} id="place-to-visit">
            <ImageCard id="pl1" place={places[0]} checked={checked} />
            <ImageCard id="pl2" place={places[1]} checked={checked} />
        </div>
    );
}
