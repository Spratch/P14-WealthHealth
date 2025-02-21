import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "../components/layout/layout";
import Home from "./home";
import Employees from "./employees";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/employees"
          element={<Employees />}
        />
      </Route>
    </Routes>
  );
}

export default App;
