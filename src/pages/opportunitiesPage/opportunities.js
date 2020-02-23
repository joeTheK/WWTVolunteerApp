import React, { Component } from "react";
import "./opportunities.css";
import Navbar from "../components/Navbar";
import { Card, Button } from "semantic-ui-react";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Dropdown } from 'semantic-ui-react'

// import { validate } from "../../utils/volunteer_validator";
//
import Tabletop from "tabletop";
//Dynamically pulls from google sheets: requires npm install tabletop
          
class Opportunities extends Component {
  state = {
    open: false,
  };
  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open,
      };
    });
  };
  //Data Table Stuff:
  constructor(props) {
    super(props);
    const { match } = this.props;
    console.log(match);

    this.state = {
      data: [],
      op: match.params["op"],
      filterType: "All"
    };
  }
  componentDidMount() {
    Tabletop.init({
      key: "1KePg5zYNccqfqvO5skrvSYPPEyzWpqrFq-2MlfxTQJ4",
      //Key of the Google Sheets page
      callback: googleData => {
        this.setState({
          data: googleData
        });
      },
      simpleSheet: true
    });
  }
  //^^ Data Table Stuff

  render() {
    
    //Mess with Table CSS here:
    // var tableStyle = {
    //   border: "1px solid black",
    //   borderright: "1px solid red",
    //   paddingTop: "0px",
    //   paddingBottom: "0px",
    //   paddingLeft: "0px",
    //   paddingRight: "10px",
    //   fontSize: "small",
    //   padding: "0",
    //   margin: "0"
    // };
    const { data } = this.state;
    //table stuff^^
    // if (this.state.op === "alt") {
      console.log(data);
      var dataToShow;
      if (this.state.filterType === "All") {
        dataToShow = data;
      }
      // if (this.state.filterType === "onlyvalid") {
      //   dataToShow = this.filterList(data);
      // }
      if (this.state.filterType === "Women") {
        dataToShow = this.filterListForWomen(this.filterList(data));
      }
      if (this.state.filterType === "Arts") {
        dataToShow = this.filterListForArts(data);
      }
      if (this.state.filterType === "Animals") {
        dataToShow = this.filterListForAnimals(this.filterList(data));
      }
      if (this.state.filterType === "Children") {
        dataToShow = this.filterListForChildren(this.filterList(data));
      }
      if (this.state.filterType === "Legal") {
        dataToShow = this.filterListForLegal(this.filterList(data));
      }
      if (this.state.filterType === "Environmental") {
        dataToShow = this.filterListForEnvironmental(this.filterList(data));
      }
      if (this.state.filterType === "Racial/Ethnic") {
        dataToShow = this.filterListForRac(this.filterList(data));
      }
      if (this.state.filterType === "Health") {
        dataToShow = this.filterListForHealth(this.filterList(data));
      }
      if (this.state.filterType === "Disabilities") {
        dataToShow = this.filterListForDisab(this.filterList(data));
      }
      if (this.state.filterType === "Hunger") {
        dataToShow = this.filterListForHunger(this.filterList(data));
      }
      if (this.state.filterType === "Homelessness") {
        dataToShow = this.filterListForHome(this.filterList(data));
      }
      if (this.state.filterType === "Community") {
        dataToShow = this.filterListForCommunity(this.filterList(data));
      }
      if (this.state.filterType === "Music") {
        dataToShow = this.filterListForMusic(this.filterList(data));
      }
      if (this.state.filterType === "Faith") {
        dataToShow = this.filterListForFaith(this.filterList(data));
      }
      if (this.state.filterType === "Veterans") {
        dataToShow = this.filterListForVeterans(this.filterList(data));
      }
      if (this.state.filterType === "Education") {
        dataToShow = this.filterListForEducation(this.filterList(data));
      }
      if (this.state.filterType === "LGBTQIA") {
        dataToShow = this.filterListForLGBTQIA(this.filterList(data));
      }
      if (this.state.filterType === "Youth") {
        dataToShow = this.filterListForYouth(this.filterList(data));
      }
      if (this.state.filterType === "Seniors") {
        dataToShow = this.filterListForSeniors(this.filterList(data));
      }
      if (this.state.filterType === "Fitness") {
        dataToShow = this.filterListForFitness(this.filterList(data));
      }
      if (this.state.filterType === "Sports") {
        dataToShow = this.filterListForSports(this.filterList(data));
      }
      return (
        
        <div className="OpportunitiesBody">
          <Navbar />
          {/* <Button onClick={this.showAll}>ALL</Button>{" "} */}
          {/* <Button onClick={this.showOnlyValid}>Only Valid</Button> */}
          {/* <Button onClick={this.showOnlyWomen}>Women</Button> */}
          {/* <Button onClick={this.showOnlyAnimals}>Animal</Button> */}
          {/* <Button onClick={this.showOnlyArts}>Arts</Button> */}
          <div className="container">
      <Button onClick={this.showAll}>{this.state.filterType}</Button>
  <button type="button" class="ui button icon only" onClick={this.handleButtonClick}>
  <FontAwesomeIcon icon={faFilter} />


  </button>
  {this.state.open && (
    <div class="dropdown">
      <ul className = "list">
      <li><Button onClick={this.showOnlyRac}>Racial/Ethnic</Button></li>
        <li><Button onClick={this.showOnlyWomen}>Women</Button></li>
        <li><Button onClick={this.showOnlyAnimals}>Animal</Button></li>
        <li><Button onClick={this.showOnlyArts}>Arts</Button></li>
        <li><Button onClick={this.showOnlyChildren}>Children</Button></li>
        <li><Button onClick={this.showOnlyEnvironmental}>Environmental</Button></li>
        <li><Button onClick={this.showOnlyLegal}>Legal</Button></li>
        <li><Button onClick={this.showAll}>ALL</Button>{" "}</li>

        </ul>
        <ul className = "list">
        <li><Button onClick={this.showOnlyHealth}>Health</Button></li>
        <li><Button onClick={this.showOnlyDisab}>Disabilities</Button></li>
        <li><Button onClick={this.showOnlyHunger}>Hunger</Button></li>
        <li><Button onClick={this.showOnlyHome}>Homelessness</Button></li>
        <li><Button onClick={this.showOnlyCommunity}>Community</Button></li>
        <li><Button onClick={this.showOnlyMusic}>Music</Button></li>
        <li><Button onClick={this.showOnlyFaith}>Faith</Button></li>
        </ul>
        <ul className = "list2">
        <li><Button onClick={this.showOnlyVeterans}>Veterans</Button></li>
        <li><Button onClick={this.showOnlyEducation}>Education</Button></li>
        <li><Button onClick={this.showOnlyLGBTQIA}>LGBTQIA</Button></li>
        <li><Button onClick={this.showOnlyYouth}>Youth</Button></li>
        <li><Button onClick={this.showOnlySeniors}>Seniors</Button></li>
        <li><Button onClick={this.showOnlyFitness}>Fitness</Button></li>
        <li><Button onClick={this.showOnlySports}>Sports</Button></li>
        </ul>
    </div>
  )}
</div>

          <div className={"op_contain"}>
            {dataToShow.map(doc => {
              return (
                <>
                  <Card>
                    <Card.Content className="test">
                      <Card.Header>{doc.OrgName}</Card.Header>
                      <Card.Meta>{doc.Address}</Card.Meta>
                      <a
                        href={doc.DonationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Donate Now
                      </a>
                      &nbsp;
                      <a
                        href={doc.VolunteerForm}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apply now
                      </a>
                      <br />
                      <a
                        href={doc.Homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Contact Us
                      </a>
                      <p>{doc.DescriptionMission}</p>
                    </Card.Content>
                  </Card>
                </>
              );
            })}
          </div>
        </div>
      );
    // }

    // return (
    //   <div className="OpportunitiesBody">
    //     <Navbar />
    //     {console.log("i hit this")}
    //     {data.map(obj => {
    //       // Table below pulls from google sheet
    //       return (
    //         // obj.orgName pulls info from column header OrgName,
    //         //repeats for length of spreadsheet
    //         <div key={obj.OrgName}>
    //           <table style={tableStyle}>
    //             <td>{obj.OrgName}</td>
    //             <td>{obj.Categories}</td>
    //             <td>{obj.DescriptionMission}</td>
    //             <td>{obj.VolunteerForm}</td>
    //             <td>{obj.DonationLink}</td>
    //             <td>{obj.Email}</td>
    //             <td>{obj.Phone}</td>
    //             <td>{obj.Address}</td>
    //           </table>
    //         </div>
    //       );
    //     })}
    //   </div>
    // );
  }

  filterList(docs) {
    var temp = [];
    docs.forEach(doc => {
      // if (validate(doc)) {
        temp.push(doc);
      // }
    });
    return temp;
  }
  filterListForDisab(docs) {
    var temp = [];
    docs.forEach(doc => {
      if (doc["Categories"].match("disab")) {
        temp.push(doc);
      }
    });
    return temp;
  }
  filterListForHome(docs) {
    var temp = [];
    docs.forEach(doc => {
      if (doc["Categories"].match("home")) {
        temp.push(doc);
      }
    });
    return temp;
  }
  filterListForHunger(docs) {
    var temp = [];
    docs.forEach(doc => {
      if (doc["Categories"].match("hunger")) {
        temp.push(doc);
      }
    });
    return temp;
  }
  filterListForWomen(docs) {
    var temp = [];
    docs.forEach(doc => {
      if (doc["Categories"].match("women")) {
        temp.push(doc);
      }
    });
    return temp;
  }
  filterListForAnimals(docs) {
    var temp = [];
    docs.forEach(doc => {
      if (doc["Categories"].match("animals")) {
        temp.push(doc);
      }
    });
    return temp;
  }
  filterListForArts(docs) {
    var temp = [];
    docs.forEach(doc => {
      if (doc["Categories"].match("arts")) {
        temp.push(doc);
      }
    });
    return temp;
  }
  filterListForChildren(docs) {
    var temp = [];
    docs.forEach(doc => {
      if (doc["Categories"].match("children")) {
        temp.push(doc);
      }
    });
    return temp;
  }
  filterListForLegal(docs) {
    var temp = [];
    docs.forEach(doc => {
      if (doc["Categories"].match("legal")) {
        temp.push(doc);
      }
    });
    return temp;
  }
  filterListForRac(docs) {
    var temp = [];
    docs.forEach(doc => {
      if (doc["Categories"].match("rac")) {
        temp.push(doc);
      }
    });
    return temp;
  }
  filterListForEnvironmental(docs) {
    var temp = [];
    docs.forEach(doc => {
      if (doc["Categories"].match("environmental")) {
        temp.push(doc);
      }
    });
    return temp;
  }
  filterListForHealth(docs) {
    var temp = [];
    docs.forEach(doc => {
      if (doc["Categories"].match("health")) {
        temp.push(doc);
      }
    });
    return temp;
  }
  filterListForCommunity(docs) {
    var temp = [];
    docs.forEach(doc => {
      if (doc["Categories"].match("community")) {
        temp.push(doc);
      }
    });
    return temp;
  }
  filterListForMusic(docs) {
    var temp = [];
    docs.forEach(doc => {
      if (doc["Categories"].match("music")) {
        temp.push(doc);
      }
    });
    return temp;
  }
    filterListForFaith(docs) {
    var temp = [];
    docs.forEach(doc => {
      if (doc["Categories"].match("faith")) {
        temp.push(doc);
      }
    });
    return temp;
  }
  filterListForVeterans(docs) {
    var temp = [];
    docs.forEach(doc => {
      if (doc["Categories"].match("veterans")) {
        temp.push(doc);
      }
    });
    return temp;
  }
  filterListForEducation(docs) {
    var temp = [];
    docs.forEach(doc => {
      if (doc["Categories"].match("education")) {
        temp.push(doc);
      }
    });
    return temp;
  }
  filterListForLGBTQIA(docs) {
    var temp = [];
    docs.forEach(doc => {
      if (doc["Categories"].match("lgbtqia")) {
        temp.push(doc);
      }
    });
    return temp;
  }
  filterListForYouth(docs) {
    var temp = [];
    docs.forEach(doc => {
      if (doc["Categories"].match("youth")) {
        temp.push(doc);
      }
    });
    return temp;
  }
  filterListForSeniors(docs) {
    var temp = [];
    docs.forEach(doc => {
      if (doc["Categories"].match("seniors")) {
        temp.push(doc);
      }
    });
    return temp;
  }
  filterListForFitness(docs) {
    var temp = [];
    docs.forEach(doc => {
      if (doc["Categories"].match("fitness")) {
        temp.push(doc);
      }
    });
    return temp;
  }
  filterListForSports(docs) {
    var temp = [];
    docs.forEach(doc => {
      if (doc["Categories"].match("sports")) {
        temp.push(doc);
      }
    });
    return temp;
  }
  showAll = () => {
    this.handleButtonClick();

    this.setState({ filterType: "All" });
  };
  // showOnlyValid = () => {
  //   this.setState({ filterType: "onlyvalid" });
  // };
  showOnlyWomen = () => {
    this.handleButtonClick();
    this.setState({ filterType: "Women" });
  };

  showOnlyArts = () => {
    this.handleButtonClick();
    this.setState({ filterType: "Arts" });
  };
  showOnlyDisab = () => {
    this.handleButtonClick();
    this.setState({ filterType: "Disabilities" });
  };
  showOnlyHome = () => {
    this.handleButtonClick();
    this.setState({ filterType: "Homelessness" });
  };
  showOnlyChildren = () => {
    this.handleButtonClick();
    this.setState({ filterType: "Children" });
  };
  showOnlyAnimals = () => {
    this.handleButtonClick();
    this.setState({ filterType: "Animals" });
  };
  showOnlyHunger = () => {
    this.handleButtonClick();
    this.setState({ filterType: "Hunger" });
  };
  showOnlyLegal = () => {
    this.handleButtonClick();
    this.setState({ filterType: "Legal" });
  };
  showOnlyEnvironmental = () => {
    this.handleButtonClick();
    this.setState({ filterType: "Environmental" });
  };
  showOnlyRac = () => {
    this.handleButtonClick();
    this.setState({ filterType: "Racial/Ethnic" });
  };
  showOnlyHealth = () => {
    this.handleButtonClick();
    this.setState({ filterType: "Health" });
  };
  showOnlyCommunity = () => {
    this.handleButtonClick();
    this.setState({ filterType: "Community" });
  };
  showOnlyMusic = () => {
    this.handleButtonClick();
    this.setState({ filterType: "Music" });
  };
  showOnlyFaith = () => {
    this.handleButtonClick();
    this.setState({ filterType: "Faith" });
  };
  showOnlyVeterans = () => {
    this.handleButtonClick();
    this.setState({ filterType: "Veterans" });
  };
  showOnlyEducation = () => {
    this.handleButtonClick();
    this.setState({ filterType: "Education" });
  };
  showOnlyLGBTQIA = () => {
    this.handleButtonClick();
    this.setState({ filterType: "LGBTQIA" });
  };
  showOnlyYouth = () => {
    this.handleButtonClick();
    this.setState({ filterType: "Youth" });
  };
  showOnlySeniors = () => {
    this.handleButtonClick();
    this.setState({ filterType: "Seniors" });
  };
  showOnlyFitness = () => {
    this.handleButtonClick();
    this.setState({ filterType: "Fitness" });
  };
  showOnlySports = () => {
    this.handleButtonClick();
    this.setState({ filterType: "Sports" });
  };
}

export default Opportunities;
