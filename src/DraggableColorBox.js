import React from 'react';
import useStyles from "./styles/DraggableColorBoxStyles"
import DeleteIcon from '@mui/icons-material/Delete';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

export default function DraggableColorBox(props) {

    const handleDelete = () => {
        props.deleteColorBox(props.color)
    }

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
      } = useSortable({id: props.id});
      
      const style = {
        transform: CSS.Transform.toString(transform),
        transition,
      };

    const classes = useStyles(props);

    return (
        <div className={classes.draggableColorBox} ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <span>{props.colorName}</span>
            <span onClick={handleDelete} className={classes.deleteIcon}><DeleteIcon sx={{ fontSize: 20 }} /></span>
        </div>
    )
}