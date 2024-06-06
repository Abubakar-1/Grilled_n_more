import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

export const Stacks = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </>
  );
};
