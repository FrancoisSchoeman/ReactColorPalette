import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    main:{
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    container:{
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
    },
    palettes:{
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "auto auto auto",
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