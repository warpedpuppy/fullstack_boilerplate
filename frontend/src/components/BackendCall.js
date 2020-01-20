import React, { Component } from 'react'
import Config from '../config';

export default class BackendCall extends Component {

    onSumbmitHandler = async (e) => {
        e.preventDefault();
        let result = await fetch(`${Config.API_ENDPOINT}/testing`);
        let resultJson = await result.json();
        console.log(resultJson)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSumbmitHandler}>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
