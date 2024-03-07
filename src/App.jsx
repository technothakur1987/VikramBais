import { useContext } from "react";
import "./App.css";
import BacktoQuestion from "./components/BacktoQuestion";
import CenterPanel from "./components/CenterPanel";
import Fab from "./components/Fab";
import Header from "./components/Header";
import ReportIssuePannel from './components/ReportIssuePannel'
import FeedbackPanel from './components/FeedbackPanel'
import { AppContext } from "./Store/store";
import SuggestionPanel from "./components/SuggestionPanel";
import ContactPanel from "./components/ContactPanel";
import DarkOverlay from "./components/DarkOverLay";




function App() {
  let {
    
   
    openReportIssuePanel,OpenFeedbackPanel,OpenSuggestionPanel,OpenContactPanel
  } = useContext(AppContext);

  console.log(`resportIssuePanel is ${openReportIssuePanel}`)
  console.log(`feedbackpanel is ${OpenFeedbackPanel}`)
  console.log(`suggestionpanel is ${OpenSuggestionPanel}`)
  console.log(`contactpanel is ${OpenContactPanel}`)
  
  

 
  return (
    <>
    <DarkOverlay />
      <Header />
       <BacktoQuestion />
      <CenterPanel />
      <Fab/>
      
     {openReportIssuePanel?<ReportIssuePannel/>:''}
     {OpenFeedbackPanel?<FeedbackPanel/>:''}
     {OpenSuggestionPanel?<SuggestionPanel/>:''}
     {OpenContactPanel?<ContactPanel/>:''}
     
    </>
  );
}

export default App;
