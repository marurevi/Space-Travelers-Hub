import React from 'react';
import { PropTypes } from 'prop-types';

function Mission({
  id, name, description, reserved, onClickHandeler,
}) {
  return (
    <tr key={id}>
      <td className="name">{name}</td>
      <td className="description">{description}</td>
      <td>{reserved ? 'Active Member' : 'NOT A MEMBER'}</td>
      <td>
        <button
          type="button"
          onClick={onClickHandeler}
          id={id}
        >
          {reserved ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
}

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  onClickHandeler: PropTypes.func.isRequired,
};

export default Mission;
