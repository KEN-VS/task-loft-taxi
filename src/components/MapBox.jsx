import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl"

mapboxgl.accessToken =
  'pk.eyJ1Ijoia2VudnMiLCJhIjoiY2t4bjZnM3piMXdzOTJ4dWIwbGM2Y3hvcCJ9.9Rl0XhKZRxBFNcA8TJgf9w';

const MapBox = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(30);
  const [lat, setLat] = useState(60);
  const [zoom, setZoom] = useState(10);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className='wrapper'>
        <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
      <div className='map-container' ref={mapContainerRef} />
    </div>
  );
};

export default MapBox