import React, { Component } from "react";
import "./opportunities.css";
import Navbar from "../components/Navbar";
//
import Tabletop from 'tabletop';
//Dynamically pulls from google sheets: requires npm install tabletop
class Opportunities extends Component {
  //Data Table Stuff:
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    Tabletop.init({
      key: '1KePg5zYNccqfqvO5skrvSYPPEyzWpqrFq-2MlfxTQJ4',
      //Key of the Google Sheets page
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }
  //^^ Data Table Stuff

  render() {
    //Mess with Table CSS here:
    var tableStyle = {
      "border": "1px solid black",
      borderright: '1px solid red',
      paddingTop : '0px',
      paddingBottom : '0px',
      paddingLeft:'0px',
      paddingRight:'10px',
      fontSize: 'small',
      padding: '0',
      margin: '0'
   };
   const { data } = this.state
//table stuff^^
    return (
      <div className="OpportunitiesBody">
        <Navbar />
        { 
            data.map(obj => {
              // Table below pulls from google sheet
              return (  
                // obj.orgName pulls info from column header OrgName, 
                //repeats for length of spreadsheet
                <div key={obj.OrgName}>      
                  <table style={tableStyle}> 
                  <td>{obj.OrgName}</td>
                  <td>{obj.Categories}</td>
                  <td>{obj.DescriptionMission }</td>
                  <td>{obj.VolunteerForm}</td>
                  <td>{obj.DonationLink}</td>
                  <td>{obj.Email}</td>
                  <td>{obj.Phone}</td>
                  <td>{obj.Address}</td>
                  </table>
                </div>
              )
            })
          }
      </div>
    );
  }
}

export default Opportunities;
