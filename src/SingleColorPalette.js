import React, { useState, Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import { generatePalette } from "./colorHelpers";
import { useParams, useNavigate } from 'react-router-dom';

import "./SingleColorPalette.css"

export default function SingleColorPalette(props) {

    const [shade, setShade] = useState(500);
    const [format, setFormat] = useState("hex");

    const params = useParams();
    const paletteId = params.paletteId;
    const paletteColor = params.singleColor

    const chosenPalette = props.seedColors.find(function (palette) {
        return palette.id === paletteId
    })
    const palette = generatePalette(chosenPalette).colors;

    const colorShades = Object.values(palette).map((value) => {
        return value
    })

    const finalColors = colorShades.map((color) => {
        return color.map((singleColor) => {
            if(singleColor.id === paletteColor){
                if(singleColor.name !== `${paletteColor} 50`){
                    return <ColorBox isSingleColor={true} key={singleColor.name} color={singleColor.hex} name={singleColor.name} />
                }
            }
        })
    })

    let navigate = useNavigate(-1);

    function handleClick(){
        navigate(-1);
    }

    return (
        <div className='SingleColorPalette'>
            <Navbar isSingleColor={true} />
            <div className='SingleColorPalette-colors'>
                { finalColors }
                <div className='go-back'><button onClick={handleClick}>GO BACK</button></div>
            </div>
            <footer className='SingleColorPalette-footer'>
                {palette.paletteName}
                <span className='emoji'>{SingleColorPalette.emoji}</span>
            </footer>
        </div>
    )
}