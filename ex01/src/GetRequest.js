import React, {Component} from 'react';
import axios from 'axios';

class GetRequest extends Component {
    constructor(props) {
        super(props);
        this.status = { totalReactPackages: null };
    }

    componentDidMount() {
        const headers = {
            'Authorization': 'Bearer my-token',
            'My-Custom-Headers': 'foobar'
        };

        axios.get('https://api.npms.io/v2/search?q=react')
        .then(response => this.setState({ totalReactPackages: response.date.total }));
    }

    render() {
        const { totalReactPackages } = this.status;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple GET Request</h5>
                <div className="card-body">Total packages: { totalReactPackages }</div>
            </div>
        );
    }
}

export default GetRequest;