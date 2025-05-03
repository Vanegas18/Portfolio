import React from "react";
import { Route, Routes } from "react-router";
import { Portfolio } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
    </Routes>
  );
};
