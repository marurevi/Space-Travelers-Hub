import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMissions, joinMission } from '../redux/missions/missions';
import '../css/Missions.css';
import Mission from '../components/Mission';

export default function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.reduMission);

  useEffect(() => {
    dispatch(getAllMissions);
  }, []);

  const onClickHandeler = (id) => {
    dispatch(joinMission(id));
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
          <Mission
            key={mission.id}
            name={mission.name}
            description={mission.description}
            reserved={mission.reserved}
            onClick={onClickHandeler}
          />
        ))}
      </tbody>
    </table>
  );
}
