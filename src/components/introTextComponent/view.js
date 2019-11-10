import React from 'react';
import {withRouter} from 'react-router';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import { defaultTheme } from "../../assets/inputTypes/themes.js";
import Sound from 'react-sound';
import '../../assets/css/app.css';
import '../../assets/css/introduction.css';
import instructions from '../../assets/audioFiles/instructions/pretest_instructions.wav';
import questions from '../../assets/audioFiles/instructions/pretest_anyQuestions.wav';

class IntroTextComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = { playingStatus: Sound.status.PLAYING, continue: false, showIntro: true }
    }
    
    handleIntroButtonClick(){
        this.setState({ playingStatus: Sound.status.PLAYING, continue: false, showIntro: false });
    }

    handleQuestionsButtonClick(){
        this.setState({ continue: false, showIntro: false });
        this.props.history.push('words');
    }

    handleIntroFinished() {
        this.setState({ playingStatus: Sound.status.STOPPED, continue: true });
    }
    
    render() {
        const introText = 'You will see a picture and hear a word. You will be asked to spell the word using the computer keyboard. If you are not sure how to spell the word, just make your best guess. You will only be able to hear the word one time, so be sure to pay attention. Is this loud enough?';
        const questionsText = 'Any questions?';
        return (
            <div className="App">
                <div className="intro-container">
                    <p className={ this.state.showIntro ? null : "text-container"}>
                        { this.state.showIntro ? introText : questionsText }
                    </p>

                    <Sound
                        url={this.state.showIntro ? instructions : questions}
                        playStatus={this.state.playingStatus}
                        onFinishedPlaying={this.handleIntroFinished.bind(this)}
                    />
                
                    <ThemeProvider theme={defaultTheme}>
                        <Button variant="contained" color="primary"
                        size='large' disabled={!this.state.continue}
                        onClick={ this.state.showIntro ? this.handleIntroButtonClick.bind(this) : this.handleQuestionsButtonClick.bind(this)}>
                            Continue
                        </Button>
                    </ThemeProvider>
                </div>
            </div>
        );
    }
}

export const IntroTextView = withRouter(IntroTextComponent);