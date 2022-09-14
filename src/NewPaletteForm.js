import React, { useState, useRef, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { ChromePicker } from 'react-color';
import useStyles from './styles/NewPaletteFormStyles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import DraggableColorBox from './DraggableColorBox';

const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function NewPaletteForm(props) {
  const [open, setOpen] = useState(true);
  const [newPaletteName, SetNewPaletteName] = useState('');
  const [newPaletteEmoji, setNewPaletteEmoji] = useState('');
  const [chosenColor, setChosenColor] = useState({ hex: '#22194D' });
  const [colorName, setColorName] = useState('');
  const [colorBoxes, setColorBoxes] = useState(props.defaultPalette);
  const [isSameColor, setIsSameColor] = useState(false)

  const refContainer = useRef('form');

  // useEffect(() => {
  //   if (!ValidatorForm.hasValidationRule("nameExists")) {
  //     ValidatorForm.addValidationRule('nameExists', (value) => {
  //       if(colorBoxes.filter(colorBox => colorBox.name.toUpperCase() === value.toUpperCase().length > 0)){
  //         return false
  //       }
  //       return true
  //     });
  //   }

  //   return function cleanNameExistsRule() {
  //     if (ValidatorForm.hasValidationRule("nameExists")) {
  //       ValidatorForm.removeValidationRule("nameExists");
  //     }
  //   };
  // });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleColorPickerChange = (color) => {
    setChosenColor(color);
    if(colorBoxes.filter(colorBox => colorBox.color === color)){
      setIsSameColor(true)
    }
    // TODO: fix isSameColor
    console.log(isSameColor)
  }

  const handleColorNameChange = (evt) => {
    setColorName(evt.target.value.toUpperCase());
  }

  const handleColorPickerSubmit = () => {
    setColorBoxes([...colorBoxes, { name: colorName, color: chosenColor['hex'] }])
  }

  const handleClearPalette = () => {
    setColorBoxes([]);
  }

  const handleRandomColor =() => {
    const randomColor = props.defaultPalette[Math.floor(Math.random() * props.defaultPalette.length)]
    setColorBoxes([...colorBoxes, { name: randomColor.name, color: randomColor.color }])
  }

  const handleAddPaletteToSeedColors = () => {
    const finalPaletteId = newPaletteName.toLowerCase().replaceAll(' ', '-');
    const finalPalette = {paletteName: newPaletteName, id: finalPaletteId, emoji: newPaletteEmoji, colors: colorBoxes}
    props.handleSetFinalSeedColors(finalPalette);
  }

  const classesProps = {chosenColor: chosenColor, isSameColor: isSameColor}

  const classes = useStyles(classesProps);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <ArrowCircleRightOutlinedIcon />
          </IconButton>

          <h3>
            New Color Palette
          </h3>

        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ArrowCircleLeftOutlinedIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />

        <div className={classes.drawer}>
          <h2>Design Your Palette</h2>
          <div className={classes.buttonBox}>
            <button className={classes.clearButton} onClick={handleClearPalette}>Clear Palette</button>
            <button className={classes.randomButton} onClick={handleRandomColor}>Random Color</button>
          </div>
          <ValidatorForm ref={refContainer} onSubmit={handleColorPickerSubmit} onError={errors => console.log(errors)}>
            <ChromePicker width="280px" color={chosenColor['hex']} onChange={handleColorPickerChange} />
            <TextValidator
              className={classes.colorNameField}
              name="colorName"
              label="Color Name"
              variant="filled"
              value={colorName}
              validators={["required"]}
              errorMessages={['This field is required']}
              onChange={handleColorNameChange}
            />
            <button type='submit' className={classes.addButton} >
              Add Color
            </button>
          </ValidatorForm>
        </div>



      </Drawer>

      <Main open={open}>
        <DrawerHeader />


        <div className={classes.colorBoxes}>
          {colorBoxes.map((colorBox) => {
            return <DraggableColorBox key={colorBox.name} colorName={colorBox.name} color={colorBox.color} />
          })}
        </div>



      </Main>
    </Box>
  );
}
