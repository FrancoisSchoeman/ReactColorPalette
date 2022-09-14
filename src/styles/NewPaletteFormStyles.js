import { createUseStyles } from "react-jss";
import chroma from "chroma-js";

const useStyles = createUseStyles({
    drawer:{
        margin: "0.5rem auto",
        fontFamily: "Roboto",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        '& h2':{
            marginBottom: "0.5rem",
            fontWeight: "500"
        }
    },
    buttonBox:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "1rem"
    },
    clearButton:{
        backgroundColor: "#3547ab",
        color: "white",
        border: "none",
        borderRadius: "5px",
        padding: "10px 20px",
        textTransform: "uppercase",
        fontSize: "0.75rem"
    },
    randomButton:{
        backgroundColor: "#f20149",
        color: "white",
        border: "none",
        borderRadius: "5px",
        padding: "10px 20px",
        textTransform: "uppercase",
        fontSize: "0.75rem"
    },
    colorNameField:{
        marginTop: "1rem",
        width: "100%"
    },
    addButton:{
        backgroundColor:(classesProps) =>  classesProps.chosenColor['hex'],
        color: (classesProps) => chroma(classesProps.chosenColor['hex']).luminance() <= 0.08 ? "white" : "black",
        border: "none",
        width: "100%",
        borderRadius: "5px",
        padding: "1rem 20px",
        marginTop: "1rem",
        fontSize: "1.5rem",
        textTransform: "uppercase",
        cursor: "pointer"
    },
    colorBoxes:{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        alignContent: "flex-start",
        height: "calc(100vh - 66px)",
    }
})

export default useStyles;