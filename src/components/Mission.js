import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMissions } from '../redux/missions/missions';

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
          <td>ID MISSION</td>
          <td>NAME MISSION</td>
          <td>DESCRIPTION</td>
        </tr>
      </thead>
      <tbody>
        {missions && missions.map((mission) => (
          <tr key={mission.mission_id}>
            <td>{mission.mission_id}</td>
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
