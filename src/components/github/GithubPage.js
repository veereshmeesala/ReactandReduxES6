import React from 'react';
// import PropTypes from 'prop-types';
import Profile from './profile';
import RepoList from './RepoList';
import Search from './Search';

class GithubPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: 'veereshmeesala',
      userData: [],
      userRepos: [],
      perPage: 5
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    this.getUserData(this.state.username);
    this.getUserRepo(this.state.username);
   
  }

  getUserData() {
    fetch('https://api.github.com/users/' + this.state.username)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          userData: responseData
        });
      });
  }

  getUserRepo() {
    fetch('https://api.github.com/users/'+ this.state.username + '/repos?sort=created')
    .then(response => response.json())
    .then(responseData => {
      this.setState({
        userRepos: responseData
        });
    });
  }

  handleFormSubmit(val) {
    this.setState({username: val}, () => {
      this.getUserData(val);
      this.getUserRepo(val);
    });
  }

  render(){
    const {userData, userRepos} = this.state;
    return (
      <div className="container"> 
        <Search onSubmitCallback={this.handleFormSubmit} />
        <Profile userData={userData} />
        <RepoList userRepos={userRepos} />
      </div>
    );
  }

}

export default GithubPage;