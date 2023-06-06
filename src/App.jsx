import "./styles/styles.scss";

import Main from "./components/Main";
import Learn from "./components/Learn";
import Collection from "./components/Collection";
import Nav from "./components/Nav";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </div>
  );
}

export default App;
