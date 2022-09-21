import React from 'react';
import useStyles from './styles/PaletteListStyles';
import MiniPalette from './MiniPalette';
import { NavLink } from 'react-router-dom';

export default function PaletteList(props){
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <div className={classes.container}>                
                <nav className={classes.nav}>
                    <h1>React Colors</h1>
                    <NavLink to="palette/new">Create Palette</NavLink>
                </nav>
                <div className={classes.palettes}>
                    {props.seedColors.map(palette => {return <MiniPalette key={palette.id} paletteId={palette.id} palette={palette} deleteMiniPalette={props.deleteMiniPalette}/>})}
                </div>
            </div>
        </div>
    )

}