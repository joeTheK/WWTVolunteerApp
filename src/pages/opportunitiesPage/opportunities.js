import React, { Component } from "react";
import "./opportunities.css";
import Navbar from "../components/Navbar";
import { Card, Button } from "semantic-ui-react";
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
      filterType: "all"
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
      if (this.state.filterType === "all") {
        dataToShow = data;
      }
      // if (this.state.filterType === "onlyvalid") {
      //   dataToShow = this.filterList(data);
      // }
      if (this.state.filterType === "women") {
        dataToShow = this.filterListForWomen(this.filterList(data));
      }
      if (this.state.filterType === "arts") {
        dataToShow = this.filterListForArts(data);
      }
      if (this.state.filterType === "animals") {
        dataToShow = this.filterListForAnimals(this.filterList(data));
      }
      if (this.state.filterType === "children") {
        dataToShow = this.filterListForChildren(this.filterList(data));
      }
      if (this.state.filterType === "legal") {
        dataToShow = this.filterListForLegal(this.filterList(data));
      }
      if (this.state.filterType === "environmental") {
        dataToShow = this.filterListForEnvironmental(this.filterList(data));
      }
      if (this.state.filterType === "rac") {
        dataToShow = this.filterListForRac(this.filterList(data));
      }
      if (this.state.filterType === "health") {
        dataToShow = this.filterListForHealth(this.filterList(data));
      }
      if (this.state.filterType === "disab") {
        dataToShow = this.filterListForDisab(this.filterList(data));
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
  <button type="button" class="button" onClick={this.handleButtonClick}>
    ☰
  </button>
  {this.state.open && (
    <div class="dropdown">
      <ul>
        <li><Button onClick={this.showAll}>ALL</Button>{" "}</li>
        <li><Button onClick={this.showOnlyWomen}>Women</Button></li>
        <li><Button onClick={this.showOnlyAnimals}>Animal</Button></li>
        <li><Button onClick={this.showOnlyArts}>Arts</Button></li>
        <li><Button onClick={this.showOnlyChildren}>Children</Button></li>
        <li><Button onClick={this.showOnlyEnvironmental}>Environmental</Button></li>
        <li><Button onClick={this.showOnlyLegal}>Legal</Button></li>
        <li><Button onClick={this.showOnlyRac}>Racial/Ethnic</Button></li>
        <li><Button onClick={this.showOnlyHealth}>Health</Button></li>
        <li><Button onClick={this.showOnlyDisab}>Disabilities</Button></li>


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
  showAll = () => {
    this.setState({ filterType: "all" });
  };
  // showOnlyValid = () => {
  //   this.setState({ filterType: "onlyvalid" });
  // };
  showOnlyWomen = () => {
    this.setState({ filterType: "women" });
  };

  showOnlyArts = () => {
    this.setState({ filterType: "arts" });
  };
  showOnlyDisab = () => {
    this.setState({ filterType: "disab" });
  };
  showOnlyChildren = () => {
    this.setState({ filterType: "children" });
  };
  showOnlyAnimals = () => {
    this.setState({ filterType: "animals" });
  };
  showOnlyLegal = () => {
    this.setState({ filterType: "legal" });
  };
  showOnlyEnvironmental = () => {
    this.setState({ filterType: "environmental" });
  };
  showOnlyRac = () => {
    this.setState({ filterType: "rac" });
  };
  showOnlyHealth = () => {
    this.setState({ filterType: "health" });
  };
}

export default Opportunities;
