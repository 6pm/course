import React, { PureComponent } from 'react'
import Menu from './../components/Menu'
import { connect } from 'react-redux';
import { saySomething } from './../actions/header'

class Home extends PureComponent {
    render() {
        const { saySomething } = this.props;

        return (
            <div>
                <Menu />

                Home

                <hr />
                <h2>Sagas</h2>

                <button onClick={() => saySomething('yes')} >Say yes</button>
                <button onClick={() => saySomething('no')} >Say no</button>
                <button onClick={() => saySomething('maybe')} >Say maybe</button>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    saySomething: (flag) => dispatch(
        saySomething(flag)
    ),
})

export default connect(
    null,
    mapDispatchToProps
)(Home)
