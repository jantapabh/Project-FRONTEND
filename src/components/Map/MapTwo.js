import React, { Component } from 'react'
import L from 'leaflet'
import './Map.css'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import leafGreen from '../static/images/leaf-green.png'


//เรียกไอคอน
var myIcon = L.icon({

    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/512px-Map_marker.svg.png',
    iconSize: [30, 51],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41]

});

class MapTwo extends Component {


    state = {
        lat: 7.8948795,
        lng: 98.350931,
        zoom: 13,
      }

    render() {


   const position = [this.state.lat, this.state.lng]
  
        return (
            <div>
            <Map className="map" center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={myIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
                </Marker>
            </Map>
            </div>
        )
    }
}

export default MapTwo