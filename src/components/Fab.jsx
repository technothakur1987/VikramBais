import React from "react";
import "./Fab.css";
import { useContext } from "react";
import { AppContext } from "../Store/store";
import { reducer } from "../Store/reducer";
import fabline1 from "../assets/fabline1.png";
import fabline2 from "../assets/fabline2.png";
import fabline3 from "../assets/fabline3.png";
import fabline4 from "../assets/fabline4.png";
import fabnotebook from "../assets/fabnotebook.png";
import fabpen from "../assets/fabpen.png";
import fabpen1 from "../assets/pen.png";
import nav1Icon from "../assets/nav1Icon.png";
import icon2box1img1 from "../assets/icon2-box1-img-1.png";
import icon2box1img2 from "../assets/icon2-box1-img-2.png";
import icon3 from "../assets/icon3.png";
import nav4img1 from "../assets/nav4Img1.png";
import nav4Img2 from "../assets/nav4Img2.png";
import nav4Img3 from "../assets/nav4Img3.png";
import closeIcon from "../assets/closeIcon.png";
import reportissuemessage from '../assets/reportissuemessage.png'
import feedbackmessage from '../assets/feedbackThanks.png'
import suggestionmessage from '../assets/suggestionmessage.png'
import contactmessage from '../assets/contactmessage.png'
import mobfab from '../assets/mobfab.png'



const Fab = () => {
  let {
    login,
    reportAnIsuee,
    shareFeedback,
    giveSuggestion,
    contactUs,
    dispatch,
    openfeedback,
    openReportIssuePanel,
    ReportIssueFormSubmissionMessage,
    OpenFeedbackPanel,
    FeedbackFormSubmissionMessage,
    OpenSuggestionPanel,
    SuggestionFormSubmissionMessage,
    OpenContactPanel,
    ContactFormSubmissionMessage

  } = useContext(AppContext);
  

  return (
    <>
    
    
    <div className="fab pe-5 ">
      <div
        className={`navigation-list  d-flex flex-column ${
          openfeedback ? "" : "navigation-dNone"
        }`}
      >
        <div
          className={`nav1 d-flex align-items-center ms-2 ${
            reportAnIsuee ? "" : "d-none"
          }`}
        >
          <div className="nav1-content-box" onClick={()=>{dispatch({type:'OPENREPORTISSUEPANEL'})}}>
            <p className="mb-0 fw-bolder ">Report an Issue</p>
          </div>
          <div className="nav1-icon-box">
            <div className="icon-wrapper1">
              <img src={nav1Icon} alt="" className="Icon1" />
            </div>
          </div>
        </div>
        <div
          className={`nav2 d-flex align-items-center ${
            shareFeedback ? "" : "d-none"
          }`}
        >
          <div className="nav2-content-box" onClick={()=>{
            
            dispatch({type:'OPENFEEDBACKPANEL'})}}>
            <p className="mb-0 fw-bolder ">Share Feedback</p>
          </div>
          <div className="nav2-icon-box ">
            <div className="icon-wrapper2">
              <div className="icon2-box1">
                <img src={icon2box1img1} alt="" className="icon2-box1-img-1" />
                <img src={icon2box1img2} alt="" className="icon2-box1-img-2" />
              </div>
              <div className="icon2-box2">
                <img src={icon2box1img1} alt="" className="icon2-box2-img-1" />
                <img src={icon2box1img2} alt="" className="icon2-box2-img-2" />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`nav3  d-flex align-items-center ${
            giveSuggestion ? "" : "d-none"
          }`}
        >
          <div className="nav3-content-box" onClick={()=>{dispatch({type:'OPENSUGGESTIONPANEL'})}}>
            <p className="mb-0 fw-bolder ">Give Suggestion</p>
          </div>
          <div className="nav3-icon-box">
            <div className="icon-wrapper3">
              <img src={icon3} alt="" className="Icon3" />
            </div>
          </div>
        </div>
        <div
          className={`nav4 d-flex align-items-center ${
            contactUs ? "" : "d-none"
          }`}
        >
          <div className="nav4-content-box" onClick={()=>{dispatch({type:'OPENCONTACTPANEL'})}}>
            <p className="mb-0 fw-bolder ">Contact Us</p>
          </div>
          <div className="nav4-icon-box">
            <div className="icon-wrapper4">
              <img src={nav4img1} alt="" className="nav4Img1" />
              <div className="nav4ImgWrapper">
                <img src={nav4Img2} alt="" className="nav4Img2" />
                <img src={nav4Img3} alt="" className="nav4Img3" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fab-D">
       {/* Report ISSUE FORM SUBMISSION MESSAGE open */}
    {ReportIssueFormSubmissionMessage && <img src={reportissuemessage} alt="" className="reportissuemessage" />}
    {/* Report ISSUE FORM SUBMISSION MESSAGE close */}

    {/* feedback FORM SUBMISSION MESSAGE open */}
    {FeedbackFormSubmissionMessage && <img src={feedbackmessage} alt="" className="feedbackmessage" />}
    {/* feedback FORM SUBMISSION MESSAGE close */}

    {/* SUGGESTION FORM SUBMISSION MESSAGE open */}
    {SuggestionFormSubmissionMessage && <img src={suggestionmessage} alt="" className="suggestionmessage" />}
    {/* SUGGESTION FORM SUBMISSION MESSAGE close */}


    {/* CONTACT FORM SUBMISSION MESSAGE open */}
    {ContactFormSubmissionMessage && <img src={contactmessage} alt="" className="contactmessage" />}
    {/* CONTACT FORM SUBMISSION MESSAGE close */}



          {/*desktop view fab btn start*/}
        <div
          className={`image-wrapper openfeedback desktopviewfab ${
            openfeedback ? " d-none" : ""
          }`}
          onClick={() => {
            dispatch({ type: "OPENFEEDBACK" });
          }}
        >
          <img src={fabpen} alt="" className="fabpen" />
          <img src={fabline1} alt="" className="fabline1" />
          <img src={fabline2} alt="" className="fabline2" />
          <img src={fabline2} alt="" className="fabline3" />
          <img src={fabline4} alt="" className="fabline4" />
          <img src={fabnotebook} alt="" className="fabnotebook" />
        </div>
         {/*desktop view fab btn stop*/}

          {/*mobile view fab btn start*/}

          <div
          className={`image-wrapper openfeedback mobileviewfab mobimage-wrapper ${
            openfeedback ? " d-none" : ""
          }`}
          onClick={() => {
            dispatch({ type: "OPENFEEDBACK" });
            dispatch({type:'DARKOVERLAY'})
          }}
        >
          <img src={mobfab} alt="" className="mobfab"/>
        </div>

           {/*mobile view fab btn stop*/}

        <div
          className={`image-wrapper closefeedback d-flex justify-content-center align-items-center ${
            openfeedback ? "" : "d-none"
          }`}
          onClick={() => {
            dispatch({ type: "CLOSEFEEDBACK" });
            dispatch({type:'CLOSEDARKOVERLAY'})
          }}
        >
          <img src={closeIcon} alt="" className="closeIcon" />
        </div>
      </div>


     

            

    </div>


</>
  );
};

export default Fab;
