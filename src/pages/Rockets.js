import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Rockets from '../components/Rockets';
import { getRockets } from '../redux/rockects/rockets';

export default function rocketsPage() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    dispatch(getRockets);
  }, []);

  return (
    <div>
      <h2>rockets</h2>
      {rockets && rockets.map(
        (rocket) => (
          <Rockets
            key={rocket.id}
            name={rocket.name}
            description={rocket.description}
            img={rocket.img}
          />
        ),
      )}
    </div>
  );
}
