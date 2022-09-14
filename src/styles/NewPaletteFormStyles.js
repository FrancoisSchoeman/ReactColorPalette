import { createUseStyles } from "react-jss";
import chroma from "chroma-js";

const useStyles = createUseStyles({
    addButton:{
        backgroundColor:( chosenColor) =>  chosenColor['hex'],
        color: (chosenColor) => chroma(chosenColor['hex']).luminance() <= 0.08 ? "white" : "black"
    }
})

export default useStyles;