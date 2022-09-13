import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
 palette:{
    height: "100vh",
    display: "flex",
    flexDirection: "column"
 },
 paletteColors:{
    height: "90%"
 },
 paletteFooter:{
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
 }
})

export default useStyles;