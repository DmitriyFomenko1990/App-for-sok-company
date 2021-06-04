import DialogContent from "./DialogContent";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";



export default compose(
    connect(),
    withAuthRedirect)(DialogContent);

