import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMission, joinMission, leaveMission } from '../redux/Missions/MissionsReducer';
import './mission.css';

const MissionsList = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  const handleJoin = (id) => {
    dispatch(joinMission(id));
  };
  const handleLeave = (id) => {
    dispatch(leaveMission(id));
  };

  if (missions.length === 0) {
    dispatch(fetchMission());
  }
  return (
    <div>
      <table className="missions-container">
        <thead>
          <tr className="table-head">
            <td><h1 className="titles">Missions</h1></td>
            <td><h1 className="descriptions">Description</h1></td>
            <td><h1 className="status">Status</h1></td>
            <td />
          </tr>
        </thead>
        <tbody className="table-container">
          {
          missions.map((mission) => (
            <tr className="table-body" key={mission.id}>
              <td className="mission-title"><h1>{mission.name}</h1></td>
              <td className="mission-description"><p>{mission.description}</p></td>
              <td className="mission-status">
                <div>
                  { mission.joined ? (
                    <button className="member" type="button" onClick={() => handleLeave(mission.id)} disabled>Active Member</button>
                  ) : (
                    <button className="notMember" type="button" onClick={() => handleJoin(mission.id)} disabled>NOT A MEMBER</button>
                  ) }
                </div>
                <div>
                  { mission.joined ? (
                    <button className="leave-btn" type="button" onClick={() => handleLeave(mission.id)}>Leave Mission</button>
                  ) : (
                    <button className="join-btn" type="button" onClick={() => handleJoin(mission.id)}>Join Mission</button>
                  ) }
                </div>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
};

export default MissionsList;
