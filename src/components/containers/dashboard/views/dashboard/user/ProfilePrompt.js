import React from "react";
import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import NewProfile from "./NewProfile";

const ProfilePrompt = () => {
  const profileState = useSelector(state => state.userTypeReducer);
  const id = profileState.profile_user.map(_id=>_id.id);
  console.log(id);
  
  return (
    <>
      {profileState && profileState.length ? (
        <EditProfile id={id} />
      ) : (
        <NewProfile />
      )}
    </>
  );
};

export default ProfilePrompt;
