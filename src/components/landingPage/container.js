import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { LandingPageView } from "./view";
import {createUser} from '../../actionCreators/userActionCreator'
import {updateDevMode} from '../../actionCreators/devModeCreator';
import {wakeupServer} from '../../actionCreators/wakeupActionCreator';

const mapStateToProps = (state, props) => {
    return {
        devMode: state.devMode,
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({createUser, updateDevMode, wakeupServer}, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(LandingPageView);