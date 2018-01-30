import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state ={
            course: Object.assign({}, this.props.course),
            errors: {}
        };
    }

    render() {
        return (
            <div>
                <h1>Manage Course</h1>
                <CourseForm course={this.state.course}
                            allAuthors={[]}
                            errors={this.state.errors} />
            </div>
        );
    }
}

ManageCoursePage.propTypes = { 
    course: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    const course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

    return {
        course: course
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);