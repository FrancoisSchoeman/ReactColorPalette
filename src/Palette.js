import React, { useState, Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import {generatePalette} from "./colorHelpers";
import { useParams } from 'react-router-dom';

import './Palette.css';

export default function Palette (props){

    const [shade, setShade] = useState(500);
    const [format, setFormat] = useState("hex");

    const paletteId = useParams().paletteId
    const chosenPalette = props.seedColors.find(function (palette){
        return palette.id === paletteId
    })
    const palette = generatePalette(chosenPalette)

    function changeFormat(value){
        setFormat(value);
    }

    const colorBoxes = palette.colors[shade].map(color => {
        return <ColorBox isSingleColor={false} key={color.id} id={color.id} color={color[format]} name={color.name} />
    })
    return(
        <div className='Palette'>
            <Navbar handleChange={changeFormat} isSingleColor={false} shade={shade} setShade={setShade} />
            <div className='Palette-colors'>
                {colorBoxes}
            </div>
            <footer className='Palette-footer'>
                {palette.paletteName}
                <span className='emoji'>{palette.emoji}</span>
            </footer>
        </div>
    )
}