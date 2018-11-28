import React, { PureComponent, Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { changeText } from './../actions/header';

import { createSelector } from 'reselect'

const Menu = ({ someText, changeText }) => (
    <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>

        <br />
        <FormContainer />
    </nav>
)

export default Menu;

// ---------

class Form extends Component {
    state = {
        input: '',
        array: ['item'],
    }

    setText = () => {
        const { changeText } = this.props

        changeText(this.state.input)
        this.setState({ input: '' })
    }

    checkArray = () => {
        this.setState({ array: this.state.array })
    }

    checkObject = () => {
        const { changeText } = this.props

        changeText('render')
    }

    render() {
        const { form } = this.props
        console.log('render');

        return (
            <div>
                <h3>{form.someText}</h3>
                <input
                    value={this.state.input}
                    onChange={(e) => {
                        this.setState({
                            input: e.target.value
                        })
                    }}
                />
                <button onClick={this.setText} disabled={!this.state.input}>Save</button>

                <button onClick={this.checkArray}>array</button>

                <button onClick={this.checkObject}>call action</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    // form: state.header.form,
    form: formSelector(state),
})
const mapDispatchToProps = (dispatch, ownProps) => ({
    changeText: (activePage) => dispatch(
        changeText(activePage)
    ),
})

const form = state => state.header.form.someText;
const formSelector = createSelector(
    form,
    someText => ({ someText })
)

const FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Form)

