import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { IntroTextView } from "./view";

const mapStateToProps = (state, props) => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(IntroTextView);