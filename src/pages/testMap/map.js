import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "./map.css";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as siteData from "./map.json";
import L from "leaflet";

class Maps extends Component {
  render() {
    return (
    
      <React.Fragment>
        <Navbar />
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
                key={site.properties.name}
                position={[
                  site.geometry.coordinates[0],
                  site.geometry.coordinates[1],
                ]}
              />
            );
          })}
        </LeafletMap>
      </React.Fragment>
    );
  }
}
export default Maps;
