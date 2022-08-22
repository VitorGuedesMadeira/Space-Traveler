import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';

const RocketsList = () => {
  const rockets = useSelector((state) => state.rockets);

  <div className="rockets-list">
    <ul>
      {rockets.map((rocket) => (
        <Rocket
        key={rocket.id}
        name={rocket.name}
        description={rocket.description}
        img={rocket.img}
        reserved={rocket.reserved}
        id={rocket.id}
      />
      ))}
    </ul>
  </div>
};

export default RocketsList;
