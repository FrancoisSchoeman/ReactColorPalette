import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    main:{
        backgroundColor: "blue",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    container:{
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        '@media (max-width: 720px)':{
            width: "80%"
        }
    },
    palettes:{
        boxSizing: "border-box",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        alignContent: "center",
        flexWrap: "wrap",
        flex: 1
    },
    nav: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        color: "white",
        alignItems: "center",
        '& a':{
            color: "white"
        }
    }
})

export default useStyles;