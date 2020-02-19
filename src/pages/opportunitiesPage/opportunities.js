import React, { Component } from "react";
import "./opportunities.css";
import Navbar from "../components/Navbar";
import { Card, Button } from "semantic-ui-react";
import { validate } from "../../utils/volunteer_validator";
//
import Tabletop from "tabletop";
//Dynamically pulls from google sheets: requires npm install tabletop
class Opportunities extends Component {
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
    var tableStyle = {
      border: "1px solid black",
      borderright: "1px solid red",
      paddingTop: "0px",
      paddingBottom: "0px",
      paddingLeft: "0px",
      paddingRight: "10px",
      fontSize: "small",
      padding: "0",
      margin: "0"
    };
    const { data } = this.state;
    //table stuff^^
    if (this.state.op === "alt") {
      console.log(data);
      var dataToShow;
      if (this.state.filterType === "all") {
        dataToShow = data;
      }
      if (this.state.filterType === "onlyvalid") {
        dataToShow = this.filterList(data);
      }
      if (this.state.filterType === "women") {
        dataToShow = this.filterListForWomen(this.filterList(data));
      }
      if (this.state.filterType === "arts") {
        dataToShow = this.filterListForArts(data);
      }
      if (this.state.filterType === "animals") {
        dataToShow = this.filterListForAnimals(this.filterList(data));
      }
      return (
        <div className="OpportunitiesBody">
          <Navbar />
          <Button onClick={this.showAll}>ALL</Button>{" "}
          <Button onClick={this.showOnlyValid}>Only Valid</Button>
          <Button onClick={this.showOnlyWomen}>Women</Button>
          <Button onClick={this.showOnlyAnimals}>Animal</Button>
          <Button onClick={this.showOnlyArts}>Arts</Button>
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
      );
    }

    return (
      <div className="OpportunitiesBody">
        <Navbar />
        {console.log("i hit this")}
        {data.map(obj => {
          // Table below pulls from google sheet
          return (
            // obj.orgName pulls info from column header OrgName,
            //repeats for length of spreadsheet
            <div key={obj.OrgName}>
              <table style={tableStyle}>
                <td>{obj.OrgName}</td>
                <td>{obj.Categories}</td>
                <td>{obj.DescriptionMission}</td>
                <td>{obj.VolunteerForm}</td>
                <td>{obj.DonationLink}</td>
                <td>{obj.Email}</td>
                <td>{obj.Phone}</td>
                <td>{obj.Address}</td>
              </table>
            </div>
          );
        })}
      </div>
    );
  }

  filterList(docs) {
    var temp = [];
    docs.forEach(doc => {
      if (validate(doc)) {
        temp.push(doc);
      }
    });
    return temp;
  }

  filterListForWomen(docs) {
    var temp = [];
    docs.forEach(doc => {
      if (doc["Categories"].match("Women")) {
        temp.push(doc);
      }
    });
    return temp;
  }
  filterListForAnimals(docs) {
    var temp = [];
    docs.forEach(doc => {
      if (doc["Categories"].match("Animals")) {
        temp.push(doc);
      }
    });
    return temp;
  }
  filterListForArts(docs) {
    var temp = [];
    docs.forEach(doc => {
      if (doc["Categories"].match("Arts")) {
        temp.push(doc);
      }
    });
    return temp;
  }
  showAll = () => {
    this.setState({ filterType: "all" });
  };
  showOnlyValid = () => {
    this.setState({ filterType: "onlyvalid" });
  };
  showOnlyWomen = () => {
    this.setState({ filterType: "women" });
  };

  showOnlyArts = () => {
    this.setState({ filterType: "arts" });
  };

  showOnlyAnimals = () => {
    this.setState({ filterType: "animals" });
  };
}

export default Opportunities;
