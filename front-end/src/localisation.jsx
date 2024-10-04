import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

function Localisation(props){
    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{
          lat: 48.8588443, // Latitude de Paris, France
          lng: 2.2943506,  // Longitude de Paris, France
        }}
      >
        <Marker
          position={{
            lat: 48.8588443,
            lng: 2.2943506,
          }}
        />
      </Map>
    );
  }

export default GoogleApiWrapper({
  apiKey: "VOTRE_CLE_API_ICI" // Remplacez par votre clé API
})(Localisation);
