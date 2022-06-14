import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Rockets from '../components/Rockets';
import { getRockets } from '../redux/rockects/rockets';

export default function rocketsPage() {
  const rockets = useSelector((state) => state.rockets);
  console.log(rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets);
  }, []);

  return (
    <section>
      {rockets && rockets.map((rocket) => (
        <Rockets
          id={rocket.id}
          name={rocket.rocket_name}
          description={rocket.description}
          img={rocket.flickr_images}
        />
      ))}
    </section>
  );
}
