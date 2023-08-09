import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [
        {
          latitude: -28.4910629,
          longitude: -49.0098953,
          local: "Studio Simone Serafim",
        },
      ],
    };
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
        />
      );
    });
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={18}
        initialCenter={{ lat: -28.4910629, lng: -49.0098953 }}
      >
        {this.displayMarkers()}
      </Map>
    );
  }
}

export default GoogleApiWrapper((props) => ({
  apiKey: "AIzaSyAuImUVRR9K9m0jRADvWgGdlV9ltgUyN9E",
  language: "ptbr",
}))(MapContainer);
