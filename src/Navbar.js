import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import SimpleSnackbar from './SimpleSnackbar';
import { NavLink } from 'react-router-dom';


// Slider
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import "./Navbar.css";

export default function Navbar(props){

    const [format, setFormat] = useState("hex");
    const [open, setOpen] = useState(false);

    function handleChange(evt){
        setFormat(evt.target.value);
        props.handleChange(evt.target.value);
        setOpen(true);
    }

    return (<header className='Navbar'>
        <div className='logo'>
            <NavLink to="/">ReactColorPicker</NavLink>
        </div>
        {props.isSingleColor ? null : <div className='slider-container'>
            <span>Level: {props.shade}</span>
            <div className='slider'>
                <Slider defaultValue={props.shade} min={100} max={900} step={100} onChange={(level) => props.setShade(level)} />
            </div>
        </div>}
        
        <div className='select-container'>
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