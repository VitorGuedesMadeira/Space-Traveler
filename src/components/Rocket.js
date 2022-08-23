import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleReservationRocket } from '../redux/Rockets/RocketsReducer';

const Rocket = (props) => {
  const {
    id, name, description, reserved, image,
  } = props;
  const dispatch = useDispatch();
  const toggleReservation = () => dispatch(toggleReservationRocket(
    id,
  ));

  return (
    <>
      <div className="single-rocket-div">
        <img className="single-rocket-image" src={image} alt="rocket" />
        <div className="single-rocket-texts">
          <h2>{reserved ? `${name} (reserved)` : name}</h2>
          <p>{description}</p>
          <button className="rocket-button" type="button" onClick={toggleReservation}>{reserved ? 'cancel reservation' : `reserve ${name}`}</button>
        </div>
      </div>
    </>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  reserved: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Rocket;
