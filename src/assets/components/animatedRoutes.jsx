import React, { useEffect, useState } from "react";
import LendingPage from "./lendingPage";
import { Login } from "./loginPage";
import { Register } from "./register";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainLoader from "./mainLoader";

function AnimatedRoutes() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);
  return (
    <>
      {loading ? (
        <MainLoader />
      ) : (
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LendingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AnimatePresence>
      )}
    </>
  );
}

export default AnimatedRoutes;
