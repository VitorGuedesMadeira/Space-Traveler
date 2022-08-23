/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';
import RocketImage from '../images/rocketpng.png';

const RocketsList = () => {
  const rockets = useSelector((state) => state.rockets);

  return (
    <ul className="rockets-list">
      {rockets.map((rocket) => (
        <li key={rocket.id} className="test">
          <Rocket id={rocket.id} name={rocket.rocket_name} description={rocket.description} reserved={rocket.reserved} image={rocket.flickr_images} />
        </li>
      ))}
      <img className="background-rocket" src={RocketImage} alt="rocket" />
    </ul>
  );
};

export default RocketsList;
