import { Component } from 'react';


class ErrorBoundary extends Component {

    constructor(props) {

        super(props);

        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };

        this.resetState = this.resetState.bind(this);
    }

    // static getDerivedStateFromError(error) {

    //     return { hasError: true, error };
    // }

    resetState() {

        this.setState({
            hasError: false,
            error: null,
            errorInfo: null
        });

        console.clear();
    }

    componentDidCatch(error, errorInfo) {

        if (error) {

            this.setState({
                hasError: true,
                error: error,
                errorInfo: errorInfo
            });
        }
        else {

            this.resetState();
        }
    }

    render() {

        if (this.state.hasError) {

            return (
                <div>
                    <button onClick={this.resetState}>Reset</button>
                    <p>Something went wrong...</p><br></br>
                    <p><u>The error is</u> {this.state.error.toString()} </p><br></br>
                </div>
            )
        }

        return (
            <>
                {this.props.children}
            </>
        );
    }
}

export default ErrorBoundary;