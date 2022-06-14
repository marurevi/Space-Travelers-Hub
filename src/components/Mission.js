import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMissions, joinMission } from '../redux/missions/missions';
import '../css/Mission.css';

export default function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.reduMission);
  const [state, setState] = useState();

  useEffect(() => {
    dispatch(getAllMissions);
  }, []);

  const onClickHandeler = (e) => {
    e.preventDefault();
    const newState = state.map((mission) => {
      if (mission.id !== e.target.id) return mission;
      return { ...mission, reserved: true };
    });
    const dispatch = useDispatch();
    dispatch(joinMission(e.target.id));
    console.log('clicked', e.target.id);
    setState(newState);
  };

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
            <td><button type="button" onClick={onClickHandeler} id={mission.mission_id}>JOIN MISSION</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
