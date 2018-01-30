import React from 'react';
import PropTypes from 'prop-types';
import Repo from './repo';

const RepoList = (props) => {
  const {userRepos} = props;
  return(
    <div className="mb-3 p-3 bg-white rounded box-shadow">
        <h6 className="pb-2 mb-20">User Repositories</h6>
        <div className="row">
        {userRepos.map(repo => {
            return(
                <Repo repo={repo} key={repo.id} {...props} />
            );
            }
        )}
        </div>
    </div>
  );
};

RepoList.propTypes = {
    userRepos: PropTypes.array.isRequired
};

export default RepoList;

