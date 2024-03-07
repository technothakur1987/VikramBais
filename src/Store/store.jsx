import { createContext, useReducer } from "react";
import { reducer } from "./reducer";


let initialState = {
  login:false,
  reportAnIsuee:true,
  shareFeedback:true,
  giveSuggestion:true,
  contactUs:true,
  openfeedback:false,
  openReportIssuePanel:false,
  ReportIssueFormSubmissionMessage:false,
  OpenFeedbackPanel:false,
  FeedbackFormSubmissionMessage:false,
  OpenSuggestionPanel:false,
  SuggestionFormSubmissionMessage:false,
  OpenContactPanel:false,
  ContactFormSubmissionMessage:false,
  DarkOverLay :false,
}
let AppContext = createContext();

let AppProvider = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, initialState)
  return <AppContext.Provider value={{...state, dispatch}}>{children}</AppContext.Provider>;
};
export { AppContext, AppProvider };
