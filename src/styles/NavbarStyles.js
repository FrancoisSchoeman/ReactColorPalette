import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    navbar:{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        alignContent: "center",
        height: "6vh",
        overflow: "hidden"
    },
    logo:{
        marginRight: "15px",
        padding: "0 13px",
        fontSize: "22px",
        backgroundColor: "#eceff1",
        fontFamily: "Roboto",
        height: "100%",
        display: "flex",
        alignItems: "center",
        '& a':{
            textDecoration: "none",
            color: "black"
        }
    },
    sliderContainer: {
        width: "100%"
    },
    slider:{
        width: "80%",
        margin: "0 10px",
        display: "inline-block",
        '@media (max-width: 720px)':{

        },
        '& .rc-slider-track':{
            backgroundColor: "transparent"
        },
        '& .rc-slider-rail':{
            height: "8px"
        },
        '& .rc-slider-handle, .rc-slider-handle:hover, .rc-slider-handle:active, .rc-slider-handle:focus':{
            backgroundColor: "green",
            outline: 'none',
            border: "2px solid green",
            boxShadow: 'none',
            width: '13px',
            height: '13px',
            marginLeft: '-7px',
            marginTop: '-3px',
        }
    },
    selectContainer:{
        marginLeft: "auto",
        paddingRight: "1rem"
    }
})

export default useStyles;