import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        let username = this.refs.username.value.trim();
        if(!username) {
            alert('Please enter a username');
            return;
        }
        this.props.onSubmitCallback(username);
        this.refs.username.value= '';
    }

    render() {
        return(
            <form onSubmit={this.onSubmit} className="mt-10 mp-3 mb-3 p-3 bg-white rounded box-shadow">
                <div className="form-row">
                    <div className="form-group col-md-12">
                            <h3>Search Github User</h3>
                            <input type="text" ref="username" className="form-control"  />
                            <button type="submit" className="btn btn-primary mt-2">Submit</button>
                    </div>
                   
                </div>
            </form>
        );
    }
}

// Search.prototype = {
//     onSubmitCallback: React.PropTypes.func
// };

export default Search;