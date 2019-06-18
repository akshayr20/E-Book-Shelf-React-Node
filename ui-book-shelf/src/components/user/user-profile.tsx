import React from 'react';

export interface UserProfileProps {}

export interface UserProfileState {}

class UserProfile extends React.Component<UserProfileProps, UserProfileState> {
	state = { UserProfile: [] };
	render() {
		return <div>UserProfile: Work Under Progress</div>;
	}
}

export default UserProfile;
