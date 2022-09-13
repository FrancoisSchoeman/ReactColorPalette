import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import { generatePalette } from "./colorHelpers";
import { useParams, useNavigate } from 'react-router-dom';
import useStyles from "./styles/SingleColorPaletteStyles";

export default function SingleColorPalette(props) {
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
                    return <ColorBox isSingleColor={true} key={singleColor.name} id={singleColor.name} color={singleColor[format]} name={singleColor.name} />
            }
            return null;
        })
    }).slice(1);

    let navigate = useNavigate(-1);

    function handleClick(){
        navigate(-1);
    }

    function changeFormat(value){
        setFormat(value);
    }

    const classes = useStyles(props);

    return (
        <div className={classes.singleColorPalette}>
            <Navbar handleChange={changeFormat} isSingleColor={true} shade={null} setShade={null} />
            <div className={classes.singleColorPaletteColors}>
                { finalColors }
                <div className={`${classes.goBack} ${classes.singleColorBox}`}><button className={classes.generalButton} onClick={handleClick}>GO BACK</button></div>
            </div>
            <footer className={classes.singleColorPaletteFooter}>
                {chosenPalette.paletteName}
                <span className={classes.emoji}>{chosenPalette.emoji}</span>
            </footer>
        </div>
    )
}