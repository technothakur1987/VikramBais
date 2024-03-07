import React, { useContext, useState } from "react";
import "./FeedbackPanel.css";
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

const FeedbackPanel = () => {
  let {
    login,
    dispatch,
    OpenSuggestionPanel,
    openReportIssuePanel,
    OpenFeedbackPanel,
    OpenContactPanel,
  } = useContext(AppContext);

  const [text, settext] = useState("");
  const [email, setemail] = useState("");

  let handleReportIssue = () => {
    if (text !== "") {
      console.log(`${text} `);

      dispatch({ type: "CLOSEFEEDBACKPANEL" });
      dispatch({ type: "CLOSEFEEDBACK" });
      dispatch({ type: "OPENFEEDBACKMESSAGE" });

      setTimeout(() => {
        dispatch({ type: "CLOSEFEEDBACKTMESSAGE" });
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
        <div className="reportPanel mobileanimationclass newheight d-flex flex-column align-items-end justify-content-center loginreportpanel">
          <div className="cardd cardlogin loginCard anotherlogincard">
            <div className="headerr d-flex flex-column align-items-center justify-content-between">
              <p className="text-center p1">
                Let us know your <span className="dark">Feedback</span>
                <span className="d-block">about us!</span>
              </p>

              <img src={Divider} alt="" className="divider" />
            </div>
            <div className="issue-Content loginissuepaddingy">
              <div className="description-section pt-5 logindescripnotoppadding">
                <div className="deswc d-flex flex-column align-items-end mqlogindeswc">
                  <div className="textfield d-flex flex-column justify-content-between mqlogintextfield anotherlogintextfield">
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
                    <div className="attach-d ">
                      <div className="att-icon-box d-flex align-items-center px-2">
                        <img src={attachIcon} alt="" />
                        <p className="mb-0 ms-2">Attach</p>
                      </div>
                    </div>
                  </div>

                  {/*checkbox start here*/}
                  <form
                    action=""
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                    className="checkboxform loginfeedbackcheckboxformmq"
                  >
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label htmlFor="vehicle1" className="chklabel ms-2">
                      {" "}
                      Send feedback anonymously
                    </label>
                  </form>

                  {/*check box ends here*/}
                  <button
                    className={`loginsubmitbtn ${
                      text === "" ? "submitbtn disabled" : "submitbtndark"
                    }`}
                    onClick={handleReportIssue}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fablist-reportPanel d-flex align-items-center justify-content-between loginfablist anoltherfeedbackLoginfablist">
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
              <div className="fabclosee d-flex justify-content-center align-items-center" onClick={() => {
            dispatch({ type: "CLOSEFEEDBACK" });
            dispatch({type:'CLOSEDARKOVERLAY'})
          }}>
                <img src={closeIcon} alt="" className="clsii" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="reportPanel mobileanimationclass newheight d-flex flex-column align-items-end justify-content-center notLoginFeedbackpanelmq  ">
          
          
          <div className="cardd emailCard feedbackemailcard cardnotlogin anothernotlogincardfeedback h-100">
            <div className="headerr d-flex flex-column align-items-center justify-content-between">
              <p className="text-center">
                Let us know your <span className="dark">Feedback</span>
                <span className="d-block">about us!</span>
              </p>

              <img src={Divider} alt="" className="divider" />
            </div>
            <div className="issue-Content notloginissue notloginissuefeedbackmq">
            <div className="description-section pt-5 email-description-section notloginfeedbackdesc-Sectionmq">
                {/* <div className="desc-label mb-3 ">
                <label htmlFor="input-wrapper">Describe the issue in detail<img src={asterix} alt="" className="ms-1"/></label>
              </div> */}
                <div className="deswc d-flex flex-column align-items-end emaildeswc notloginfeedbackdeswcmq ">
                  <div className="textfield d-flex flex-column justify-content-between notloginfeedbackmqtextfield">
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
                    <div className="attach-d mqnotloginfeedbackattachd">
                      <div className="att-icon-box d-flex align-items-center px-2">
                        <img src={attachIcon} alt="" />
                        <p className="mb-0 ms-2">Attach</p>
                      </div>
                    </div>
                 
                 
                 
                 
                 
                  </div>

                  {/*email start here*/}

                  <div className="desc-email ">
                    <label htmlFor="email-label mb-2">
                      Enter your email to receive an update
                    </label>
                    <div className="desc-emailInputWrapper ">
                      <input
                        type="email"
                        className="email-label"
                        name="email-label"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => {
                          setemail(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  {/*email end herte*/}

                  <button
                    className={`loginfeedbacksubbtn ${
                      text.trim() !== "" && email.trim() !== ""
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
          
          
          
          
          <div className="fablist-reportPanel d-flex align-items-center justify-content-between mqnotLoginFablistFeedbacc">
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
              <div className="fabclosee d-flex justify-content-center align-items-center" onClick={() => {
            dispatch({ type: "CLOSEFEEDBACK" });
            dispatch({type:'CLOSEDARKOVERLAY'})
          }}>
                <img src={closeIcon} alt="" className="clsii" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackPanel;
