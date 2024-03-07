import React from "react";
import "./Header.css";
import Logo from "../assets/logo.png";
import Logo2 from "../assets/userimage.png";
import Eclipse from "../assets/eclipse.png";
import Vector from "../assets/Vector.png";
import { useContext } from "react";
import { AppContext } from "../Store/store";
import { reducer } from "../Store/reducer";
import filtermobimg from '../assets/filtermobimg.png'
import downarrow from '../assets/mobdown.png'
import threelinesmob from '../assets/threelinemob.png'

const Header = () => {
  let { login, dispatch,DarkOverLay } = useContext(AppContext);

  return (
    <>
    {DarkOverLay && (
      <style>
        {`
          .header, .mob-header, .mob2-header {
            background-color: rgba(0, 0, 0, 0.7);
          }
        `}
      </style>
    )}
      <div className="header">
        <div className="centerhead  ">
          <div className="logodiv  ">
            <img src={Logo} className="img-fluid" />
          </div>
          <div className="userdiv     ">
            <div className="dropdown    d-flex mqd-none">
              <div className="darkmenuitem d-flex align-items-center">
                <p className="menutext mb-0">Learn</p>
                <img src={Vector} alt="" className="vectorimg " />
              </div>

              <div className="darkmenuitem d-flex align-items-center">
                <p className="menutext mb-0 me-3">Practise</p>
                <img src={Vector} alt="" className="vectorimg " />
              </div>
            </div>
            <div
              className={`eclipse hovereclipse ${
                login ? "shadow" : "noshadow"
              }`}
              onClick={() => {
                console.log("change login");
                dispatch({ type: "CHANGELOGIN" });
                console.log("login changed ");
              }}
            >
              <img src={Eclipse} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      {/*mobile view */}
      <div className="mob-header">
        <p>Practice Interview Questions</p>
      </div>

      <div className="mob2-header">
        <h2>Embark on an Exploration: 800 Questions Await!</h2>
        <span className="filteroption text-white float-end d-flex align-items-center justify-content-between">
            <img src={filtermobimg} alt="" />
            <p className="mb-0">Filters</p>
        </span>
        <div className="filter ">
            <div className="fillterpart popular d-flex align-items-center justify-content-between border border-dark">
                <img src={downarrow} alt="" className="downarrow" />
                <div className="popularframe d-flex align-items-center justify-space-between">
                    <img src={threelinesmob} alt="" className="threelinesmob" />
                    <p className="mb-0 ms-3">Popular</p>
                </div>
            </div>
            <div className="fillterpart complexity d-flex align-items-center justify-content-between border border-dark">
            <img src={downarrow} alt="" className="downarrow" />
                    <p className="mb-0 ">Complexity</p>
               
            </div>

            <div className="fillterpart complexity d-flex align-items-center justify-content-between border border-dark ">
            <img src={downarrow} alt="" className="downarrow" />
                    <p className="mb-0 ">industry Type</p>
               
            </div>

            <div className="fillterpart complexity d-flex align-items-center justify-content-between border border-dark">
            <img src={downarrow} alt="" className="downarrow" />
                    <p className="mb-0 ">industry</p>
               
            </div>

            <div className="fillterpart complexity d-flex align-items-center justify-content-between border border-dark">
            <img src={downarrow} alt="" className="downarrow" />
                    <p className="mb-0 ">Company Type</p>
               
            </div>

            <div className="fillterpart complexity d-flex align-items-center justify-content-between border border-dark">
            <img src={downarrow} alt="" className="downarrow" />
                    <p className="mb-0 ">Popular</p>
               
            </div>
           
        </div>
      </div>

      <hr  className="bg-white mob-hr"/>
    </>
  );
};

export default Header;
