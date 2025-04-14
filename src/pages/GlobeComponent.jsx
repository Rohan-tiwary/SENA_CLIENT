import React, { useEffect, useRef } from "react";
import Globe from "globe.gl";

const GlobeComponent = () => {
  const globeRef = useRef(null);

  useEffect(() => {
    if (globeRef.current) {
      Globe()(globeRef.current) // No need to assign to a variable
        .globeImageUrl("//unpkg.com/three-globe/example/img/earth-dark.jpg")
        .backgroundColor("rgba(0, 0, 0, 0)");
    }
  }, []);

  return <div ref={globeRef} className="absolute inset-0 z-0" />;
};

export default GlobeComponent;
