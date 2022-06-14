import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMissions } from '../redux/missions/missions';
import '../css/Mission.css';

export default function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.reduMission);
  useEffect(() => {
    dispatch(getAllMissions);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <td>NAME MISSION</td>
          <td>DESCRIPTION</td>
          <td colSpan={2}>Status</td>
        </tr>
      </thead>
      <tbody>
        {missions && missions.map((mission) => (
          <tr key={mission.mission_id}>
            <td className="name">{mission.mission_name}</td>
            <td className="description">{mission.description}</td>
            <td>STATUS</td>
            <td><button type="button">JOIN/LEAVE MISSION</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
