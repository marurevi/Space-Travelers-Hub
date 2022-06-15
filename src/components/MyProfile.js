import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import '../css/myProfile.css';

export default function MyProfile() {
  const missions = useSelector((state) => state.reduMission) || [];
  const reservedMissions = missions.filter((mission) => mission.reserved);
  return (
    <div className="container">
      <div className="mission-container">
        <h2>My Missions</h2>
        <ul>
          {reservedMissions.map((element) => <li key={element.id}>{element.name}</li>)}
        </ul>
      </div>
    </div>
  );
}
