import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import WOW from "wowjs";
import { FaAngleUp } from "react-icons/fa";

//Pages
import HomeDefault from "./pages/HomeDefault";
import AboutOne from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Error from "./pages/Error";
import ScrollToTopRoute from "./components/scroll-to-top-route/ScrollToTopRoute";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Account from "./pages/Account";
import Deposit from "./pages/Deposit";
import Platform from "./pages/Platform";
import OpenAcc from "./pages/OpenAcc";
import Whatsapp from "./components/Whatsapp";

function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <Router>
      <Whatsapp />
      <ScrollToTopRoute />
      <Routes>
        <Route path={`/`} exact element={<HomeDefault />} />

        <Route path={`/about`} exact element={<AboutOne />} />
        <Route path={`/platform`} exact element={<Platform />} />
        <Route path={`/money-deposit`} exact element={<Deposit />} />
        <Route path={`/account`} exact element={<Account />} />
        <Route path={`/open-account`} exact element={<OpenAcc />} />
        <Route path={`/contact`} exact element={<ContactPage />} />
        <Route path={`/*`} exact element={<Error />} />
      </Routes>
      <ScrollToTop
        className="scrollUp"
        smooth
        top="1500"
        component={<FaAngleUp />}
      />
    </Router>
  );
}

export default App;
