import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to Afghan LMS</h1>

        <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  dolore eaque architecto quisquam quibusdam enim consectetur
                  blanditiis porro laboriosam? Eos labore similique nemo officia
                  debitis quibusdam natus tempora iure ullam.
                </p>
                <h2>Headings</h2>
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}