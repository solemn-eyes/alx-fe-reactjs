import ProfilePage from './ProfilePage';
import React from 'react';
import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      <ProfilePage userData={userData} />
      <UserContext.Provider value={userData} />
    </>
  );
}

export default App;
