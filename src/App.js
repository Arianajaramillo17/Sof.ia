import { Routes, Route } from "react-router-dom";
import {Landing} from "./components/Landing";
import { ViewA } from "./components/ViewA";
import { ViewB } from './components/ViewB';
import { ViewC } from './components/ViewC';
import { ViewD } from './components/ViewD';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route  path="/" element={<Landing/>} />
      <Route path='/ViewA' element={<ViewA />} />
      <Route path='/ViewB' element={<ViewB />} />
      <Route path='/ViewC' element={<ViewC />} />
      <Route path='/ViewD' element={<ViewD />} />
     </Routes>
    </div>
  );
}

export default App;
