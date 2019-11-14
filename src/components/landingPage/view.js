import React from 'react';
import {withRouter} from 'react-router';
import logo from '../../assets/images/logo.svg'
import { WhiteTextField, WhiteCheckBox } from '../../assets/inputTypes/inputTypes'
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ThemeProvider } from '@material-ui/styles';
import '../../assets/css/app.css'
import { defaultTheme } from "../../assets/inputTypes/themes.js";
import { validateAlphaNumeric } from '../../utils/validations';

class LandingPage extends React.Component {
    constructor(props){
        super(props);
        this.state = { name: ''};
    }

    componentDidMount() {
        this.props.wakeupServer();
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    };

    handleChange(event) {
        this.props.updateDevMode(event.target.checked);
      };

    handleEnter(event) {
        const errors = validateAlphaNumeric(this.state.name);
        const isDisabled = Object.keys(errors).some(x => errors[x]);

        if (event.key === 'Enter' && isDisabled) {
            this.props.createUser(this.state.name);
            if(this.props.devMode){
                this.props.history.push('/words');
            } else { 
                this.props.history.push('/introduction');
            }
        }
    }

    handleButtonClick() {
        this.props.createUser(this.state.name);
        if(this.props.devMode){
            this.props.history.push('/words');
        } else { 
            this.props.history.push('/introduction');
        }
    }

    render() {
        const errors = validateAlphaNumeric(this.state.name);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p className='inputs'>
                    Welcome to the Science Spelling Training.<br/><br/>
                     Please enter your name:
                    </p>
                    <div className='name-input-container'>
                            <WhiteTextField id="name-input" value={this.state.name}
                            fullWidth label="Name" variant="outlined" 
                            autoComplete='off'
                            onChange={this.handleNameChange.bind(this)} onKeyPress={this.handleEnter.bind(this)}/>
                             {/* <FormControlLabel
                             control={
                                <WhiteCheckBox checked={this.state.devMode} 
                                onChange={this.handleChange.bind(this)}
                                value='Dev Mode'
                                color="white"
                                />
                            }
                            label="Dev Mode"
                            /> */}
                    </div>
                
                    <ThemeProvider theme={defaultTheme}>
                        <Button variant="contained" color="primary"
                        size='large' disabled={!isDisabled}
                        onClick={this.handleButtonClick.bind(this)}>
                            Continue
                        </Button>
                </ThemeProvider>
                </header>
            </div>
        );
    }
}

export const LandingPageView = withRouter(LandingPage);
