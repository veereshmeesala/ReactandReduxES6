import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
  const {userData} = props;
  return(
    <div className="mb-3 p-3 bg-white rounded box-shadow">
        <h6 className="border-bottom border-gray pb-2 mb-20">{userData.name} Profile</h6>
        <div className="media">
            <img className="mr-3" src={props.userData.avatar_url} width="125" height="125" />
            <div className="media-body"> 
                <div className="row">
                    <div className="col">
                        <span className="badge badge-primary p-2">Followers {props.userData.followers}</span>
                        <span className="badge badge-success p-2 ml-2">Following {props.userData.following}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>{props.userData.public_gists} public repos</p>
                        <p>{props.userData.public_repos} public gists</p>
                        <p>{props.userData.location} location</p>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
  );
};

Profile.propTypes = {
    userData: PropTypes.Object
};

export default Profile;