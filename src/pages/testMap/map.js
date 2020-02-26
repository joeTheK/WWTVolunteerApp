import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "./map.css";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
//import "leaflet/dist/leaflet.css";
import * as siteData from "./map.json";

 let config = {};
 config.params = {
   center: [40.655769,-73.938503],
  zoomControl: false,
  zoom: 13,
  maxZoom: 19,
   minZoom: 11,
  scrollwheel: false,
  legends: true,
  infoControl: false,
  attributionControl: true
};
config.tileLayer = {
  uri: 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
  params: {
   minZoom: 11,
   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
   id: '',
    accessToken: ''
  }
 };

class Maps extends Component {
  render() {
    return (
      <React.Fragment>
       // <Navbar />
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
   );
  }
}
export default Maps;
