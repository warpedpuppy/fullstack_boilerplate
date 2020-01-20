import React, { Component } from 'react'
import Config from '../config';
import ApiCalls from '../services/apicall-service';
export default class BackendCall extends Component {

    state = {
        result: 'nothing yet'
    }

    onSumbmitHandler = async (e) => {
        e.preventDefault();
        let result = await ApiCalls.TestAPICall(`${Config.API_ENDPOINT}/testing`)
        
       this.setState({result: result.success.toString()})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSumbmitHandler}>
                    <input type="submit" />
                </form>
                <div>success: {this.state.result}</div>
            </div>
        )
    }
}
