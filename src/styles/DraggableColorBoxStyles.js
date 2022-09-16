import { createUseStyles } from "react-jss";
import chroma from "chroma-js";

const useStyles = createUseStyles({
    draggableColorBox:{
        backgroundColor: props => props.color,
        color: props => chroma(props.color).luminance() <= 0.08 ? "white" : "black",
        width: "20%",
        height: "25%",
        display: "flex",
        position: "relative",
        textTransform: "uppercase",
        alignItems: "flex-end",
        justifyContent: "space-between",
        padding: "0 0.5em",
        fontSize: "12px",
    },
    deleteIcon: {
        color: props => chroma(props.color).luminance() <= 0.08 ? "white" : "black",
        transition: "all 0.3s ease-in-out",
        cursor: "pointer",
        '&:hover': {
            transform: "scale(1.3)"
        }
    }
})

export default useStyles;