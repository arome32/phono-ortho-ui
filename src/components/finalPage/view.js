import React from 'react';
import {withRouter} from 'react-router';
import '../../assets/css/app.css'

class FinalPage extends React.Component {;
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h2>Thank you for your participation.</h2>
                    <h3>We will email you with the results soon.</h3>
                </header>
            </div>
        );
    }
}

export const FinalPageView = withRouter(FinalPage);
