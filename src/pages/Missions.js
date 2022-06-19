import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMissions, joinMission, leaveMission } from '../redux/missions/missions';
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
          <td>Mission</td>
          <td>Description</td>
          <td colSpan={2}>Status</td>
        </tr>
      </thead>
      <tbody>
        {missions && missions.map((mission) => (
          <tr key={mission.id}>
            <td className="name">{mission.name}</td>
            <td className="description">{mission.description}</td>
            <td>{mission.reserved ? <div className="activemember">Active Member</div> : <div className="notmember">NOT A MEMBER</div>}</td>
            <td>
              {
              !mission.reserved
                ? <button type="button" className="joinBtn" onClick={() => dispatch(joinMission(mission.id))} id={mission.id}>{mission.reserved ? 'Leave Mission' : 'Join Mission'}</button>
                : <button type="button" className="leaveBtn" onClick={() => dispatch(leaveMission(mission.id))} id={mission.id}>{mission.reserved ? 'Leave Mission' : 'Join Mission'}</button>
            }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
