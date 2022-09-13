import React from 'react';
import useStyles from './styles/PaletteListStyles';
import MiniPalette from './MiniPalette';

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