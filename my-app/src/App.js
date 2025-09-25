import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";
import FreeNot from "./freenot";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} /> {/* Default page ab Register */}
        <Route
          path="/freenot"
          element={
            <ProtectedRoute>
              <FreeNot />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
