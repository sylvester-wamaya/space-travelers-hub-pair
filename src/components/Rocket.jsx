import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { reserve, cancelReserve } from '../redux/rockets/rocketSlice';

function Rocket({
  id, name, img, description, reserved,
}) {
  const dispatch = useDispatch();
  console.log(id);
  return (
    <>
      <div className="col-4 pb-3">
        <img style={{ width: '100%' }} src={img} alt="" />
      </div>
      <div className="col-8">
        <h3>{name}</h3>
        <h6 className="pb-3">
          {reserved ? (
            <span className="badge bg-success text-white me-1">Reserved</span>
          ) : (
            ''
          )}
          {description}
        </h6>

        {reserved ? (
          <button
            onClick={() => dispatch(cancelReserve(id))}
            type="button"
            className="btn btn-light"
          >
            Cancel Reservation
          </button>
        ) : (
          <button
            onClick={() => dispatch(reserve(id))}
            type="button"
            className="btn btn-primary"
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </>
  );
}

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
