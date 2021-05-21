import React from "react";
import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import NewProfile from "./NewProfile";

const ProfilePrompt = () => {
  const profileState = useSelector((state) => state.userTypeReducer);
  const id = profileState.profile_user.map((_id) => _id.id);
  return <>{id ? <EditProfile />: <NewProfile />}</>;
};

export default ProfilePrompt;
