import React from 'react';
import { useSelector } from 'react-redux/es/exports';

export default function MyProfile() {
  const missions = useSelector((state) => state.reduMission) || [];

  const reservedMissions = missions.filter((mission) => mission.reserved);

  return (
    <ul>
      {
        reservedMissions
          ? reservedMissions.forEach((reserved) => <li key={reserved.id}>{reserved.name}</li>)
          : 'There aren&apos;t missions to display'
      }
    </ul>
  );
}
