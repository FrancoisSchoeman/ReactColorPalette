import Palette from "./Palette";
import seedColors from "./seedColors";
import PaletteList from "./PaletteList";
import { Routes, Route } from "react-router-dom";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import { useState } from "react";
import AnimationLayout from "./AnimationLayout";

function App() {

  const getSeedColorsFromLocalStorage = () => {
    try {
      const jsonSeedColors = window.localStorage.getItem('seedColors');
      return jsonSeedColors ? JSON.parse(jsonSeedColors) : seedColors;
    }
    catch (err) {
      console.log(err)
    }
  }

  const [finalSeedColors, setFinalSeedColors] = useState(getSeedColorsFromLocalStorage());

  const handleSetFinalSeedColors = (palette) => {
    setFinalSeedColors([...finalSeedColors, palette]);
    window.localStorage.setItem('seedColors', JSON.stringify([...finalSeedColors, palette]))
  }

  const handleMiniPaletteDelete = (paletteId) => {
    const newSeedColors = finalSeedColors.filter((palette) => { return palette.id !== paletteId });
    setFinalSeedColors(newSeedColors);
    window.localStorage.setItem("seedColors", JSON.stringify(newSeedColors));
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AnimationLayout />}>
          <Route index element={<PaletteList seedColors={finalSeedColors} deleteMiniPalette={handleMiniPaletteDelete} />} />
          <Route path="palette/:paletteId" element={<Palette seedColors={finalSeedColors} />} />
          <Route path="palette/:paletteId/:singleColor" element={<SingleColorPalette seedColors={finalSeedColors} />} />
          <Route path="palette/new" element={<NewPaletteForm seedColors={finalSeedColors} handleSetFinalSeedColors={handleSetFinalSeedColors} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
