import React, {Component} from 'react';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
            <p className="App-intro">{this.state.apiResponse}</p>
        );
    }

}

export default Home;