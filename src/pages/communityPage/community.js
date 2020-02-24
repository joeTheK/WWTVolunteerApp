import React, { Component } from "react";
import "./community.css";
import Navbar from "../components/Navbar";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import schenk from "./schenk.png";
import trophy from "./trophy.png";
import Tabletop from "tabletop";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import * as siteData from "./map.json";
import './map.css'

class Community extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    Tabletop.init({
      key: "14Ik5uHzguQFeYxEyFgcer6TQHsxLV7MiunLkhKplYRM",

      callback: googleData => {
        console.log("MAP DATA --->", googleData);
      },
      simpleSheet: true
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="CommunityBody">
          <Navbar />
          <div className="mainContent">
            <div className="feed">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="Owl_Hours"
                data-chrome="nofooter noheader"
                options={{ height: 640 }}
              />
            </div>
            <div className="maps">
              <LeafletMap
          center={[38.65, -90.25]}
          zoom={11}
          attributionControl={true}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={false}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
        >
          <TileLayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
          {siteData.features.map(site => {
            console.log(site.geometry.coordinates);
            return (
              <Marker
                key={site.properties.popupContent}
                position={[
                  site.geometry.coordinates[0],
                  site.geometry.coordinates[1],
                ]}
              />
            );
          })}
        </LeafletMap></div>

            <div className="incent">
              <p>
                <img src={schenk} alt="Schenk:" className="schenk" />
                <img src={trophy} alt="" className="trophy" /> Hawk House has
                collected the most hours this semester and has won a free dress
                down!
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Community;
