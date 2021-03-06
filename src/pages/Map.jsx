import React, { useRef, useEffect, useState } from "react";
import Order from "../components/Order";
import mapboxgl from "mapbox-gl"
import Header from "../components/Header";

mapboxgl.accessToken =
  'pk.eyJ1Ijoia2VudnMiLCJhIjoiY2t4bjZnM3piMXdzOTJ4dWIwbGM2Y3hvcCJ9.9Rl0XhKZRxBFNcA8TJgf9w';



function Map() {

  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(37.59);
  const [lat, setLat] = useState(55.73);
  const [zoom, setZoom] = useState(13);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/kenvs/ckxnfl3j84r8v14mmkfgzy5jo',
      center: [lng, lat],
      zoom: zoom

    });

    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    return () => map.remove();
  }, []);

  return (
    <>
      <Header />
      <div className="main-content container" >
        <section className="map__section">
          <div className='sidebarStyle'>
            <div>
              Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
          </div>
          <div className='map-container' ref={mapContainerRef} />
          <Order />
        </section>
      </div>
    </>
  )

}

export default Map