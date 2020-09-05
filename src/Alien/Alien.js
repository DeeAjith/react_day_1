import React from 'react';
import './Alien.css';
const alien = (ps) => {
  return (
    <div className='Alien'>
      <p>{ps.astroidName}
        could be reached earth in {ps.approachDist}
        kms on {ps.time}.</p>
    </div>
  );
}

export default alien;