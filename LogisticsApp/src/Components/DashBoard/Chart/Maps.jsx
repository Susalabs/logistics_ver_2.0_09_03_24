import React, { useEffect, useRef } from "react";

function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    function initMap() {
      if (!window.google) {
        console.error("Google Maps JavaScript API is not loaded.");
        return;
      }

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 40.7128, lng: -74.006 },
        zoom: 10,
      });

      new window.google.maps.Marker({
        position: { lat: 40.7128, lng: -74.006 },
        map,
        title: "New York City",
      });
    }

    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      script.defer = true;
      script.async = true;
      script.onerror = () => {
        console.error("Failed to load Google Maps API script.");
      };
      window.initMap = initMap; // Make initMap globally accessible
      document.body.appendChild(script);
    } else {
      initMap();
    }

    return () => {
      delete window.initMap; // Cleanup the global initMap function
    };
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
}

export default Map;
