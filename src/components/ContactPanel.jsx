import React, { useContext, useState } from "react";
import "./ContactPanel.css";
import Divider from "../assets/Divider.png";
import dopdownarrow from "../assets/dopdownarrow.png";
import asterix from "../assets/asterisk.png";
import attachIcon from "../assets/attachIcon.png";
import { AppContext } from "../Store/store";
import closeIcon from "../assets/closeIcon.png";
import nav1Icon from "../assets/nav1Icon.png";
import icon2box1img1 from "../assets/icon2-box1-img-1.png";
import icon2box1img2 from "../assets/icon2-box1-img-2.png";
import icon3 from "../assets/icon3.png";
import nav4img1 from "../assets/nav4Img1.png";
import nav4Img2 from "../assets/nav4Img2.png";
import nav4Img3 from "../assets/nav4Img3.png";

const ContactPanel = () => {
  let {
    login,
    dispatch,
    OpenSuggestionPanel,
    openReportIssuePanel,
    OpenFeedbackPanel,
    OpenContactPanel,
  } = useContext(AppContext);

  console.log(`login at feedback is now ${login}`);
  const [text, settext] = useState("");
  const [email, setemail] = useState("");
  const [names, setnames] = useState("");
  const [mobile, setmobile] = useState("");

  let handleReportIssue = () => {
    if (text !== "" && names !== "") {
      console.log(`${text} and ${names}`);

      dispatch({ type: "CLOSECONTACTPANEL" });
      dispatch({ type: "CLOSEFEEDBACK" });
      dispatch({ type: "OPENCONTACTMESSAGE" });

      setTimeout(() => {
        dispatch({ type: "CLOSECONTACTMESSAGE" });
        
      }, 2000);
      setTimeout(() => {
        
        dispatch({ type: "CLOSEDARKOVERLAY" });
      }, 2300);
    } else {
      console.log("form not submitted");
    }
  };

  return (
    <>
      {login ? (
        <div className="contact reportPanel mobileanimationclass newheight d-flex flex-column align-items-end justify-content-center loginreportpanel">
          <div className="cardd loginCard">
            <div className="headerr d-flex flex-column align-items-center justify-content-between">
              <p className="text-center p1">
                Let us know what <span className="dark">your queries</span>
                <span className="d-block">are!</span>
              </p>

              <img src={Divider} alt="" className="divider" />
            </div>
            <div className="issue-Content loginissuepaddingy">
              <div className="description-section pt-5 logindescripnotoppadding">
                <div className="name-section d-flex flex-column mb-3">
                  <label htmlFor="name" className="name mb-3 " id="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="nameinput logincontactnamemq"
                    placeholder="Enter your Name"
                    value={names}
                    onChange={(e) => {
                      setnames(e.target.value);
                    }}
                  />
                </div>

                <div className="desc-label mb-3 ">
                  <label
                    htmlFor="input-wrapper custominwra xxx"
                    style={{ width: "19rem" }}
                  >
                    What would you like to ask
                    <img src={asterix} alt="" className=" ms-1 d-inline" />
                  </label>
                </div>

                <div className="deswc d-flex flex-column align-items-end mqlogindeswc loginalignstartcontactpanelmq">
                  <div className="textfield d-flex flex-column justify-content-between logincontactpanelmq">
                    <input
                      type="text"
                      className="input-wrapper"
                      name="input-wrapper"
                      placeholder="Write Here"
                      value={text}
                      onChange={(e) => {
                        settext(e.target.value);
                      }}
                    />
                  </div>

                  <button
                    className={` logincontactsubbtnnn ${
                      text !== "" && names !== ""
                        ? " submitbtndark"
                        : "submitbtn disabled"
                    }`}
                    onClick={handleReportIssue}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fablist-reportPanel d-flex align-items-center justify-content-between loginfablist">
            <div
              className={`nav4-icon-box fabddd1 ${
                OpenContactPanel ? "selectedclass" : ""
              }`}
              onClick={() => {
                console.log("hello");

                dispatch({ type: "OPENCONTACTPANEL" });
                dispatch({ type: "CLOSEREPORTISSUEPANEL" });
                dispatch({ type: "CLOSEFEEDBACKPANEL" });
                dispatch({ type: "CLOSESUGGESTIONPANEL" });
              }}
            >
              <div className="icon-wrapper4 ">
                <img src={nav4img1} alt="" className="nav4Img1" />
                <div className="nav4ImgWrapper custommm">
                  <img src={nav4Img2} alt="" className="nav4Img2" />
                  <img src={nav4Img3} alt="" className="nav4Img3" />
                </div>
              </div>
            </div>
            <div
              className={`fabddd2 d-flex justify-content-center align-items-center ${
                OpenSuggestionPanel ? "selectedclass" : ""
              }`}
              onClick={() => {
                console.log("hello");

                dispatch({ type: "CLOSECONTACTPANEL" });
                dispatch({ type: "CLOSEREPORTISSUEPANEL" });
                dispatch({ type: "CLOSEFEEDBACKPANEL" });
                dispatch({ type: "OPENSUGGESTIONPANEL" });
              }}
            >
              <div className="fabddd2-center d-flex justify-content-center align-items-center">
                <img src={icon3} alt="" className="ggg3 ms-1 mt-1" />
              </div>
            </div>
            <div
              className={`fabddd3 d-flex justify-content-center align-items-center  ${
                OpenFeedbackPanel ? "selectedclass" : ""
              }`}
              onClick={() => {
                console.log("hello");

                dispatch({ type: "CLOSECONTACTPANEL" });
                dispatch({ type: "CLOSEREPORTISSUEPANEL" });
                dispatch({ type: "OPENFEEDBACKPANEL" });
                dispatch({ type: "CLOSESUGGESTIONPANEL" });
              }}
            >
              <div className="fabddd3-like ">
                <div className="grp3-1 ">
                  <img src={icon2box1img1} alt="" className="ii1" />
                  <img src={icon2box1img2} alt="" className="ii2" />
                </div>
                <div className="grp3-2 ">
                  <img src={icon2box1img1} alt="" className="ii3" />
                  <img src={icon2box1img2} alt="" className="ii4" />
                </div>
              </div>
            </div>
            <div
              className={`fabddd4 d-flex justify-content-center align-items-center  ${
                openReportIssuePanel ? "selectedclass" : ""
              }`}
              onClick={() => {
                console.log("hello");

                dispatch({ type: "CLOSECONTACTPANEL" });
                dispatch({ type: "OPENREPORTISSUEPANEL" });
                dispatch({ type: "CLOSEFEEDBACKPANEL" });
                dispatch({ type: "CLOSESUGGESTIONPANEL" });
              }}
            >
              <div className="fabddd4-center d-flex justify-content-center align-items-center">
                <img src={nav1Icon} alt="" />
              </div>
            </div>
            <div
              className="fabddd5 d-flex justify-content-center align-items-center"
              onClick={() => {
                dispatch({ type: "CLOSEFEEDBACK" });
                dispatch({ type: "CLOSECONTACTPANEL" });
                dispatch({ type: "CLOSEREPORTISSUEPANEL" });
                dispatch({ type: "CLOSEFEEDBACKPANEL" });
                dispatch({ type: "CLOSESUGGESTIONPANEL" });
              }}
            >
              <div
                className="fabclosee d-flex justify-content-center align-items-center"
                onClick={() => {
                  dispatch({ type: "CLOSEFEEDBACK" });
                  dispatch({ type: "CLOSEDARKOVERLAY" });
                }}
              >
                <img src={closeIcon} alt="" className="clsii" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="contact reportPanel mobileanimationclass newheight d-flex flex-column align-items-end justify-content-center ">
          <div className="cardd emailCard feedbackemailcard contactnotlogin">
            <div className="headerr d-flex flex-column align-items-center justify-content-between">
              <p className="text-center p1">
                Let us know what <span className="dark">your queries</span>
                <span className="d-block">are!</span>
              </p>

              <img src={Divider} alt="" className="divider" />
            </div>
            <div className="issue-Content notloginissue">
              <div className="description-section pt-5 email-description-section notLogindescSec">
                {/* <div className="desc-label mb-3 ">
                <label htmlFor="input-wrapper">Describe the issue in detail<img src={asterix} alt="" className="ms-1"/></label>
              </div> */}

                <div className="name-section d-flex flex-column mb-3">
                  <label
                    htmlFor="name"
                    className="name mb-3 notloginlabelContactpanelmqq"
                    id="name"
                    style={{ width: "15rem" }}
                  >
                    Your Name
                    <img src={asterix} alt="" className=" ms-1 d-inline" />
                  </label>
                  <input
                    type="text"
                    className="nameinput notlogincontactpanelmq"
                    placeholder="Enter your Name"
                    value={names}
                    onChange={(e) => {
                      setnames(e.target.value);
                    }}
                  />
                </div>

                <div className="name-section d-flex flex-column mb-3">
                  <label
                    htmlFor="email"
                    className="name mb-3 notloginlabelContactpanelmqq"
                    id="name"
                    style={{ width: "15rem" }}
                  >
                    Your Email
                    <img src={asterix} alt="" className=" ms-1 d-inline" />
                  </label>
                  <input
                    type="email"
                    className="nameinput notlogincontactpanelmq"
                    name="email"
                    placeholder="Enter your Name"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  />
                </div>

                <div className="name-section d-flex flex-column mb-3">
                  <label
                    htmlFor="email"
                    className="name mb-3 notloginlabelContactpanelmqq"
                    id="name"
                    style={{ width: "15rem" }}
                  >
                    Your Mobile Number
                  </label>
                  <input
                    type="email"
                    className="nameinput notlogincontactpanelmq"
                    name="email"
                    placeholder="Enter your Name"
                    value={mobile}
                    onChange={(e) => {
                      setmobile(e.target.value);
                    }}
                  />
                </div>

                <div className="desc-label mb-3 ">
                  <label
                    htmlFor="input-wrapper custominwra xxx"
                    style={{ width: "19rem" }}
                  >
                    What would you like to ask
                    <img src={asterix} alt="" className=" ms-1 d-inline" />
                  </label>
                </div>

                <div className="deswc d-flex flex-column align-items-end emaildeswc notloginalignstart">
                  <div
                    className="textfield d-flex flex-column justify-content-between notlogintextField"
                    style={{ height: "8.25rem" }}
                  >
                    <input
                      type="text"
                      className="input-wrapper"
                      name="input-wrapper"
                      placeholder="Write Here"
                      value={text}
                      onChange={(e) => {
                        settext(e.target.value);
                      }}
                    />
                  </div>

                  {/* <button className={` ${text === '' && email === '' ?'submitbtn':'submitbtndark'}`} onClick={handleReportIssue}>Submit</button>
                   */}
                  <button
                    className={` notloginsubbtnnnn ${
                      text.trim() !== "" &&
                      mobile.trim() !== "" &&
                      email.trim() !== "" &&
                      names.trim() !== ""
                        ? "submitbtndark"
                        : "submitbtn disabled"
                    }`}
                    onClick={handleReportIssue}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fablist-reportPanel d-flex align-items-center justify-content-between notloginContactPanelfabllistmq">
            <div
              className={`nav4-icon-box fabddd1 ${
                OpenContactPanel ? "selectedclass" : ""
              }`}
              onClick={() => {
                console.log("hello");

                dispatch({ type: "OPENCONTACTPANEL" });
                dispatch({ type: "CLOSEREPORTISSUEPANEL" });
                dispatch({ type: "CLOSEFEEDBACKPANEL" });
                dispatch({ type: "CLOSESUGGESTIONPANEL" });
              }}
            >
              <div className="icon-wrapper4 ">
                <img src={nav4img1} alt="" className="nav4Img1" />
                <div className="nav4ImgWrapper custommm">
                  <img src={nav4Img2} alt="" className="nav4Img2" />
                  <img src={nav4Img3} alt="" className="nav4Img3" />
                </div>
              </div>
            </div>
            <div
              className={`fabddd2 d-flex justify-content-center align-items-center ${
                OpenSuggestionPanel ? "selectedclass" : ""
              }`}
              onClick={() => {
                console.log("hello");

                dispatch({ type: "CLOSECONTACTPANEL" });
                dispatch({ type: "CLOSEREPORTISSUEPANEL" });
                dispatch({ type: "CLOSEFEEDBACKPANEL" });
                dispatch({ type: "OPENSUGGESTIONPANEL" });
              }}
            >
              <div className="fabddd2-center d-flex justify-content-center align-items-center">
                <img src={icon3} alt="" className="ggg3 ms-1 mt-1" />
              </div>
            </div>
            <div
              className={`fabddd3 d-flex justify-content-center align-items-center  ${
                OpenFeedbackPanel ? "selectedclass" : ""
              }`}
              onClick={() => {
                console.log("hello");

                dispatch({ type: "CLOSECONTACTPANEL" });
                dispatch({ type: "CLOSEREPORTISSUEPANEL" });
                dispatch({ type: "OPENFEEDBACKPANEL" });
                dispatch({ type: "CLOSESUGGESTIONPANEL" });
              }}
            >
              <div className="fabddd3-like ">
                <div className="grp3-1 ">
                  <img src={icon2box1img1} alt="" className="ii1" />
                  <img src={icon2box1img2} alt="" className="ii2" />
                </div>
                <div className="grp3-2 ">
                  <img src={icon2box1img1} alt="" className="ii3" />
                  <img src={icon2box1img2} alt="" className="ii4" />
                </div>
              </div>
            </div>
            <div
              className={`fabddd4 d-flex justify-content-center align-items-center  ${
                openReportIssuePanel ? "selectedclass" : ""
              }`}
              onClick={() => {
                console.log("hello");

                dispatch({ type: "CLOSECONTACTPANEL" });
                dispatch({ type: "OPENREPORTISSUEPANEL" });
                dispatch({ type: "CLOSEFEEDBACKPANEL" });
                dispatch({ type: "CLOSESUGGESTIONPANEL" });
              }}
            >
              <div className="fabddd4-center d-flex justify-content-center align-items-center">
                <img src={nav1Icon} alt="" />
              </div>
            </div>
            <div
              className="fabddd5 d-flex justify-content-center align-items-center"
              onClick={() => {
                dispatch({ type: "CLOSEFEEDBACK" });
                dispatch({ type: "CLOSECONTACTPANEL" });
                dispatch({ type: "CLOSEREPORTISSUEPANEL" });
                dispatch({ type: "CLOSEFEEDBACKPANEL" });
                dispatch({ type: "CLOSESUGGESTIONPANEL" });
              }}
            >
              <div
                className="fabclosee d-flex justify-content-center align-items-center"
                onClick={() => {
                  dispatch({ type: "CLOSEFEEDBACK" });
                  dispatch({ type: "CLOSEDARKOVERLAY" });
                }}
              >
                <img src={closeIcon} alt="" className="clsii" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactPanel;
