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
                options={{ height: 645, width: 300 }}
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
                         
      
        
      <React.Fragment>
         
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
           <Marker position={[38.65, -90.25]}>
              <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg"
                }
                 width="15"
                ></img>
              </Marker>
               {siteData.features.map(site => {
             console.log(site.geometry.coordinates);
              return (
            <Marker
                 key={site.properties.amenity}
                  position={[
                  site.geometry.coordinates[1],
                  site.geometry.coordinates[0]
                   ]}
                                            >
                                                <Popup>
                                                    <h8>{site.properties.name}</h8>
                                                    <p>{site.properties.amenity}</p>
                                                </Popup>
                                            </Marker>
                                        );
                                    })}
                                    class Maps extends Component {
  
      <React.Fragment>
      
        //<LeafletMap
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
         <Marker position={[38.65, -90.25]}>
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg"
              }
              width="15"
            ></img>
</Marker>
          {siteData.features.map(site => {
            console.log(site.geometry.coordinates);
           return (
              <Marker
                key={site.properties.amenity}
                position={[
                 site.geometry.coordinates[1],
                  site.geometry.coordinates[0]
                ]}
              >
                <Popup>
                  <h8>{site.properties.name}</h8>
                 <p>{site.properties.amenity}</p>
</Popup>
              </Marker>
            );
         })}
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
        </LeafletMap>
      </React.Fragment>
   //);
  }
}
export default Maps;
                                   <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
                                </LeafletMap>
                            </React.Fragment>
    //);
                          }
                       
                     export default Maps;
      
            );
          })}
        </LeafletMap></div>

            <div className="incent">
              <h6 id="staff">Staff Announcements</h6>
              <p>
                <img src={schenk} alt="Schenk:" className="schenk" />
                <img src={trophy} alt="" className="trophy" /> Schenk: Hawk House has
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
