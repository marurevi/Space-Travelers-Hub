import React from 'react';
import { useSelector } from 'react-redux';
import '../css/myProfile.css';

export default function MyProfile() {
  const missions = useSelector((state) => state.reduMission) || [];
  const rockets = useSelector((state) => state.rockets);
  const reservedMissions = missions.filter((mission) => mission.reserved);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <div className="container">
      <div className="mission-container">
        <h2>My Missions</h2>
        <ul className="mission-list">
          {reservedMissions.map((element) => <li key={element.id}>{element.name}</li>)}
        </ul>
      </div>
      <div className="rocket-container">
        <h2>My Rockets</h2>
        <ul className="rocket-list">
          {reservedRockets.map((element) => <li key={element.id}>{element.name}</li>)}
        </ul>
      </div>
    </div>
  );
}
