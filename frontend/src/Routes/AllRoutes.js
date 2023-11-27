import { Routes, Route } from "react-router-dom";
import { HomePage, AddParticipants, ShowResult, PageNotFound, EventDetails, Contact, About} from "../pages/index";

export const AllRoutes = () => {
  return (
        <Routes>
            <Route path="/" element = { <HomePage /> }></Route>
            <Route path="/Add_Participants" element = { <AddParticipants /> }></Route>
            <Route path="/Show_Result" element = { <ShowResult /> }></Route>
            <Route path="/Event_Details" element = { <EventDetails /> }></Route>
            <Route path="/Contact" element = { <Contact /> }></Route>
            <Route path="/About" element = { <About /> }></Route>
            <Route path="*" element = { <PageNotFound /> }></Route>
        </Routes>
  )
}