import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { FinalPageView } from "./view";
import {createUser} from '../../actionCreators/userActionCreator'

const mapStateToProps = (state, props) => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({createUser}, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(FinalPageView);