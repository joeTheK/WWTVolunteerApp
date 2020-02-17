import React, { Component } from "react";
import "./opportunities.css";
import Navbar from "../components/Navbar";
import { Card } from "semantic-ui-react";
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
      op: match.params["op"]
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
    if (this.state.op === "tstyle") {
      console.log(data);
      return (
        <div className="OpportunitiesBody">
          <Navbar />
          <h1>What i want to see!!</h1>
          {data.map(doc => {
            // return (
            //   <>
            //     <div className="altLayout">
            //       <h2>{doc.OrgName}</h2>
            //       <div>
            //         <b>Address</b> <i>{doc.Address}</i>
            //       </div>
            //     </div>
            //   </>
            // );
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
}

export default Opportunities;
