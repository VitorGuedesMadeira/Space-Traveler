import React from 'react';
import RocketImage from '../images/rockettest.jpg';

const Rocket = () => (
  <div className="single-rocket-div">
    <img className="single-rocket-image" src={RocketImage} alt="rocket" />
    <div className="single-rocket-texts">
      <h2>title</h2>
      <p>text text text text text text text text text text text </p>
      <button type="button">Reserve Rocket</button>
    </div>
  </div>
);

export default Rocket;
