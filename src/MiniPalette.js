import React from "react";
import {createUseStyles} from 'react-jss';
import { NavLink } from 'react-router-dom';

const useStyles = createUseStyles({
    main:{
        backgroundColor: "white",
        margin: "15px",
        borderRadius: "5px",
        padding: "7px",
        width: "10rem",
        alignSelf: "stretch",
    },
    miniPalette:{
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "#dae1e4",
        borderRadius: "5px",
        overflow: "hidden"
    },
    colorBox: {
        height: "2rem",
        width: "2rem"
    },
    title:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        textDecoration: "none",
        fontSize: "0.75rem"
    },
    emoji:{
        marginLeft: "7px",
        fontSize: "1rem"
    }
});

export default function MiniPalette(props){
    const classes = useStyles();

    return(
        <div className={classes.main}>
            <NavLink to={`/palette/${props.palette.id}`}>
            <div className={classes.miniPalette}>
                {props.palette.colors.map((color) => {
                    return <div className={classes.colorBox} style={{backgroundColor: color.color}}></div>
                })}
            </div>
            <h5 className={classes.title}>{props.palette.paletteName}
            <span className={classes.emoji}>{props.palette.emoji}</span></h5></NavLink>
        </div>
    )
}