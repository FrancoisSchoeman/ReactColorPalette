import { createUseStyles } from 'react-jss';
import chroma from 'chroma-js';

const useStyles = createUseStyles({
    colorBox: {
        width: "20%",
        height: "25%",
        margin: "auto",
        display: "inline-block",
        position: "relative",
        marginBottom: "-3.5px",
        '&:hover $copyButton': {
            opacity: "1",
            cursor: "pointer",
            transition: "0.5s",
        },
        '@media (max-width: 720px)': {
            height: "25%",
            width: "100%",
            overflow: "hidden"
        }
    },
    singleColorBox: {
        width: "20%",
        height: "50%",
        margin: "auto",
        display: "inline-block",
        position: "relative",
        marginBottom: "-3.5px",
        '&:hover $copyButton': {
            opacity: "1",
            cursor: "pointer",
            transition: "0.5s",
        },
        '@media (max-width: 720px)': {
            width: "100%",
            height: "25%",
            overflow: "hidden"
        }
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
        border: "none"
    },
    copyButton: {
        opacity: "0"
    },
    boxContent: {
        position: "absolute",
        padding: "10px",
        width: "100%",
        left: "0px",
        bottom: "0px",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
    },
    seeMore: {
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        position: "absolute",
        border: "none",
        right: "0",
        bottom: "0",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase",
        cursor: "pointer",
        fontSize: "12px",
    },
    copyOverLay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "50%",
        transition: "transform 0.6s ease-in-out",
        transform: "scale(0.1)",
    },
    copyOverLayShow: {
        opacity: "1",
        transform: "scale(50)",
        zIndex: "10",
        position: "absolute",
    },
    copyMsg: {
        position: "fixed",
        left: "0",
        top: "0",
        right: "0",
        bottom: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "3rem",
        transform: "scale(0.1)",
        opacity: "0",
        transition: "all 0.4s ease-in-out",
        transitionDelay: "0.1s",
        flexDirection: "column",
        '& h1': {
            fontWeight: "400",
            textShadow: "1px 2px black",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            width: "100%",
            textAlign: "center",
            marginBottom: "0",
            padding: "1rem",
            textTransform: "uppercase",
        },
        '& p': {
            fontWeight: "100",
            fontSize: "2rem"
        },
    },
    copyMsgShow: {
        opacity: "1",
        transform: "scale(1)",
        zIndex: "11"
    },
    isDark: {
        color: props => chroma(props.color).luminance() <= 0.08 ? "white" : "black"
    }
})

export default useStyles;