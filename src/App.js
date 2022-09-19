import Palette from "./Palette";
import seedColors from "./seedColors";
import PaletteList from "./PaletteList";
import {Routes, Route} from "react-router-dom";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import { useState } from "react";

function App() {

  const getSeedColorsFromLocalStorage = () => {
    try{
      const jsonSeedColors = window.localStorage.getItem('seedColors');
      return jsonSeedColors ? JSON.parse(jsonSeedColors): seedColors;
    }
    catch(err){
      console.log(err)
    }
  }

  const [finalSeedColors, setFinalSeedColors] = useState(getSeedColorsFromLocalStorage());

  const handleSetFinalSeedColors = (palette) => {
    setFinalSeedColors([...finalSeedColors, palette]);
    window.localStorage.setItem('seedColors', JSON.stringify([...finalSeedColors, palette]))
  }

  return (
    <div className="App">
      <Routes>
        <Route index element={<PaletteList seedColors={finalSeedColors} />}/>
        <Route path="palette/:paletteId" element={<Palette seedColors={finalSeedColors}/>}/>
        <Route path="palette/:paletteId/:singleColor" element={<SingleColorPalette seedColors={finalSeedColors}/>}/>
        <Route path="palette/new" element={<NewPaletteForm seedColors={finalSeedColors} handleSetFinalSeedColors={handleSetFinalSeedColors} defaultPalette={finalSeedColors.find(palette => palette.id === "material-ui-colors").colors}/>} />
      </Routes>
    </div>
  );
}

export default App;
