/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import RocketImage from '../images/rocketpng.png';
import { getRockets } from '../redux/Rockets/RocketsReducer';

const RocketsList = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRockets());
    }
  });

  return (
    <ul className="rockets-list">
      {rockets.map((rocket) => (
        <li key={rocket.id} className="test">
          <Rocket rocket={rocket} />
        </li>
      ))}
      <img className="background-rocket" src={RocketImage} alt="rocket" />
    </ul>
  );
};

export default RocketsList;
