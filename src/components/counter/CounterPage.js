import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as counterActions from '../../actions/counterActions';


class Counterpage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state ={
            counter: 0
        };
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }
    componentWillMount() {
        this.setState({
            counter: this.props.counter
        });
        debugger;
    }
    componentWillReceiveProps(nextProps) {
        this.setState({counter: nextProps.counter.counter});
        debugger;
    }
    onDecrement() {
        console.log("props", this.state.counter);
        this.props.actions.decrementCounterSuccess(this.state.counter);
    }

    onIncrement() {
        debugger;
        console.log("props", this.state.counter);
        this.props.actions.incrementCounterSuccess(this.state.counter);
    }
    render () {
        const {counter} = this.state;
        debugger;
        return (
            <div>
                <h1>Counter</h1>
                <h3>{counter}</h3>
                <div>
                    <button onClick={this.onIncrement}>+</button> 
                    <button onClick={this.onDecrement} disabled={this.state.counter === 0}>-</button>
                </div>
            </div>
        );
    }
}

Counterpage.propTypes = {
     actions: PropTypes.func.isRequired,
     counter: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        counter: state.counter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(counterActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counterpage);