import { createUseStyles } from "react-jss";
import chroma from "chroma-js";

const useStyles = createUseStyles({
    draggableColorBox:{
        backgroundColor: props => props.color,
        color: props => chroma(props.color).luminance() <= 0.08 ? "white" : "black",
        width: "20%",
        height: "25%",
        display: "inline-block",
        position: "relative",
        marginBottom: "-3.5px",
        textTransform: "uppercase"
    }
})

export default useStyles;