import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  const rocketsReservation = rockets.filter((rocket) => rocket.reserved);
  const missions = useSelector((state) => state.missions);
  const missionList = missions.filter((item) => item.joined === true);
  return (
    <>
      <div className="my-profile-section">
        <div className="rockets-profile">
          <h2>Rockets</h2>
          <ul>
            {rocketsReservation.length === 0
              ? <li className="no-rocket-reservations">No Reservations</li>
              : rocketsReservation.map((rocket) => (
                <li
                  key={rocket.id}
                  className="rocket-reserved"
                >
                  {rocket.rocket_name}
                </li>
              ))}
          </ul>
        </div>
        <div className="missions-profile">
          <h2>Missions</h2>
          <div>
            {missionList.map((item) => (
              <div key={item.id} className="mission-profile">
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
