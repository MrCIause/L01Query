import React from "react";
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";

import Games from "./Games";

export default function Page404() {
  return (
    <div>
      <h1 className="txt">Page404</h1>

      <a href="/">
        <button className="btn btn-danger">Home</button>
      </a>
    </div>
  );
}
