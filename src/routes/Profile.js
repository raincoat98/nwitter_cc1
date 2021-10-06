import { authService } from "fBase";
import React from "react";
import { useHistory } from "react-router";
const Profile = () => {
  const history = useHistory();

  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <React.Fragment>
      <button onClick={onLogOutClick}>Log Out</button>
    </React.Fragment>
  );
};

export default Profile;
