let reducer = (state, action) => {
  switch (action.type) {
    case "CHANGELOGIN":
      return {
        ...state,
        login: !state.login,
      };

    case "OPENFEEDBACK":
      return {
        ...state,
        openfeedback: true,
      };

    case "CLOSEFEEDBACK":
      return {
        ...state,
        openfeedback: false,
      };

    case "OPENREPORTISSUEPANEL":
      return {
        ...state,
        openReportIssuePanel: true,
       
      };

    case "CLOSEREPORTISSUEPANEL":
      return {
        ...state,
        openReportIssuePanel: false,
      };

    case "OPENREPORTMESSAGE":
      return {
        ...state,
        ReportIssueFormSubmissionMessage: true,
      };

    case "CLOSEREPORTMESSAGE":
      return {
        ...state,
        ReportIssueFormSubmissionMessage: false,
      };

    case "OPENFEEDBACKPANEL":
      return {
        ...state,
        OpenFeedbackPanel: true,
       
      };

    case "CLOSEFEEDBACKPANEL":
      return {
        ...state,
        OpenFeedbackPanel: false,
      };

    case "OPENFEEDBACKMESSAGE":
      return {
        ...state,
        FeedbackFormSubmissionMessage: true,
      };

    case "CLOSEFEEDBACKTMESSAGE":
      return {
        ...state,
        FeedbackFormSubmissionMessage: false,
      };

    case "OPENSUGGESTIONPANEL":
      return {
        ...state,
        OpenSuggestionPanel: true,
        
      };

    case "CLOSESUGGESTIONPANEL":
      return {
        ...state,
        OpenSuggestionPanel: false,
      };

    case "OPENSUGGESTIONMESSAGE":
      return {
        ...state,
        SuggestionFormSubmissionMessage: true,
      };

    case "CLOSEUGGESTIONMESSAGE":
      return {
        ...state,
        SuggestionFormSubmissionMessage: false,
      };

    case "OPENCONTACTPANEL":
      return {
        ...state,
        OpenContactPanel: true,
        
       
      };

    case "CLOSECONTACTPANEL":
      return {
        ...state,
        OpenContactPanel: false,
      };

    case "OPENCONTACTMESSAGE":
      return {
        ...state,
        ContactFormSubmissionMessage: true,
      };

    case "CLOSECONTACTMESSAGE":
      return {
        ...state,
        ContactFormSubmissionMessage: false,
      };

      case "DARKOVERLAY":
        return {
          ...state,
          DarkOverLay: true,
        };

        case "CLOSEDARKOVERLAY":
        return {
          ...state,
          DarkOverLay: false,
        };

    default:
      return state;
  }
};

export { reducer };
