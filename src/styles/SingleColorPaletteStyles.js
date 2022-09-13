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
    }
})

export default useStyles;