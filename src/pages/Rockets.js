import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Rocket from '../components/Rockets';
import { getRockets } from '../redux/rockects/rockets';
import '../css/Rockets.css';

export default function rocketsPage() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    dispatch(getRockets);
  }, []);

  return (
    <div className="rockets_container">
      <h2>Rockets</h2>
      {rockets && rockets.map(
        (rocket) => (
          <Rocket
            key={rocket.id}
            id={rocket.id}
            name={rocket.name}
            description={rocket.description}
            img={rocket.img}
            reserved={rocket.reserved}
          />
        ),
      )}
    </div>
  );
}
