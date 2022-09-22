import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import useStyles from "./styles/MiniPaletteStyles";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

export default function MiniPalette(props) {

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const classes = useStyles(props);

    const handleMiniPaletteDelete = (evt) => {
        evt.stopPropagation();
        setIsDialogOpen(true);
    }

    const handleConfirmDelete = () => {
        setIsDialogOpen(false);
        props.deleteMiniPalette(props.paletteId);
        props.setInProp(true);
    }

    const handleCancelDelete = () => {
        setIsDialogOpen(false);
    }

    return (
        <div className={classes.main}>
            <NavLink to={`/palette/${props.palette.id}`}>
                <div className={classes.miniPalette}>
                    {props.palette.colors.map((color) => {
                        return <div key={color.color} className={classes.colorBox} style={{ backgroundColor: color.color }}></div>
                    })}
                </div>
                <h5 className={classes.title}>{props.palette.paletteName}
                    <span className={classes.emoji}>{props.palette.emoji}</span></h5></NavLink>
                    <span onClick={handleMiniPaletteDelete} className={classes.deleteButton} ><DeleteRoundedIcon fontSize="small" /></span>
            <Dialog open={isDialogOpen}>
                <div className={classes.dialogBox}>
                    <DialogTitle>Delete Palette</DialogTitle>
                    <span>Are you sure that you want to delete the chosen palette?</span>
                    <div className={classes.dialogButtons}>
                        <Button onClick={handleConfirmDelete} variant="outlined" color="primary">Confirm</Button>
                        <Button onClick={handleCancelDelete} variant="contained" color="error">Cancel</Button>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}