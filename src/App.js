import Palette from "./Palette";
import seedColors from "./seedColors";
import PaletteList from "./PaletteList";
import {Routes, Route} from "react-router-dom";
import SingleColorPalette from "./SingleColorPalette";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route index element={<PaletteList seedColors={seedColors} />}/>
        <Route path="palette/:paletteId" element={<Palette seedColors={seedColors}/>}/>
        <Route path="palette/:paletteId/:singleColor" element={<SingleColorPalette seedColors={seedColors}/>}/>
      </Routes>
    </div>
  );
}

export default App;
