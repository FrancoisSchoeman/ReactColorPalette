import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    singleColorPalette:{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignContent: "space-between",
        justifyContent: "center"
    },
    singleColorPaletteColors:{
        height: "90%"
    },
    singleColorPaletteFooter:{
        backgroundColor: "white",
        height: "5vh",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        fontWeight: "bold"
    },
    emoji:{
        fontSize: "1.5rem",
        margin: "0 1rem"
    },
    goBack:{
        backgroundColor: "black"
    },
    singleColorBox: {
        width: "20%",
        height: "50%",
        margin: "auto",
        display: "inline-block",
        position: "relative",
        marginBottom: "-3.5px"
    },
    generalButton: {
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        textAlign: "center",
        outline: "none",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        textTransform: "uppercase",
        border: "none",
        '&:hover':{
            cursor: "pointer"
        }
    },
})

export default useStyles;