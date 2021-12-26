import History from "./History";
import Home from "./Home";

//Router
import {Route, Routes } from "react-router-dom";


function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
