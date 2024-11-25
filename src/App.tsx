import { Route, Routes, Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./parts/header/header";
import Footer from "./parts/footer/footer";

import RequireAuth from "./auth/RequireAuth";
import RequireAccessToShow from "./auth/RequireAccessToShow";

import Login from "./Pages/Login/login";
import Home from "./Pages/Home/home";
import Default from "./Pages/Default";
import TestPage from "./Pages/testPage";

import InboundSupplies from "./Pages/inboundSupplies";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<RequireAuth Component={Outlet} />}>
          <Route path="/" element={<Home />} />
          <Route path="/TestPage" element={<RequireAccessToShow accesName="measurements" Component={TestPage} />} />
          <Route
            path="/InboundSupplies"
            element={<RequireAccessToShow accesName="income" Component={InboundSupplies} />}
          />

          <Route path="/*" element={<Default />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
