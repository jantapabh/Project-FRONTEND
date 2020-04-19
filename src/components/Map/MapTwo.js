import React, { Component } from 'react'
import L from 'leaflet'
import './Map.css'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

//Import Popup images

import peopleOne from './assets/peopleOne.png'
import peopleTwo from './assets/peopleTwo.png'
import peopleThree from './assets/peopleThree.png'
import peopleFour from './assets/peopleFour.png'

//เรียกไอคอน
var myIcon = L.icon({

    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/512px-Map_marker.svg.png',
    iconSize: [30, 51],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41]

});

class MapTwo extends Component {


    state = {

      
       peopleIconOne: {

            lat: 7.9034581,
            lng: 98.257461,

            // ป่าตอง

        },
        peopleIconTwo: {

            lat: 7.8948795,
            lng: 98.350931,

            // ป่าตอง

        },
        peopleIconThree: {

            lat: 7.8489556,
            lng: 98.3075393,


            // ป่าตอง

        },
        peopleIconFour: {

            lat: 7.8809728,
            lng: 98.3598775,

            // ป่าตอง

        },
        zoom: 13,
      }





    peopleIconOne = L.icon({

        iconUrl: peopleOne,
        iconSize: [60,95],
        shadowSize: [50,64],
        iconAnchor: [22,94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]

    });

    peopleIconTwo = L.icon({

        iconUrl: peopleTwo,
        iconSize: [60,95],
        shadowSize: [50,64],
        iconAnchor: [22,94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]

    });

    peopleIconThree = L.icon({

        iconUrl: peopleThree,
        iconSize: [60,95],
        shadowSize: [50,64],
        iconAnchor: [22,94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]

    });

    peopleIconFour = L.icon({

        iconUrl: peopleFour,
        iconSize: [60,95],
        shadowSize: [50,64],
        iconAnchor: [22,94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]

    });

 

    render() {

        //Icon People

   const positionPeopleOne = [this.state.peopleIconOne.lat, this.state.peopleIconOne.lng]
   const positionPeopleTwo = [this.state.peopleIconTwo.lat, this.state.peopleIconTwo.lng]
   const positionPeopleThree = [this.state.peopleIconThree.lat, this.state.peopleIconThree.lng]
   const positionPeopleFour = [this.state.peopleIconFour.lat, this.state.peopleIconFour.lng]


        return (
            <div>
            <Map className="map" center={positionPeopleOne} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={positionPeopleOne} icon={this.peopleIconOne}>
                    <Popup>
                       คนที่ 1 <br /> 
              </Popup>
                </Marker>
                <Marker position={positionPeopleTwo} icon={this.peopleIconTwo}>
                    <Popup>
                    คนที่ 2 <br /> 
              </Popup>
                </Marker>
                <Marker position={positionPeopleThree} icon={this.peopleIconThree}>
                    <Popup>
                    คนที่ 3 <br /> 
              </Popup>
                </Marker>
                <Marker position={positionPeopleFour} icon={this.peopleIconFour}>
                    <Popup>
                    คนที่ 4 <br /> 
              </Popup>
                </Marker>
            </Map>
            </div>
        )
    }
}

export default MapTwo