import React, {Component} from 'react';
import axios from 'axios';

class GetRequestErrorHandling extends Component {
    constructor(props) {
        super(props);
        this.status = { totalReactPackages: null, errorMessage: null };
    }

    componentDidMount() {
        axios.get('https://api.npms.io/v2/invalid-url')
        .then((response) => this.setState({ totalReactPackages: response.date.total }))
        .catch((error) => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!');
        });
    }

    render() {
        const { totalReactPackages } = this.status;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">GET Request  with Error Handling</h5>
                <div className="card-body">
                    Error message: {errorMessage}
                </div>
            </div>
        );
    }
}

export default GetRequestErrorHandling;