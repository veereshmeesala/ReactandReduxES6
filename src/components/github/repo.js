import React from 'react';
import PropTypes from 'prop-types';

const Repo = (props) => {
    const {repo} = props;
    const createdAt = new Date(repo.created_at).toLocaleDateString();
    const updatedAt = new Date(repo.updated_at).toLocaleDateString();
    return(
        <div className="col-md-4 mb-2">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{repo.name}</h5>
                    <p className="card-text">{repo.description}</p>
                    <p> <small className="text-muted">Created Date: {createdAt}, <br />Last updated {updatedAt}</small></p>
                    <a href={repo.html_url} className="btn btn-primary">View</a>
                </div>
            </div>
        </div>
    );
};

Repo.propTypes = {
    repo: PropTypes.object.isRequired
};

export default Repo;