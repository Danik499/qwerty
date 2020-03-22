import React, { Component } from 'react'

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            person: null
        }
    }

    async componentDidMount() {
        try {
            const url = "http://localhost:5000/api/user";
            const response = await fetch(url);
            console.log(548)
            const data = await response.json();
            this.setState({ person: data.result[0] });
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>{this.state.person}</div>
        )
    }
}
