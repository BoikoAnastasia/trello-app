import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Main } from "./components/main/Main";
import { BoardPage } from "./components/boardPage/BoardPage";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/board/:id" element={<BoardPage />} />
      </Routes>
    </div>
  );
}

export default App;
