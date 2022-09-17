import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
 palette:{
    height: "97vh",
    display: "flex",
    flexDirection: "column"
 },
 paletteColors:{
    height: "90%",
    marginTop: '3.5px',
    "@media (max-width: 720px)":{
      flexWrap: "wrap"
    }
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
    padding: "0 1rem"
 }
})

export default useStyles;