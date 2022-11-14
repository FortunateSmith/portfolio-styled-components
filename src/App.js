import { Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home"

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar />
        <Routes>
          <Route path="/" exact component={Home}/>
        </Routes>
    </Router>
  );
}

export default App;
