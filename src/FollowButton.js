import React, { useEffect, useState } from 'react';
import './App.css';

// TODO: Get/Set Follow status via API
function FollowButton({ employeeID }) {

  const localStorageKey = `following${employeeID}`;

  const [following, setFollowing] = useState(localStorage.getItem(localStorageKey) === 'true');

  useEffect(() => {
    localStorage.setItem(localStorageKey, following);
  }, [following]);

  const onClick = () => {
    setFollowing(!following);
  };

  return following ? <button onClick={onClick} className="following">Following</button>
                   : <button onClick={onClick} className="notfollowing">Follow</button>;

};

export default FollowButton;
