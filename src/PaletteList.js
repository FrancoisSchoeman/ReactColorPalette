import React, { Component } from 'react';
import "./PaletteList.css"
import {createUseStyles} from 'react-jss';
import MiniPalette from './MiniPalette';

const useStyles = createUseStyles({
    main:{
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    container:{
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
    },
    palettes:{
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "auto auto auto",
    },
    nav: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        color: "white"
    }
    
    
})

export default function PaletteList(props){
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <div className={classes.container}>                
                <nav className={classes.nav}><h1>React Colors</h1></nav>
                <div className={classes.palettes}>
                    {props.seedColors.map(palette => {return <MiniPalette key={palette.id} palette={palette}/>})}
                </div>
            </div>
        </div>
    )

}