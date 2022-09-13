import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    main:{
        backgroundColor: "white",
        margin: "15px",
        borderRadius: "5px",
        padding: "7px",
        width: "10rem",
        alignSelf: "stretch",
    },
    miniPalette:{
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "#dae1e4",
        borderRadius: "5px",
        overflow: "hidden"
    },
    colorBox: {
        height: "2rem",
        width: "2rem"
    },
    title:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        textDecoration: "none",
        fontSize: "0.75rem"
    },
    emoji:{
        marginLeft: "7px",
        fontSize: "1rem"
    }
})

export default useStyles;