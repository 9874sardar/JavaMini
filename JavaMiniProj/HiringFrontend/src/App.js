import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Feed, Dashboard, Create } from "./pages"
import Header from "./pages/Header";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div>
      <Header/>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employer" >
          <Route path="/employer/dashboard" element={<Dashboard />}/>
          <Route path="/employer/create" element={<Create />}/>
          </Route>
          <Route path="/employee/feed" element={<Feed />}/>
          <Route path="/employee/aboutus" element={<AboutUs />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
