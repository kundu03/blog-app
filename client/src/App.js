import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

function App() {
  const {user} = useContext(Context);
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Login />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
