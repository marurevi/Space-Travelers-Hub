import React from 'react';
import { useSelector } from 'react-redux/es/exports';

export default function MyProfile() {
  const missions = useSelector((state) => state.reduMission) || [];

  const reservedMissions = missions.filter((mission) => mission.reserved);
  console.log(reservedMissions);
  return (
    <div className="container">
      <div className="mission-container">
        <ul>
          {reservedMissions.map((element) => <li key={element.id}>{element.name}</li>)}
        </ul>
      </div>
    </div>
    

  );
}
