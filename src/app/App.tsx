import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "../components/layout/layout";
import Home from "./home";
import Employees from "./employees";
import { Provider } from "react-redux";
import store from "../redux/store";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
