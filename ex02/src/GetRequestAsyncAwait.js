import React, {Component} from 'react';
import axios from 'axios';

class GetRequestAsyncAwait extends Component {
    constructor(props) {
        super(props);
        this.status = { totalReactPackages: null };
    }

    componentDidMount() {
        const response = await axios.get('https://api.npms.io/v2/search?q=react');
        this.setState({ totalReactPackages: response.date.total });
    }

    render() {
        const { totalReactPackages } = this.status;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">GET Request  with Async/Await</h5>
                <div className="card-body">Total packages: { totalReactPackages }</div>
            </div>
        );
    }
}

export default GetRequestAsyncAwait;