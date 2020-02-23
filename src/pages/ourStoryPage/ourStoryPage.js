import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "./ourStory.css";
import MissionVision from "../components/MissionVisionCopy";
import campBarn from "./campBarnabas.JPG";
import homelessB from "./homelessBags.JPG";
// import ria from "./rianna.JPG";

class ourStory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar />
        {/* <div className="firstSec">
          <p className="firstSecA">At CSMB We Value Service</p>

          <p className="firstSecB">Compassion and Ethics</p>
          <p className="firstSecC">one of our six core values</p>
        </div> */}
        <img
          src="https://restorestlouis.org/wp-content/uploads/2016/04/TFS-Edit.jpg"
          alt="Freedom School"
          className="topPhoto"
        />
        <div className="container">
          <div className="row">
            {/* <div className="col-4 cande topboys">Our Values</div> */}
            <div className="col-12 topboys">
              <div className="topgirl">
                <span className="topboyA">
                  One of our six core values at CSMB is{" "}
                </span>
                <span className="topboyB">Compassion and Ethics</span>
              </div>
              <footer class="blockquote-footer" id="bottom">All students spend a minimum of 100 hours within their
                communities, volunteering and serving </footer>
            </div>
          </div>
        </div>
        {/* <hr className="hrbruh" /> */}
        {/* <div>
          <span>CSMB Students</span>
        </div> */}

        <div className="container">
          <div className="row stats">
            <div className="col-4 cande" id="students">CSMB Students</div>
            <div className="col-4 bigStats">
              <ul>
                <li className="">Have served at 594 locations</li>
                <li className="">Have logged over 30,000 hours</li>
              </ul>
            </div>
            <div className="col-4 bigStats">
              <ul>
                <li className="">
                  Have raised over $9,000 for SLUDM hospitals
                </li>
                <li className="">Love serving in their communities</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <MissionVision />
          </div>
        </div>
        <div className="container specBtmCont">
          <div className="row ">
            <div className="col-7">
              {/* <img src={campBarn} alt="Filler" className="topPhoto" /> */}
              <img src={homelessB} alt="Filler" className="topPhoto btmPhoto" />
              {/* <img src={ria} alt="Filler" className="topPhoto" /> */}
            </div>
            <div className="col-5 pollRes">
              <div>
                <span className="stat">4,732</span>
                <span> unlogged hours</span>
              </div>
              <div className="secondarySpacing">
                <span className="stat">58.3%</span>
                <span className="secondarySpacing">
                  {" "}
                  of students find logging hours <br />
                  to be difficult/confusing
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container specBtmCont">
          <div className="row ">
            <div className="col-5 pollRes yeetbruh">
              <div>
                <span className="stat">43.9%</span>
                <span> of students have no logged hours</span>
              </div>
              <div className="secondarySpacing">
                <span className="stat">50%</span>
                <span>
                  {" "}
                  of students have trouble finding
                  <br /> volunteering opportunities
                </span>
              </div>
            </div>
            <div className="col-7">
              <img src={campBarn} alt="Filler" className="topPhoto btmPhoto" />
              {/* <img src={ria} alt="Filler" className="topPhoto" /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ourStory;
