import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./CurrentUser"
import questionsReducer from "./questions";
import usersReducer from "./users";
import otpReducer from "./otpController";
import subscriptionReducer from "./subscription";
export default combineReducers({
    authReducer,
    currentUserReducer,
    questionsReducer,
    usersReducer,
    otp: otpReducer,
    subscription: subscriptionReducer
})