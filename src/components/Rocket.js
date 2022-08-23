/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { rocketsReducer } from '../redux/Rockets/RocketsReducer';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const { rocket } = props;
  // const toggleReservation = () => dispatch(rocketsReducer({ rocket }));

  return (
    <>
      <div className="single-rocket-div">
        <img className="single-rocket-image" src={rocket.flickr_images} alt="rocket" />
        <div className="single-rocket-texts">
          <h2>{rocket.reserved ? `${rocket.rocket_name} (reserved)` : rocket.rocket_name}</h2>
          <p>{rocket.description}</p>
          <button className={rocket.reserved ? 'activeButton' : 'notActiveButton'} type="button" onClick={() => dispatch(rocketsReducer({ rocket }))}>{rocket.reserved ? 'Cancel Reservation' : `reserve ${rocket.rocket_name}` }</button>
        </div>
      </div>
    </>
  );
};

export default Rocket;
