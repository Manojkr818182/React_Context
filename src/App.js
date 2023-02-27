import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Signup from "./pages/signup/Signup";
import ForgotPassword from "./pages/forget_pass/ForgotPassword";
import { AuthContext } from "./context/context";
import Home from "./pages/home/Home";
import { useContext } from "react";
import Layout from "./components/layout/Layout";

const App = () => {
  const { state } = useContext(AuthContext);

  return (
    <>
      <Router>
        <Routes>
          {state && state.token !=='' &&
            <Route exact path="/" element={ <Layout /> } >
              <>
                <Route exact path="/" element={<Navigate to="/home" replace />} />
                <Route exact path="*" element={<Navigate to="/home" replace />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
              </>
            </Route>
          }
          {state && state.token ==='' &&
            <>
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/forget" element={<ForgotPassword />} />
              <Route exact path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </>
          }
        </Routes>
      </Router>
    </>
  );
}

export default App;
