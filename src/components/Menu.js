import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { changeText } from './../actions/header';

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

const mapStateToProps = state => ({
    someText: state.header.someText,
})
const mapDispatchToProps = (dispatch, ownProps) => ({
    changeText: (activePage) => dispatch(
        changeText(activePage)
    ),
})



class Form extends Component {

    state = {
        input: ''
    }

    render() {
        const { someText, changeText } = this.props

        return (
            <div>
                <h3>{someText}</h3>
                <input
                    value={this.state.input}
                    onChange={(e) => {
                        this.setState({
                            input: e.target.value
                        })
                    }}
                />
                <button onClick={() => {
                    changeText(this.state.input)
                    this.setState({ input: '' })
                }}>Save</button>
            </div>
        )
    }
}

const FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Form)

