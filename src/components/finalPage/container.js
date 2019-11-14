import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { FinalPageView } from "./view";
import {postUser} from '../../actionCreators/userActionCreator'

const mapStateToProps = (state, props) => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({postUser}, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(FinalPageView);