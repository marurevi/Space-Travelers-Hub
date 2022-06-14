import React from 'react';
import { useDispatch } from 'react-redux';
import { bookRockets } from '../redux/rockects/rockets';

const rocket = (props) => {
  const {
    name, img, description, id, reserved,
  } = props;
  const dispatch = useDispatch();
  const reserve = () => {
    dispatch(bookRockets(id));
  };
  return (
    <div>
      <div>
        <img src={img} alt="rocket" />
      </div>
      <h4>{name}</h4>
      <p>{description}</p>
      <button
        type="button"
        onClick={reserve}
      >
        Reserve
      </button>
    </div>
  );
};

export default rocket;
