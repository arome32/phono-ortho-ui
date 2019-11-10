import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { WordComponentView } from "./view";
import {pushWord} from '../../actionCreators/userActionCreator'

const mapStateToProps = (state, props) => {
    return {
        wordFinished: state.wordFinished,
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({pushWord}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WordComponentView);