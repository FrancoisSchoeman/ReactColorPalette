import React, {useState} from 'react';
import useStyles from './styles/PaletteListStyles';
import MiniPalette from './MiniPalette';
import { NavLink } from 'react-router-dom';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';

export default function PaletteList(props){
    const [inProp, setInProp] = useState(false);

    const classes = useStyles();
    return (
        <div className={classes.main}>
            <TransitionGroup>
            <div className={classes.container}>                
                <nav className={classes.nav}>
                    <h1>React Colors</h1>
                    <NavLink to="palette/new">Create Palette</NavLink>
                </nav>
                <div className={classes.palettes}>
                    {props.seedColors.map(palette => {return <CSSTransition in={inProp} classNames="fade" timeout={500} key={palette.id}><MiniPalette key={palette.id} paletteId={palette.id} palette={palette} setInProp={setInProp} deleteMiniPalette={props.deleteMiniPalette}/></CSSTransition>})}
                </div>
            </div>
            </TransitionGroup>
        </div>
    )

}