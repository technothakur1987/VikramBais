import React, { useContext, useState } from "react";
import "./ReportIssuePannel.css";
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

const ReportIssuePannel = () => {
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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Interview Question");
  const options = ["Interview Question", "Job Question", "Regional Question"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  let handleReportIssue = () => {
    if (text !== "") {
      console.log(`${text} and ${selectedOption}`);
      dispatch({ type: "CLOSEREPORTISSUEPANEL" });
      dispatch({ type: "CLOSEFEEDBACK" });
      dispatch({ type: "OPENREPORTMESSAGE" });

      setTimeout(() => {
        dispatch({ type: "CLOSEREPORTMESSAGE" });
       
      }, 2000);

      setTimeout(() => {
       
        dispatch({type:'CLOSEDARKOVERLAY'})
      }, 2300);
    } else {
      console.log("form not submitted");
    }
  };

  return (

    <>
    
    
    
    
    
      {login ? (<div className="reportPanel mobileanimationclass d-flex flex-column align-items-end justify-content-center loginreportpanel ">
        <div className="cardd loginCard">
          <div className="headerr d-flex flex-column align-items-center justify-content-between">
            <p>
              Let us know about the <span className="dark">Issue</span> you are
              facing right now!
            </p>
            <img src={Divider} alt="" className="divider" />
          </div>

          <div className="issue-Content loginissuepaddingy">
            <div className="choose-Section py-5">
              <label htmlFor="" className="chooseSectionLabel mb-3">Choose a section</label>
              {/*dropdown*/}
              <div className="dropdown mqlogindropdown" onClick={() => setIsOpen(!isOpen)}>
                <div className="dropdown-button d-flex align-items-center">
                  <p className="mb-0">{selectedOption}</p>
                  <img src={dopdownarrow} alt="" className="dopdownarrow"/>
                </div>
                {isOpen && (
                  <div className="dropdown-content">
                    {options.map((option) => (
                      <div key={option} onClick={() => handleOptionClick(option)}>
                        <a>{option}</a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {/*dropdown ends here*/}
            </div>
            <div className="description-section pt-5 logindescripnotoppadding">
              <div className="desc-label mb-3 ">
                <label htmlFor="input-wrapper">Describe the issue in detail<img src={asterix} alt="" className="ms-1"/></label>
              </div>
              <div className="deswc d-flex flex-column align-items-end mqlogindeswc">
                 <div className="textfield d-flex flex-column justify-content-between mqlogintextfield">
                  <input type="text" className="input-wrapper " name="input-wrapper" placeholder="Write Here" value={text} onChange={(e)=>{settext(e.target.value)}}/>
                  <div className="attach-d ">
                    <div className="att-icon-box d-flex align-items-center px-2">
                      <img src={attachIcon} alt="" />
                      <p className="mb-0 ms-2">Attach</p>
                    </div>  
                  </div>    
                </div>
               <button className={`loginsubmitbtn ${text === ''?'submitbtn disabled':'submitbtndark'}`} onClick={handleReportIssue}>Submit</button>
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
      
      <div className="reportPanel mobileanimationclass d-flex flex-column align-items-end justify-content-center">
        <div className="cardd emailCard">
          <div className="headerr d-flex flex-column align-items-center justify-content-between">
            <p>
              Let us know about the <span className="dark">Issue</span> you are
              facing right now!
            </p>
            <img src={Divider} alt="" className="divider" />
          </div>
          <div className="issue-Content notloginissue">
            <div className="choose-Section py-5">
              <label htmlFor="" className="chooseSectionLabel mb-3 mqmb0">
                Choose a section
              </label>
              {/*dropdown*/}
              <div
                className="dropdown mqfullwidth"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="dropdown-button d-flex align-items-center">
                  <p className="mb-0">{selectedOption}</p>
                  <img src={dopdownarrow} alt="" className="dopdownarrow" />
                </div>
                {isOpen && (
                  <div className="dropdown-content">
                    {options.map((option) => (
                      <div
                        key={option}
                        onClick={() => handleOptionClick(option)}
                      >
                        <a>{option}</a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {/*dropdown ends here*/}
            </div>

            <div className="description-section pt-5 email-description-section mqnotoppad">
              <div className="desc-label mb-3 mqnotoppad  mqmb0">
                <label htmlFor="input-wrapper">Describe the issue in detail<img src={asterix} alt="" className="ms-1"/></label>
              </div>
              <div className="deswc d-flex flex-column align-items-end emaildeswc mqalignstart mqheight">
                <div className="textfield d-flex flex-column justify-content-between mqtextfield">
                  <input type="text" className="input-wrapper" name="input-wrapper" placeholder="Write Here" value={text} onChange={(e)=>{settext(e.target.value)}}/>
                  <div className="attach-d ">
                    <div className="att-icon-box d-flex align-items-center px-2">
                      <img src={attachIcon} alt="" />
                      <p className="mb-0 ms-2">Attach</p>
                    </div>  
                  </div>    
                </div>

                {/*email start here*/}  

                <div className="desc-email ">
              <label htmlFor="email-label mb-2 mqmbc">Enter your email to receive an update</label>
              <div className="desc-emailInputWrapper ">
              <input type="email" className="email-label" name="email-label" placeholder='Enter your Email' value={email} onChange={(e)=>{setemail(e.target.value)}}/>

              </div>
              

            </div>



               {/*email end herte*/}       




                {/* <button className={` ${text === '' && email === '' ?'submitbtn':'submitbtndark'}`} onClick={handleReportIssue}>Submit</button>
               */}
               <button className={`mqbtn ${text.trim() !== '' && email.trim() !== '' ? 'submitbtndark' : 'submitbtn disabled'}`} onClick={handleReportIssue}>Submit</button>

              
              </div>
            </div>  
          </div>
        </div>
        <div className="fablist-reportPanel d-flex align-items-center justify-content-between">
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

export default ReportIssuePannel;
