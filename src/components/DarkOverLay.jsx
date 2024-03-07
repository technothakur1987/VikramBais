import React, { useContext } from "react";
import { AppContext } from "../Store/store";
import "./DarkOverLay.css";

const DarkOverlay = () => {
  const { DarkOverLay } = useContext(AppContext);

  return DarkOverLay ? <div className="dark-overlay"></div> : null;
};

export default DarkOverlay;
