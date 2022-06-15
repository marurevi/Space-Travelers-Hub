import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { bookRockets } from '../redux/rockects/rockets';

export default function Rocket(props) {
  const {
    name, img, description, id, reserved,
  } = props;
  const dispatch = useDispatch();
  const reserve = () => {
    dispatch(bookRockets(id));
  };
  const reservedRocket = reserved ? 'You have made a revervation!' : 'Reserve';
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
        {reservedRocket}
      </button>
      <span>{reserved === true ? 'Reserved' : '' }</span>
    </div>
  );
}

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
