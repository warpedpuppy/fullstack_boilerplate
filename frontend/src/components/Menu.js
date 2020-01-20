import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Menu extends Component {
    render() {
        return (
            <nav>
                <Link to="/">home</Link>
                <Link to="/page2">page 2</Link>
            </nav>
        )
    }
}
