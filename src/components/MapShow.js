// import React, { useState, useEffect, Component } from 'react';
import axios from 'axios'
import Icon from '@ant-design/icons';
import React, { useState,useEffect  } from 'react';
import ReactMapGL, { NavigationControl, Marker, Popup } from 'react-map-gl';
import Item from 'antd/lib/list/Item';
import '../App.css'
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');



const MapShow = () => {


    const [isLoadding, setIsloadding] = useState(false);
    const [popupInfo, setPopupInfo] = useState(false);
    const [people, setPeople] = useState(false);

    const [viewport, setViewport] = useState({

        width: "100wh",
        height: "100vh",
        latitude: 7.878978,
        longitude: 98.398392,
        zoom: 12

    });

    const [pm25InfoOne, setPm25InfoOne] = useState({ location: { latitude: 0, longitude: 0 }, pm: 0, date: null })
    const [trackPerson, setTrackPerson] = useState({ date: null, time: null, event_code: 0, mac_addr: null, rssi: 0 })
    useEffect(() => {

        async function get() {
            let trackONE = await axios.get('http://localhost:8000/api/persons')
            console.log(trackONE.data);
            await setTrackPerson({
                date: trackONE.data.date,
                time: trackONE.data.time,
                event_code: trackONE.data.event_code,
                mac_addr: trackONE.data.mac_addr,
                rssi: trackONE.data.rssi,
                latitude: trackONE.data.latitude,
                longitude: trackONE.data.longitud
            })

            let pm25One = await axios.get('http://localhost:8000/api/pm25_data')
            await setPm25InfoOne({
                location: {
                    name: null, latitude: 0, longitude: 0
                },
                pm: 0, time: 5, date: null
            })
            setIsloadding(true)
        }
        get()
    }, []
    );

    var home = [{
        team: "04",
        latitude: 7.878978,
        longitude: 98.398392
    }, {
        team: "07",
        latitude: 7.878978,
        longitude: 98.398392
    }, {
        team: "22",
        latitude: 7.878978,
        longitude: 98.398392
    }, {
        team: "25",
        latitude: 7.878978,
        longitude: 98.398392
    }]
    var personlist =
    {
        latitude: 7.878978,
        longitude: 98.398392
    }

    function getHOME(home) {
        home.map(_ => {
            return (
                <>
                    <Marker key="ASDASd" longitude={_.longitude} latitude={_.latitude} >
                        <i className='fas fa-map-marker-alt' style={{ fontSize: '35px', color: 'green' }}  ></i>
                    </Marker>
                </>
            )
        })

    }
    function getPMLocation(popupPM) {
        return (
            <>
                <Marker key="ASDASd" longitude={+popupPM.location.longitude} latitude={+popupPM.location.latitude} >
                    {popupPM.pm >= 0 && 25 >= popupPM.pm && (
                        <i className='fas fa-map-marker-alt' style={{ fontSize: '35px', color: 'blue' }} onMouseEnter={() => { setPopupInfo(true) }} onMouseLeave={() => { setPopupInfo(false) }} ></i>
                    )}
                    {popupPM.pm >= 26 && 50 >= popupPM.pm && (
                        <i className='fas fa-map-marker-alt' style={{ fontSize: '25px', color: 'green' }} onMouseEnter={() => { setPopupInfo(true) }} onMouseLeave={() => { setPopupInfo(false) }} ></i>
                    )}
                    {popupPM.pm >= 51 && 100 >= popupPM.pm && (
                        <i className='fas fa-map-marker-alt' style={{ fontSize: '25px', color: 'yellow' }} onMouseEnter={() => { setPopupInfo(true) }} onMouseLeave={() => { setPopupInfo(false) }} ></i>
                    )}
                    {popupPM.pm >= 101 && 200 >= popupPM.pm && (
                        <i className='fas fa-map-marker-alt' style={{ fontSize: '25px', color: 'orange' }} onMouseEnter={() => { setPopupInfo(true) }} onMouseLeave={() => { setPopupInfo(false) }} ></i>
                    )}
                    {popupPM.pm >= 201 && (
                        <i className='fas fa-map-marker-alt' style={{ fontSize: '25px', color: 'red' }} onMouseEnter={() => { setPopupInfo(true) }} onMouseLeave={() => { setPopupInfo(false) }} ></i>
                    )}
                </Marker>
                {popupInfo && (
                    <Popup tipSize={5}
                        anchor="bottom"
                        longitude={+popupPM.location.longitude}
                        latitude={+popupPM.location.latitude}
                        onMouseLeave={() => setPopupInfo(false)}
                        closeOnClick={false}>
                        <p><strong>{popupPM.location.name}</strong><hr />Date : {popupPM.date.split('-')[2]}-{popupPM.date.split('-')[1]}-{popupPM.date.split('-')[0]} <br /> Time : {popupPM.time} <br />PM2.5: {popupPM.pm} µg/m3 <br /></p>
                    </Popup>
                )}

            </>
        )
    }

    function getStatusPerson(person, trackPerson) {
        return (
            <>
                <Marker key="asd" longitude={person.longitude} latitude={person.latitude} >
                    {trackPerson.event_code === 255 && (
                        <i className='fas fa-street-view' style={{ fontSize: '25px', color: 'red' }} onMouseEnter={() => { setPeople(true) }} onMouseLeave={() => { setPeople(false) }}></i>
                    )}
                    {trackPerson.event_code === 128 && (
                        <i className='fas fa-street-view' style={{ fontSize: '25px', color: 'orange' }} onMouseEnter={() => { setPeople(true) }} onMouseLeave={() => { setPeople(false) }}></i>
                    )}
                    {trackPerson.event_code === 8 && (
                        <i className='fas fa-street-view' style={{ fontSize: '25px', color: 'yellow' }} onMouseEnter={() => { setPeople(true) }} onMouseLeave={() => { setPeople(false) }}></i>
                    )}
                    {trackPerson.event_code === 0 && (
                        <i className='fas fa-street-view' style={{ fontSize: '25px', color: "green" }} onMouseEnter={() => { setPeople(true) }} onMouseLeave={() => { setPeople(false) }}></i>
                    )}
                </Marker>

                {people && (
                    <Popup tipSize={20}
                        anchor="bottom"
                        longitude={personlist.longitude}
                        latitude={personlist.latitude}
                        onMouseLeave={() => setPeople(false)}
                        closeOnClick={false}>
                        <p><strong>{trackPerson.mac_addr}</strong><hr />Date : {trackPerson.date.split('-')[2]}-{trackPerson.date.split('-')[1]}-{trackPerson.date.split('-')[0]} <br /> Time : {trackPerson.time}
                            <br />
                            <hr />
                            {trackPerson.event_code == 255 && (<h3 className="App">สถานะ : สะดุดล้ม</h3>)}
                            {trackPerson.event_code == 128 && (<h3 className="App">สถานะ : เป็นลม</h3>)}
                            {trackPerson.event_code == 8 && (<h3 className="App">สถานะ : สลบ</h3>)}
                            {trackPerson.event_code == 0 && (<h3 className="App">สถานะ : ปกติ</h3>)}
                            <hr />
                        </p>
                    </Popup>
                )}

            </>
        )
    }
    if (isLoadding && pm25InfoOne.length != 0) {




        return (

            <ReactMapGL
                {...viewport}
                onViewportChange={setViewport}
                mapStyle="mapbox://styles/mapbox/outdoors-v11"
                mapboxApiAccessToken="pk.eyJ1IjoiaGFtYTg5NyIsImEiOiJjazR6ZG5yY20wOWgzM21tcWVlbnFtOXB4In0.KjTfvistF0bqFqTk0OVsTA">
                {getPMLocation(pm25InfoOne)}
                {getStatusPerson(personlist, trackPerson)}
            </ReactMapGL>
        );
    }
    else {
        return (
            <div className="main">
                <div className="parent">
                    <Icon type="loading" style={{ fontSize: '150px', color: '#08c' }} />
                </div>
            </div>)
    }
}

export default MapShow;