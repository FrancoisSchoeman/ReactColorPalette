import React from "react";
import { NavLink } from 'react-router-dom';
import useStyles from "./styles/MiniPaletteStyles";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

export default function MiniPalette(props){
    const classes = useStyles(props);

    return(
        <div className={classes.main}>
            <NavLink to={`/palette/${props.palette.id}`}>
            <div className={classes.miniPalette}>
                {props.palette.colors.map((color) => {
                    return <div key={color.color} className={classes.colorBox} style={{backgroundColor: color.color}}></div>
                })}
            </div>
            <h5 className={classes.title}>{props.palette.paletteName}
            <span className={classes.emoji}>{props.palette.emoji}</span></h5></NavLink>
            <span className={classes.deleteButton} ><DeleteRoundedIcon fontSize="small" /></span>
        </div>
    )
}