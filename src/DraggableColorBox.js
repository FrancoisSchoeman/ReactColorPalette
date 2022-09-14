import React from 'react';
import useStyles from "./styles/DraggableColorBoxStyles"

export default function DraggableColorBox (props) {

    const classes = useStyles(props);

    return (
        <div className={classes.draggableColorBox}>
            {props.colorName}
        </div>
    )
}