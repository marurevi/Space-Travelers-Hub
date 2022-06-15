import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMissions, joinMission } from '../redux/missions/missions';
import '../css/Missions.css';

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
          <tr key={mission.id}>
            <td className="name">{mission.name}</td>
            <td className="description">{mission.description}</td>
            <td>{mission.reserved ? 'Active Member' : 'NOT A MEMBER'}</td>
            <td>
              <button
                type="button"
                onClick={() => dispatch(joinMission(mission.id))}
                id={mission.id}
              >
                {mission.reserved ? 'Leave Mission' : 'Join Mission'}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
