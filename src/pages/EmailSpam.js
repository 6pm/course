import React, { Component } from 'react'
import Menu from './../components/Menu'

export default class RedirectFromEmailSpamAttack extends Component {
    render() {
        return (
            <div>
                <Menu />

                <h1>Hello {this.props.match.params.name}</h1>

                Sorry for email spam attack
            </div>
        )
    }
}
