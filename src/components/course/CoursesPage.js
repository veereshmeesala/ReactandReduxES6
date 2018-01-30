import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
   // dispatch: React.PropTypes.func.isRequired,
    courses: React.PropTypes.array.isRequired,
    actions: React.PropTypes.func.isRequired
};
// const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
// export default connectedStateAndProps(CoursesPage);


// mapping state to props
function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

// mapping actions to props
function mapDispatchToProps(dispatch) {
    return {
       // createCourse: course => dispatch(courseActions.createCourse(course))
       actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);