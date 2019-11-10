import React from 'react';
import {withRouter} from 'react-router';
import {wordList} from '../../wordList';
import { WhiteTextField } from '../../assets/inputTypes/inputTypes'
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import { defaultTheme } from "../../assets/inputTypes/themes.js";
import { validateAlpha } from '../../utils/validations';
import Sound from 'react-sound';

class WordComponent extends React.Component {
    constructor(props){
        super(props);
        this.images = this.importAll(require.context('../../assets/images/wordImages', false, /\.(jpe?g)$/));
        this.sounds = this.importAll(require.context('../../assets/audioFiles/pretest_talker', false, /\.wav$/));
        this.state = {currentWord: 0, typedAnswer: '', playingStatus: Sound.status.PLAYING }
    }

    handleNameChange(event) {
        this.setState({ typedAnswer: event.target.value });
    };

    handleEnter(event) {
        const {currentWord, typedAnswer} = this.state;
        const errors = validateAlpha(typedAnswer);
        const isDisabled = Object.keys(errors).some(x => errors[x]);

        if (event.key === 'Enter' && isDisabled) {
            this.props.pushWord(wordList[currentWord], typedAnswer);
            if(currentWord >= wordList.length - 1){
                this.props.history.push('/final');
            }
            this.setState({ typedAnswer: '', currentWord: currentWord + 1, playingStatus: Sound.status.PLAYING });
        }   
    }

    handleButtonClick() {
        const {currentWord, typedAnswer} = this.state;
        this.props.pushWord(wordList[currentWord], typedAnswer);
        if(currentWord >= wordList.length - 1){
            this.props.history.push('/final');
        }
        this.setState({ typedAnswer: '', playingStatus: Sound.status.PLAYING, currentWord: this.state.currentWord + 1 })
    }
    
    importAll(r) {
        let images = {};
        // eslint-disable-next-line array-callback-return
        r.keys().map((item, index) => {images[item.replace('','')] = r(item) });
        return images;
    }

    handleFinishPlaying(){
        this.setState({ playingStatus: Sound.status.STOPPED });
    }

    render() {
        const {currentWord, typedAnswer, playingStatus} = this.state;

        const errors = validateAlpha(this.state.typedAnswer);
        const isDisabled = Object.keys(errors).some(x => errors[x]);

        return (
            <div>
                <div>
                    <img src={this.images[`./pic_${wordList[currentWord]}.jpg`]} alt='' />
                    <Sound
                        url={this.sounds[`./pretest_talker_${wordList[currentWord]}.wav`]}
                        playStatus={playingStatus}
                        onFinishedPlaying={this.handleFinishPlaying.bind(this)}
                    />
                </div>
                <div className='name-input-container'>
                        <WhiteTextField id="name-input" value={typedAnswer}
                        autoComplete='off' autoFocus={true}
                        fullWidth label="Enter word" variant="outlined" spellCheck={false}
                        onChange={this.handleNameChange.bind(this)} onKeyPress={this.handleEnter.bind(this)}/>
                </div>
                
                <ThemeProvider theme={defaultTheme}>
                    <Button variant="contained" color="primary"
                    size='large' disabled={!isDisabled}
                    onClick={this.handleButtonClick.bind(this)}>
                        Continue
                    </Button>
                </ThemeProvider>
            </div>
        );
    }
}

export const WordComponentView = withRouter(WordComponent);