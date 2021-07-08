import React from "react";
import EditProfile from "./EditProfile";
import {useSelector} from "react-redux";
import NewProfile from "./NewProfile";

const ProfilePrompt = () => {
  const profileState = useSelector((state) => state.userTypeReducer.profile_user);
  const profileId = profileState.length && profileState.map(_id=>_id.id);
  return (
    <>
      {profileState.length ? (
        <EditProfile profileId={profileId} />
      ) : (
        <NewProfile />
      )}
    </>
  );
};

export default ProfilePrompt;
