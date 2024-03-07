import React, { useContext } from "react";
import "./CenterPanel.css";
import StartUp from "../assets/Startup.png";
import Eye from "../assets/eye.png";
import Outline from "../assets/outline.png";
import dropdownArrow from "../assets/dropdownarrow.png";
import Eclipse from "../assets/eclipse.png";
import Pen from "../assets/pen.png";
import hand1 from "../assets/hand1.png";
import hand2 from "../assets/hand2.png";
import post from "../assets/post.png";
import mobcomtype from "../assets/mobcomtype.png";
import fourthmob from "../assets/fourthmob.png";
import fourthmob2 from "../assets/fourthmob2.png";

const CenterPanel = () => {
  return (
    <>
      <div className="center-panel ">
        <div className="question-panel">
          <div className="question-frame         ">
            <div className="Ques1       ">
              <div className="Ques1-1 d-flex">
                <div className="Ques1-1-1 d-flex justify-content-center align-items-center">
                  Design
                </div>
                <div className="Ques1-1-2 d-flex justify-content-center align-items-center">
                  Technology
                </div>
              </div>
              <div className="Ques1-2    ">
                <img src={StartUp} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="Ques2      ">
              <p className="Quest2-p1">
                A travel startup wants Amazon to pre-install their personal
                travel agent bot on existing Amazon Echos. What is the value of
                the partnership to the travel startup?{" "}
              </p>
              <p className="Quest2-p2">
                Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet
                nec viverra tincidunt ? Amet ullamcorper velit tristique
                scelerisque donec sed viverra arcu. Amet arcu vitae sit
                scelerisque ultrices magna cursus se?{" "}
              </p>
            </div>
            <div className="Ques3       d-flex justify-content-between      ">
              <div className="Ques3-1 d-flex align-items-center     ">
                <img src={Eye} alt="" className="img-fluid" />
                <p className="Ques3-1-p mb-0 ms-2">100 Views</p>
              </div>
              <div className="Ques3-2 d-flex align-items-center justify-content-end">
                <img src={Outline} alt="" className="img-fluid me-2" />
                <p className="Ques3-2-p mb-0">
                  How should you word your answer?
                </p>
              </div>
            </div>
          </div>
          <div className="answerbox"></div>
        </div>
        <div className="second-section my-3">
          <div className="answer2       ">Answers (23)</div>
          <div className="sort d-flex align-items-center       ">
            <div className="sortspan">Sort By:</div>
            <div className="dropdown-span d-flex align-items-center">
              <p className="mb-0 drp">Popular</p>
              <img src={dropdownArrow} alt="" />
            </div>
          </div>
        </div>
        <div className="userAnswers ">
          <div className="answer1 d-flex justify-content-center align-items-center mb-3">
            <div className="answer1center d-flex flex-column">
              <div className="answer1center-1">
                <div className="answer1center-1-1 d-flex">
                  <img src={Eclipse} alt="" className="ecl" />
                  <div className="userDetails">
                    <p className="useDetailspmain mb-0">
                      <span className="userDetailsmainspan1">Neha Bhat</span>
                      <span className="userDetailsmainspan2">(You)</span>
                    </p>
                    <p className="useDetailsp mb-0">Jun 27, 2023</p>
                  </div>
                </div>
                <div className="answer1center-1-2 d-flex align-items-center justify-content-between">
                  <img src={Pen} alt="" className="pen" />
                  <button className="editbtn">Edit</button>
                </div>
              </div>
              <div className="answer1center-2 py-2">
                <p className="answer1center-2p mb-0">
                  Lorem ipsum dolor sit amet consectetur. Elit et ut at
                  vestibulum enim ornare feugi vitae. Eget proin aliquam blandit
                  eget vitae erat fermentum lacus. Dignissim done mi vel
                  fermentum. Id ultrices risus sit pel sit elit morbi. Mi sed
                  mauris aenean odio egestas ullamcorper. Dignissim in vel fusce
                  id. Sit blandit{" "}
                  <span className="s1span">
                    diam ridiculus ipsum interdum ut velit quam. Bibendum amet
                    mi....
                  </span>
                  <span className="darkspan"> Show more</span>
                </p>
              </div>
              <div className="answer1center-3  d-flex align-items-center">
                <div className="upvote d-flex align-items-center justify-content-end">
                  <div className="upvote-grp d-flex align-items-center justify-content-center">
                    <img src={hand1} alt="" className="hand1 me-0 mt-2" />
                    <img src={hand2} alt="" className="hand2" />
                  </div>
                  <p className="upvotep mb-0">Like</p>
                </div>
                <div className="post  ps-1 d-flex align-items-center justify-content-between">
                  <div className="post1 p-0">
                    <img src={post} alt="" className="" />
                  </div>
                  <input
                    type="text"
                    className="post2"
                    name="post2"
                    placeholder="Add a comment"
                  />
                  <button className="post3">Post</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      {/*mobile view only starts here*/}
      <div className="mobileview  ">
        <div className="Question-Section-center w-100 h-100 ">
          <div className="Ques border px-1 py-2 rounded mb-3">
            <div className="FirstFrame d-flex align-items-center justify-content-between mb-2">
              <p className="mb-0">Posted on 28 Jun 2023</p>
              <img src={mobcomtype} alt="" />
            </div>
            <div className="SeconFrame mb-2">
              <p className="mb-0">
                A travel startup wants Amazon to pre-install their personal
                travel agent bot on existing Amazon Echos. What is the value of
                the partnership to the travel startup? A travel startup wants
                Amazon to pre-install their personal travel agent bot on
                existing Amazon Echos. What is the value of the partnership to
                the travel startup?
              </p>
            </div>
            <div className="ThirdFrame mb-3 d-flex align-items-center justify-content-between">
              <div className="third1 d-flex align-items-center justify-content-between">
                <div className="third1-1">Design</div>
                <div className="third1-2">UX</div>
              </div>
              <div className="third2">EASY</div>
            </div>
            <div className="FourthFrame mb-2 d-flex align-items-center justify-content-between">
              <div className="fourth1 d-flex align-items-center justify-content-start">
                <img src={fourthmob} alt="" />
                <p className="mb-0 ms-2">23 Answers</p>
              </div>
              <div className="fourth2 d-flex align-items-center justify-content-end">
                <img src={fourthmob2} alt="" />
                <p className="mb-0 ms-2">100 Views</p>
              </div>
            </div>
          </div>
          <div className="Ques border px-1 py-2 rounded mb-3">
            <div className="FirstFrame d-flex align-items-center justify-content-between mb-2">
              <p className="mb-0">Posted on 28 Jun 2023</p>
              <img src={mobcomtype} alt="" />
            </div>
            <div className="SeconFrame mb-2">
              <p className="mb-0">
                A travel startup wants Amazon to pre-install their personal
                travel agent bot on existing Amazon Echos. What is the value of
                the partnership to the travel startup? A travel startup wants
                Amazon to pre-install their personal travel agent bot on
                existing Amazon Echos. What is the value of the partnership to
                the travel startup?
              </p>
            </div>
            <div className="ThirdFrame mb-3 d-flex align-items-center justify-content-between">
              <div className="third1 d-flex align-items-center justify-content-between">
                <div className="third1-1">Design</div>
                <div className="third1-2">UX</div>
              </div>
              <div className="third2">EASY</div>
            </div>
            <div className="FourthFrame mb-2 d-flex align-items-center justify-content-between">
              <div className="fourth1 d-flex align-items-center justify-content-start">
                <img src={fourthmob} alt="" />
                <p className="mb-0 ms-2">23 Answers</p>
              </div>
              <div className="fourth2 d-flex align-items-center justify-content-end">
                <img src={fourthmob2} alt="" />
                <p className="mb-0 ms-2">100 Views</p>
              </div>
            </div>
          </div>
          <div className="Ques border px-1 py-2 rounded mb-3">
            <div className="FirstFrame d-flex align-items-center justify-content-between mb-2">
              <p className="mb-0">Posted on 28 Jun 2023</p>
              <img src={mobcomtype} alt="" />
            </div>
            <div className="SeconFrame mb-2">
              <p className="mb-0">
                A travel startup wants Amazon to pre-install their personal
                travel agent bot on existing Amazon Echos. What is the value of
                the partnership to the travel startup? A travel startup wants
                Amazon to pre-install their personal travel agent bot on
                existing Amazon Echos. What is the value of the partnership to
                the travel startup?
              </p>
            </div>
            <div className="ThirdFrame mb-3 d-flex align-items-center justify-content-between">
              <div className="third1 d-flex align-items-center justify-content-between">
                <div className="third1-1">Design</div>
                <div className="third1-2">UX</div>
              </div>
              <div className="third2">EASY</div>
            </div>
            <div className="FourthFrame mb-2 d-flex align-items-center justify-content-between">
              <div className="fourth1 d-flex align-items-center justify-content-start">
                <img src={fourthmob} alt="" />
                <p className="mb-0 ms-2">23 Answers</p>
              </div>
              <div className="fourth2 d-flex align-items-center justify-content-end">
                <img src={fourthmob2} alt="" />
                <p className="mb-0 ms-2">100 Views</p>
              </div>
            </div>
          </div>
          <div className="Ques border px-1 py-2 rounded mb-3">
            <div className="FirstFrame d-flex align-items-center justify-content-between mb-2">
              <p className="mb-0">Posted on 28 Jun 2023</p>
              <img src={mobcomtype} alt="" />
            </div>
            <div className="SeconFrame mb-2">
              <p className="mb-0">
                A travel startup wants Amazon to pre-install their personal
                travel agent bot on existing Amazon Echos. What is the value of
                the partnership to the travel startup? A travel startup wants
                Amazon to pre-install their personal travel agent bot on
                existing Amazon Echos. What is the value of the partnership to
                the travel startup?
              </p>
            </div>
            <div className="ThirdFrame mb-3 d-flex align-items-center justify-content-between">
              <div className="third1 d-flex align-items-center justify-content-between">
                <div className="third1-1">Design</div>
                <div className="third1-2">UX</div>
              </div>
              <div className="third2">EASY</div>
            </div>
            <div className="FourthFrame mb-2 d-flex align-items-center justify-content-between">
              <div className="fourth1 d-flex align-items-center justify-content-start">
                <img src={fourthmob} alt="" />
                <p className="mb-0 ms-2">23 Answers</p>
              </div>
              <div className="fourth2 d-flex align-items-center justify-content-end">
                <img src={fourthmob2} alt="" />
                <p className="mb-0 ms-2">100 Views</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*mobile view ends here*/}
    </>
  );
};

export default CenterPanel;
