// import { Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
// import FrontEnd from "./pages/FrontEnd/FrontEnd"

function App() {
  return (
    <Router>
      <GlobalStyle/>
      {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          {/* <Route path="frontend" component={FrontEnd}/>  */}
        </Routes>
    </Router>
  );
}

export default App;
