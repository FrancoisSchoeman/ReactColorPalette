import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import SimpleSnackbar from './SimpleSnackbar';
import { NavLink } from 'react-router-dom';
import useStyles from './styles/NavbarStyles'

// Slider
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function Navbar(props){

    const [format, setFormat] = useState("hex");
    const [open, setOpen] = useState(false);

    function handleChange(evt){
        setFormat(evt.target.value);
        props.handleChange(evt.target.value);
        setOpen(true);
    }

    const classes = useStyles(props);

    return (<header className={classes.navbar}>
        <div className={classes.logo}>
            <NavLink to="/">ReactColorPicker</NavLink>
        </div>
        {props.isSingleColor ? null : <div className={classes.sliderContainer}>
            <span>Level: {props.shade}</span>
            <div className={classes.slider}>
                <Slider defaultValue={props.shade} min={100} max={900} step={100} onChange={(level) => props.setShade(level)} />
            </div>
        </div>}
        
        <div className={classes.selectContainer}>
            <Select value={format} onChange={handleChange} label="Select">
                <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
                <MenuItem value="rgb">RGB(255, 255, 255)</MenuItem>
                <MenuItem value="rgba">RGBA(255, 255, 255, 1.0)</MenuItem>
            </Select>
        </div>
        <SimpleSnackbar open={open} setOpen={setOpen} format={format}/>
    </header>
    )
}