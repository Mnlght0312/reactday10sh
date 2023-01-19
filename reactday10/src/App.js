import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Books from "./pages/Books";
import AboutLayout from "./pages/About-page/AboutLayout";

function Input() {
  return (
    <>
      <div>
        {" "}
        <AboutLayout />
      </div>
    </>
  );
}
function Input2() {
  return (
    <>
      <div>Input 98</div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About/*" element={<About />}>
          <Route index element={<Input />} />
          <Route path="input2" element={<Input2 />} />
        </Route>
        <Route path="/Books" element={<Books />} />
      </Routes>
    </div>
  );
}

export default App;
