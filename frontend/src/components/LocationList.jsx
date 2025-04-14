import React, { useEffect, useState } from 'react';
import { fetchLocations } from '../services/api';


const LocationList = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const loadLocations = async () => {
      const data = await fetchLocations();
      setLocations(data);
    };
    loadLocations();
  }, []);

  return (
    <div className="location-list">
      <h2>Locations</h2>
      <ul>
        {locations.map((location) => (
          <li key={location.id}>
            <p>{location.name}</p>
            <p>{location.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationList;
